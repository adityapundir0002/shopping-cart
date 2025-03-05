import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Added useNavigate for back button
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Added for navigation
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === Number(id));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/products")}
        className="flex items-center text-blue-500 hover:text-blue-700 font-medium mb-4 cursor-pointer"
      >
        <span className="text-2xl mr-1">←</span> Back
      </button>

      <h2 className="text-3xl font-bold text-center mb-6">{product.title}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-md h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-lg text-gray-700">{product.description}</p>

          <p className="mt-4">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Rating:</span> ⭐ {product.rating} /
            5
          </p>

          <p className="mt-2">
            <span className="font-semibold">Availability:</span>{" "}
            <span
              className={`${
                product.availabilityStatus === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              } font-semibold`}
            >
              {product.availabilityStatus}
            </span>
          </p>

          <p className="mt-2">
            <span className="font-semibold">Shipping:</span>{" "}
            {product.shippingInformation}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Warranty:</span>{" "}
            {product.warrantyInformation}
          </p>

          <p className="mt-4 text-2xl font-semibold text-green-600">
            ${product.price.toFixed(2)}
          </p>

          {/* Add to Cart / Quantity Controls */}
          {!cartItem ? (
            <button
              onClick={handleAddToCart}
              className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer w-full"
            >
              Add to Cart
            </button>
          ) : (
            <div className="mt-6 flex items-center space-x-2">
              <button
                onClick={handleDecrease}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-l-lg hover:bg-red-600 transition cursor-pointer"
              >
                -
              </button>
              <span className="px-6 py-2 border text-lg font-semibold">
                {cartItem.quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-r-lg hover:bg-green-600 transition cursor-pointer"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
