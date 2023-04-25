import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Mechandising from "./components/Mechandising";
import Mangas from "./components/Mangas";
import Comics from "./components/Comics";
import Foro from "./components/Foro";
import Libreria from "./components/Libreria";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar activeLink={activeLink} handleLinkClick={handleLinkClick}/>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/merchandising" element={<Mechandising />} />
                    <Route path="/mangas" element={<Mangas />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="/foro" element={<Foro />} />
                    <Route path="/libreria" element={<Libreria />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer activeLink={activeLink} handleLinkClick={handleLinkClick}/>
            </div>
        </Router>
    );
}

export default App;