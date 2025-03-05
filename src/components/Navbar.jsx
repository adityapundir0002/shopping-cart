import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice"; // Import logout action

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center gap-6">
        <span className="text-white text-3xl font-bold tracking-wide">
          ShopEase
        </span>

        {/* Home Link */}
        <Link
          to="/products"
          className={`text-white text-lg font-medium transition duration-200 hover:text-gray-200 ${
            location.pathname === "/products" ? "underline" : ""
          }`}
        >
          Home
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {/* Cart Icon */}
        <Link
          to="/cart"
          className="relative cursor-pointer text-white text-2xl"
        >
          🛒
          {totalItemsInCart > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-1 rounded-full">
              {totalItemsInCart}
            </span>
          )}
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition duration-300 hover:bg-red-600 shadow-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
