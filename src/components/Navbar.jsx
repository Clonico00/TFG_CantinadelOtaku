import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import UsuarioIconDefault from '../img/usuario_icon.png';
import Carrito from "../img/carrito.png";
import { AuthContext } from './AuthContext';
import { db, auth } from '../firebase';
import { collection, where, getDocs, query } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function Navbar({ activeLink, handleLinkClick }) {
    const [showMenu, setShowMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const [image, setImage] = useState(UsuarioIconDefault);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser) {
                try {
                    const usersRef = collection(db, 'users');
                    const userQuery = await query(usersRef, where('email', '==', currentUser.email));
                    const snapshot = await getDocs(userQuery);

                    if (!snapshot.empty) {
                        const userData = snapshot.docs[0].data();
                        setUserData(userData);

                        // Establecer el estado "image" después de obtener los datos del usuario
                        const image = userData && userData.image ? userData.image : UsuarioIconDefault;
                        setImage(image);
                    }
                } catch (error) {
                    console.error('Error al obtener los datos del usuario:', error);
                }
            }
        };

        fetchUserData();
    }, [currentUser]);





    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleMenuLogin = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleToggle = () => {
        toggleMenu();
    };
    const closeMenu = () => {
        setShowMenu(false);
        setIsMenuOpen(false);
    }

    const handleLinkClickInternal = (path) => {
        closeMenu(); // Cerrar el menú antes de cambiar la ruta
        handleLinkClick(path); // Cambiar la ruta
    }

    const handleLogout = () => {
        auth
            .signOut()
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error('Error al cerrar sesión:', error);
            });
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
        <nav className="bg-white navbar-menu rounded-b-lg border border-gray-200">
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
                            }}
                        >
                            <img src={Logo} alt="Logo" className="h-16 w-16 mr-2" />
                            <span
                                className="font-extrabold tracking-tight hidden sm:block text-2xl md:text-md whitespace-nowrap">
                                Cantina del Otaku </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">

                        <div
                            className={`${currentUser && userData && userData.isAdmin === true ? 'pr-20 mr-20' : ''} ml-10 flex items-baseline space-x-4 tracking-tight flex-grow-1 menu-item `}>
                            {currentUser && userData && userData.isAdmin === true ? (
                                <>
                                    <Link
                                        to="/admin"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/admin' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/admin')}
                                    >
                                        Zona Admin
                                    </Link>
                                    <Link
                                        to="/foro"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/foro' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/foro')}
                                    >
                                        Foro
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/')}
                                    >
                                        Inicio
                                    </Link>
                                    <Link
                                        to="/merchandising"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/merchandising' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/merchandising')}
                                    >
                                        Merchandising
                                    </Link>
                                    <Link
                                        to="/mangas"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/mangas' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/mangas')}
                                    >
                                        Mangas
                                    </Link>
                                    <Link
                                        to="/comics"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/comics' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/comics')}
                                    >
                                        Comics
                                    </Link>
                                    <Link
                                        to="/foro"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/foro' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/foro')}
                                    >
                                        Foro
                                    </Link>
                                    <Link
                                        to="/libreria"
                                        className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg ${activeLink === '/libreria' ? 'underline' : ''
                                            }`}
                                        style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                        onClick={() => handleLinkClick('/libreria')}
                                    >
                                        Libreria
                                    </Link>
                                    <div className="flex items-center">
                                        <div className="relative flex-grow">
                                            <input
                                                type="text"
                                                placeholder="Buscar..."
                                                className="menu-item bg-gray-50 border border-gray-400 text-gray-900 rounded-lg w-full font-md mr-3 py-1 px-2 leading-tight focus:ring-blue-500 focus:border-blue-500 placeholder:font-light"
                                                style={{
                                                    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    minWidth: '100px',
                                                    maxWidth: '500px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-0 top-0 bottom-0 rounded-r-lg flex items-center justify-center p-2"
                                                style={{
                                                    backfaceVisibility: 'hidden',
                                                    color: '#1e2447',
                                                    borderColor: '#1e2447'
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4">
                                                    <path
                                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </>
                            )}

                        </div>
                    </div>
                    <div className="flex md:flex-row">
                        <div className={`flex items-center relative `}>
                            {currentUser && userData && userData.isAdmin === true ? (
                                <>
                                    <button
                                        type="button"
                                        className="text-gray-700 hover:text-gray-900 py-1 px-2 ml-4 md:px-4"
                                        onClick={toggleMenuLogin}
                                        style={{ right: "0" }}
                                    >
                                        <img
                                            src={image}
                                            alt="Logo"
                                            className="h-8 w-8 md:h-10 md:w-10 object-contain mr-2"
                                            style={{ minWidth: "20px", minHeight: "20px" }}
                                        />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className="text-gray-700 hover:text-gray-900 py-1 px-2 ml-4 md:px-4"
                                        onClick={toggleMenuLogin}
                                        style={{ right: "0" }}
                                    >
                                        <img
                                            src={image}
                                            alt="Logo"
                                            className="h-8 w-8 md:h-10 md:w-10 object-contain mr-2"
                                            style={{ minWidth: "20px", minHeight: "20px" }}
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="text-gray-700 hover:text-gray-900 py-1 px-1 md:px-4"
                                    >
                                        <Link to="/carrito">
                                            <img
                                                src={Carrito}
                                                alt="Logo"
                                                className="h-6 w-6 md:h-8 md:w-8 object-contain mr-2"
                                                style={{ minWidth: "20px", minHeight: "20px" }}
                                            />
                                        </Link>

                                    </button>
                                </>
                            )}


                            {isMenuOpen && (
                                <div
                                    className={`${!currentUser && !userData ? 'mt-5' : 'mt-6'} absolute z-10 bg-white rounded-md shadow-xl flex flex-col `}
                                    style={{
                                        borderRadius: "0.375rem",
                                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                                        padding: "0.5rem",
                                        width: "max-content",
                                        left: "auto",
                                        right: "0",
                                        transform: "translate(0, calc(80% - 0.5rem))",
                                    }}
                                >

                                    {currentUser ? (
                                        <>
                                            <div className="px-3 py-2">
                                                <div className="font-extrabold mb-2">
                                                    {userData ? userData.name : ''}
                                                </div>
                                                <hr className="border-gray-400 mb-2" />
                                            </div>
                                            <button
                                                className="menu-item hover:underline transition-all duration-400 px-3 py-2 text-sm font-bold hover:text-shadow-lg"
                                                style={{ backfaceVisibility: "hidden", color: "#3a63f2" }}
                                                onClick={handleLogout}
                                            >
                                                Cerrar sesión
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/register"
                                                className="menu-item hover:underline transition-all duration-400 px-3 py-2 text-sm font-bold hover:text-shadow-lg"
                                                style={{ backfaceVisibility: "hidden", color: "#3a63f2" }}
                                                onClick={() => handleLinkClickInternal("/")}
                                            >
                                                Registro
                                            </Link>
                                            <Link
                                                to="/login"
                                                className="menu-item hover:underline transition-all duration-400 px-3 py-2 text-sm font-bold hover:text-shadow-lg"
                                                style={{ backfaceVisibility: "hidden", color: "#3a63f2" }}
                                                onClick={() => handleLinkClickInternal("/")}
                                            >
                                                Iniciar sesión
                                            </Link>
                                        </>
                                    )}

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
                                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
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
                                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-center">
                <div className={`${showMenu ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {currentUser && userData && userData.isAdmin === true ? (
                            <>
                                <Link
                                    to="/admin"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Zona Admin
                                </Link>
                                <hr className="my-1 border-gray-300" />
                                <Link
                                    to="/foro"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Foro
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Inicio
                                </Link>
                                <hr className="my-1 border-gray-300" />
                                <Link
                                    to="/merchandising"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Merchandising
                                </Link>
                                <hr className="my-1 border-gray-300" />
                                <Link
                                    to="/mangas"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Mangas
                                </Link>
                                <hr className="my-1 border-gray-300" />
                                <Link
                                    to="/comics"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Comics
                                </Link>
                                <hr className="my-1 border-gray-300" />
                                <Link
                                    to="/foro"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Foro
                                </Link>
                                <hr className="my-1 border-gray-300" />
                                <Link
                                    to="/libreria"
                                    className="hover:underline transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                                    style={{ backfaceVisibility: 'hidden', color: '#3a63f2' }}
                                >
                                    Libreria
                                </Link>
                                <div className="flex">
                                    <div className="relative flex-grow">
                                        <input
                                            type="text"
                                            placeholder="Buscar..."
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg flex-grow   py-1 px-2 leading-tight focus:ring-blue-500 focus:border-blue-500 placeholder:font-light menu-item"
                                            style={{ transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}
                                        />
                                        <button
                                            type="submit"
                                            className="absolute right-0 top-0 bottom-0 rounded-r-lg flex items-center justify-center p-2  "
                                            style={{ backfaceVisibility: 'hidden', zIndex: 1, width: '2.5rem' }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4">
                                                <path
                                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>

    );

}

export default Navbar;




