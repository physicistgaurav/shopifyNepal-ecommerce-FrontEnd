import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Product from "./screens/product/Product";

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

          <Route path="*">404 Not Found! </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
