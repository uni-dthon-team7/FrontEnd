import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cook from "./pages/Cook";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Recipe from "./pages/Recipe";
import Search from "./pages/search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cook" element={<Cook />} />
        <Route path="/recipe/:id" element={<Recipe />}/>
        <Route path="/search" element={<Search />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
