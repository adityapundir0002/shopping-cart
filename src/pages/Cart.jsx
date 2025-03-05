import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth?.user || null);
  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const WEBHOOK_URL =
    "https://webhook.site/81ffe0d0-add0-42c7-8f1a-d864a90dbfce";

  const handlePurchase = async () => {
    if (!user) {
      toast.error("Please log in to make a purchase!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Add items before purchasing!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
          items: cartItems,
          totalPrice: totalPrice.toFixed(2),
        }),
        mode: "no-cors",
      });

      toast.success("Purchase successful! Your order has been placed.", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.message, { position: "top-right", autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 pt-10 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg">
          Your cart is empty.
          <Link to="/products" className="text-blue-500 font-semibold ml-2">
            Go Shopping
          </Link>
        </p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b py-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">
                  ${item.price} x {item.quantity} ={" "}
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </p>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-3 bg-red-500 text-white rounded cursor-pointer "
                >
                  -
                </button>
                <span className="px-4 text-lg">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-3 bg-green-500 text-white rounded cursor-pointer"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-3 px-3 bg-gray-500 text-white rounded cursor-pointer "
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="text-2xl font-semibold mt-4">
            Total: ${totalPrice.toFixed(2)}
          </h3>

          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md w-full disabled:bg-gray-400 cursor-pointer"
            onClick={handlePurchase}
            disabled={loading}
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
