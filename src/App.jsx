import "./css/App.css";
import Favorites from "./pages/Favorites.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContex.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
