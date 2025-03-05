import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";

// Layout Component for Pages with Navbar
const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="mt-16 p-4">{children}</div> {/* Adds spacing below Navbar */}
  </>
);

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Login Page (No Navbar) */}
        <Route path="/" element={<Login />} />

        {/* Pages with Navbar */}
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/products/:id" element={<Layout><ProductDetails /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
