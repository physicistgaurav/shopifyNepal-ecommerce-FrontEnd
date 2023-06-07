import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <About />
        <Contact />

        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
