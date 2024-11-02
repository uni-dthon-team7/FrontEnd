import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cook from "./pages/Cook";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Recipe from "./pages/Recipe";
import Steps from "./pages/Steps";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cook" element={<Cook />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/step/:id" element={<Steps />} />
      </Routes>
      <NavBar />  
    </Router>
  );
}

export default App;
