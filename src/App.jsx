import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Mechandising from "./components/Mechandising";
import Mangas from "./components/Mangas";
import Comics from "./components/Comics";
import Foro from "./components/Foro";
import Libreria from "./components/Libreria";
import LibreriaDetail from "./components/LibreriaDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import { Detail } from "./components/Detail";
import { Carrito } from "./components/Carrito";
import Admin from "./components/Admin";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";
function App() {
    const [activeLink, setActiveLink] = useState('/');
    const [cartItems, setCartItems] = useState([]);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const addToCart = (article) => {
        // Lógica para añadir el artículo al carrito
        setCartItems([...cartItems, article]);
    };
    
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar activeLink={activeLink} handleLinkClick={handleLinkClick} cartItems={cartItems} />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/Merchandising" element={<Mechandising addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/Mangas" element={<Mangas addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/Comics" element={<Comics addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/foro" element={<Foro />} />
                    <Route path="/libreria" element={<Libreria />} />
                    <Route path="/libreria/:id" element={<LibreriaDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/carrito" element={<Carrito cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/:category/detail/:id" element={<Detail />} />
                    <Route path="/admin/add" element={<AddArticle />} />
                    <Route path="/admin/edit/:id" element={<EditArticle />} />
                </Routes>
                <Footer activeLink={activeLink} handleLinkClick={handleLinkClick} />
            </div>
        </Router>
    );
}

export default App;