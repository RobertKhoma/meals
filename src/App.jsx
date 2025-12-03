/* import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Heder from "./components/Heder";
import Futer from "./components/Futer";
import Category from "./Pages/Category";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <Router>
      <Heder />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        <Route path="/category/:name" element={<Category/>}></Route>
        <Route path="/product/:idMeal" element={<Recipe/>}></Route>
        </Routes>
      </main>
      <Futer />
    </Router>
  );
}

export default App; */


import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Heder from "./components/Heder";
import Futer from "./components/Futer";
import Category from "./Pages/Category";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <>
      <Heder />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/product/:idMeal" element={<Recipe />} />
        </Routes>
      </main>
      <Futer />
    </>
  );
}

export default App;
