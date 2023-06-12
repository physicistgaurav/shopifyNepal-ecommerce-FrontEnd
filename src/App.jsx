import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Product from "./screens/product/Product";
import ProductDetail from "./screens/product/ProductDetail";
import { Toaster } from "react-hot-toast";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import OrderDetail from "./screens/OrderDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<OrderDetail />} />

          <Route path="*">404 Not Found! </Route>
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </Router>
    </div>
  );
}

export default App;
