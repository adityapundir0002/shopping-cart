import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Fixed imports

const Products = () => {
  const [products, setProducts] = useState([]);
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messageIntervalRef = useRef(null);
  const navigate = useNavigate();

  const messages = [
    { text: "🛍️ Welcome to ShopEase – Your One-Stop Destination!", color: "text-blue-500" },
    { text: "🔥 Hot Deals & Exclusive Offers Await You!", color: "text-red-500" },
    { text: "💖 Find Your Favorites & Enjoy Shopping!", color: "text-pink-500" },
    { text: "💰 Big Savings! Unbeatable Discounts Inside!", color: "text-green-500" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products.slice(0, 15));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    messageIntervalRef.current = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(messageIntervalRef.current);
  }, [messages.length]); // ✅ Fixed missing dependency

  const handleToggleDetails = (e, product) => {
    e.stopPropagation();
    setExpandedProduct(expandedProduct === product.id ? null : product.id);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchQuery)
  );

  return (
    <div className="p-6">
      {/* Search Bar & Dynamic Message */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded w-60 focus:outline-none focus:border-blue-500"
          />

          <div className="flex-grow text-center mr-15">
            <motion.h2
              key={messages[currentMessageIndex].text}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className={`text-xl font-semibold ${messages[currentMessageIndex].color}`}
            >
              {messages[currentMessageIndex].text}
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md bg-white cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-400 h-[200px] flex flex-col justify-between"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700 text-sm mt-1">${product.price}</p>

              {expandedProduct === product.id && (
                <div className="mt-3 text-sm text-gray-600">
                  <p><strong>Brand:</strong> {product.brand}</p>
                  <p><strong>Rating:</strong> {product.rating} ⭐</p>
                  <p><strong>Warranty:</strong> {product.warrantyInformation || "N/A"}</p>
                </div>
              )}
            </div>

            <button
              onClick={(e) => handleToggleDetails(e, product)}
              className="mt-4 bg-blue-500 text-white py-1.5 px-5 rounded-md transition-all hover:bg-blue-600 self-start cursor-pointer"
            >
              {expandedProduct === product.id ? "View Less" : "View More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
