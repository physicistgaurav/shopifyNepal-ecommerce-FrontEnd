import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
