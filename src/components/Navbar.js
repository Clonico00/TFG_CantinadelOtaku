import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleToggle = () => {
        toggleMenu();
    };
    const handleLinkClick = (path) => {
        setActiveLink(path);
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
                                style={{ backfaceVisibility: 'hidden', color: '#3E62FF' }}
                                onClick={() => handleLinkClick('/mangas')}
                            >
                                Mangas
                            </Link>
                            <Link
                                to="/comics"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/comics' ? 'underline' : ''
                                }`}
                                style={{ backfaceVisibility: 'hidden', color: '#3E62FF' }}
                                onClick={() => handleLinkClick('/comics')}
                            >
                                Comics
                            </Link>
                            <Link
                                to="/foro"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/foro' ? 'underline' : ''
                                }`}
                                style={{ backfaceVisibility: 'hidden', color: '#3E62FF' }}
                                onClick={() => handleLinkClick('/foro')}
                            >
                                Foro
                            </Link>
                            <Link
                                to="/libreria"
                                className={`menu-item hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg ${
                                    activeLink === '/libreria' ? 'underline' : ''
                                }`}
                                style={{ backfaceVisibility: 'hidden', color: '#3E62FF' }}
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
            <div className={`${showMenu ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="hover:scale-105 transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Inicio
                    </Link>
                    <Link
                        to="/merchandising"
                        className="hover:scale-105 transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Merchandising
                    </Link>
                    <Link
                        to="/mangas"
                        className="hover:scale-105 transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Mangas
                    </Link>
                    <Link
                        to="/comics"
                        className="hover:scale-105 transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Comics
                    </Link>
                    <Link
                        to="/foro"
                        className="hover:scale-105 transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Foro
                    </Link>
                    <Link
                        to="/libreria"
                        className="hover:scale-105 transition-all duration-400 block px-3 py-2 text-md font-extrabold hover:text-shadow-lg menu-item"
                        style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                        Libreria
                    </Link>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="bg-transparent border-2 border-black rounded-lg w-full text-black font-bold mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:font-light menu-item"
                        style={{'transition': 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}
                    />

                    <button type="submit"

                            className="flex-shrink-0 font-bold border-2 border-black text-md py-1 px-4 rounded-lg transform hover:shadow-md transition-all duration-300 w-full mt-4 menu-item"
                            style={{backfaceVisibility: 'hidden'}}>
                        Buscar
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;




