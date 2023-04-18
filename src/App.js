import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Mechandising from "./components/Mechandising";
import Mangas from "./components/Mangas";
import Comics from "./components/Comics";
import Foro from "./components/Foro";
import Libreria from "./components/Libreria";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/merchandising" element={<Mechandising />} />
                    <Route path="/mangas" element={<Mangas />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="/foro" element={<Foro />} />
                    <Route path="/libreria" element={<Libreria />} />
                </Routes>
            </Router>
            <main></main>
            <Footer />
        </div>
    );
}

export default App;
