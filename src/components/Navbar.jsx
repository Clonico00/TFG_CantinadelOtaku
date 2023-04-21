import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png';
import UsuarioIconDefault from '../img/usuario_icon.png';
import Carrito from "../img/carrito.png";


function Navbar({activeLink, handleLinkClick}) {
    const [showMenu, setShowMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleMenuLogin = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleToggle = () => {
        toggleMenu();
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1100) {
                setShowMenu(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="bg-white navbar-menu">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            style={{
                                backfaceVisibility: 'hidden',
                                color: '#1e2447',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <img src={Logo} alt="Logo" className="h-12 w-12 mr-2"/>
                            <span
                                className="font-extrabold tracking-tight text-2xl whitespace-nowrap">Cantina del Otaku</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 tracking-tight flex-grow-1 menu-item">
                            <Link
                                to="/"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/' ? 'underline' : ''
                                }`}
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                onClick={() => handleLinkClick('/')}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/merchandising"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/merchandising' ? 'underline' : ''
                                }`}
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                onClick={() => handleLinkClick('/merchandising')}
                            >
                                Merchandising
                            </Link>
                            <Link
                                to="/mangas"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/mangas' ? 'underline' : ''
                                }`}
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                onClick={() => handleLinkClick('/mangas')}
                            >
                                Mangas
                            </Link>
                            <Link
                                to="/comics"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/comics' ? 'underline' : ''
                                }`}
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                onClick={() => handleLinkClick('/comics')}
                            >
                                Comics
                            </Link>
                            <Link
                                to="/foro"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/foro' ? 'underline' : ''
                                }`}
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                onClick={() => handleLinkClick('/foro')}
                            >
                                Foro
                            </Link>
                            <Link
                                to="/libreria"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/libreria' ? 'underline' : ''
                                }`}
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                onClick={() => handleLinkClick('/libreria')}
                            >
                                Libreria
                            </Link>
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="menu-item bg-transparent border-2 border-black rounded-lg w-full text-black font-md mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:font-light"
                                style={{
                                    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    color: '#1e2447',
                                    borderColor: '#1e2447',
                                    minWidth: '100px',
                                    maxWidth: '500px',
                                    fontSize: '1rem'
                                }}
                            />
                            <button type="submit"
                                    className=" menu-item font-bold border-2 border-black text-md py-1 px-4 rounded-lg transform hover:scale-105 hover:shadow-md transition-all duration-300"
                                    style={{backfaceVisibility: 'hidden', color: '#1e2447', borderColor: '#1e2447'}}>
                                Buscar
                            </button>


                        </div>
                    </div>
                    <div className="flex md:flex-row">
                        <div className="flex items-center relative">
                            <button
                                type="button"
                                className="text-gray-700 hover:text-gray-900 py-1 px-2 ml-4 md:px-4"
                                onClick={toggleMenuLogin}
                                style={{ right: "0"}}
                            >
                                <img
                                    src={UsuarioIconDefault}
                                    alt="Logo"
                                    className="h-8 w-8 md:h-10 md:w-10 object-contain mr-2"
                                    style={{minWidth: "20px", minHeight: "20px"}}
                                />
                            </button>
                            <button
                                type="button"
                                className="text-gray-700 hover:text-gray-900 py-1 px-1 md:px-4"
                            >
                                <img
                                    src={Carrito}
                                    alt="Logo"
                                    className="h-6 w-6 md:h-8 md:w-8 object-contain mr-2"
                                    style={{minWidth: "20px", minHeight: "20px"}}
                                />
                            </button>
                            {isMenuOpen && (
                                <div
                                    className="absolute z-10 bg-white rounded-md shadow-xl flex flex-col"
                                    style={{
                                        borderRadius: "0.375rem",
                                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                                        padding: "0.5rem",
                                        width: "max-content",
                                        left: "auto",
                                        right: "0",
                                        transform: "translate(0, calc(80% - 0.5rem))",                                    }}
                                >

                                <div className="px-3 py-2">
                                        <div className="font-extrabold mb-2">Javier Martinez Garcia</div>
                                        <hr className="border-gray-400 mb-2" />
                                    </div>
                                    <Link
                                        to="/register"
                                        className={`menu-item hover:underline transition-all duration-400 px-3 py-2 text-sm font-extrabold hover:text-shadow-lg `}
                                        style={{ backfaceVisibility: "hidden", color: "#3E62FF" }}
                                        onClick={() => handleLinkClick("/")}
                                    >
                                        Registro
                                    </Link>
                                    <Link
                                        to="/login"
                                        className={`menu-item hover:underline transition-all duration-400 px-3 py-2 text-sm font-extrabold hover:text-shadow-lg `}
                                        style={{ backfaceVisibility: "hidden", color: "#3E62FF" }}
                                        onClick={() => handleLinkClick("/")}
                                    >
                                        Iniciar sesión
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none `}
                                aria-controls="mobile-menu"
                                aria-expanded={showMenu ? 'true' : 'false'}
                                onClick={handleToggle}
                                style={{
                                    transform: showMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                }}
                            >
                                <span className="sr-only">Open main menu</span>
                                {showMenu ? (
                                    <svg
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="fill-current text-black"
                                    >
                                        <path
                                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="fill-current text-black"
                                    >
                                        <path
                                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${showMenu ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Inicio
                    </Link>
                    <Link
                        to="/merchandising"
                        className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Merchandising
                    </Link>
                    <Link
                        to="/mangas"
                        className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Mangas
                    </Link>
                    <Link
                        to="/comics"
                        className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Comics
                    </Link>
                    <Link
                        to="/foro"
                        className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Foro
                    </Link>
                    <Link
                        to="/libreria"
                        className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Libreria
                    </Link>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="bg-transparent border-2 border-black rounded-lg w-full sm:w-1/2 text-black font-bold mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:font-light menu-item"
                        style={{'transition': 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}
                    />

                    <button type="submit"
                            className="flex-shrink-0 font-bold border-2 border-black text-md py-1 px-4 rounded-lg transform hover:shadow-md transition-all duration-300 w-full sm:w-1/2 mt-4 menu-item"
                            style={{backfaceVisibility: 'hidden'}}>
                        Buscar
                    </button>
                </div>
            </div>
        </nav>

    );

}

export default Navbar;




