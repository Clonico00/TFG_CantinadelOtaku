import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <span className="text-white font-bold text-xl">Cantina del Otaku</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Inicio
                            </Link>
                            <NavLink
                                to="/merchandising"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Merchandising
                            </NavLink>
                            <Link
                                to="/mangas"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Mangas
                            </Link>
                            <Link
                                to="/comics"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Comics
                            </Link>
                            <Link
                                to="/foro"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Foro
                            </Link>
                            <Link
                                to="/libreria"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Libreria
                            </Link>
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="appearance-none bg-transparent border-2 border-gray-300 rounded-lg bg-gray-100 w-full text-grey mr-3 py-1 px-2 leading-tight focus:outline-none"
                                style={{'transition': 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}
                            />

                            <button type="submit"
                                    className="flex-shrink-0 text-white border-2 border-gray-300 text-sm py-1 px-4 rounded transform hover:scale-105 transition-all duration-300">
                                Buscar
                            </button>

                        </div>

                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={showMenu ? 'true' : 'false'}
                            onClick={handleToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            {showMenu ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
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
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/merchandising"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Merchandising
                    </Link>
                    <Link
                        to="/mangas"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Mangas
                    </Link>
                    <Link
                        to="/comics"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Comics
                    </Link>
                    <Link
                        to="/foro"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Foro
                    </Link>
                    <Link
                        to="/libreria"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Libreria
                    </Link>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="appearance-none bg-transparent border-2 border-gray-300 rounded-lg bg-gray-100 w-full text-grey mr-3 mb-4 py-1 px-2 leading-tight focus:outline-none"
                        style={{'transition': 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}
                    />

                    <button type="submit"
                            className="flex-shrink-0 text-white border-2 border-gray-300 text-sm py-1 px-4 rounded  transform hover:scale-105 transition-all duration-300 mt-2 w-full mt-4"
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;




