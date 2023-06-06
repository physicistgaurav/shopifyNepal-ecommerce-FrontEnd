import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <About />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
