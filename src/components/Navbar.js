import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png';
import anime from 'animejs';
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);



    const animateMenu = () => {
        anime.timeline({ easing: 'easeOutExpo' })
            .add({
                targets: '.menu-item',
                opacity: [0, 1],
                translateY: [100, 0],
                duration: 500,
                delay: anime.stagger(100),
                offset: '-=300', // introduce a delay between each animation
            });
    };

    const animateMenuClose = () => {
        anime.timeline({ easing: 'easeOutExpo' })
            .add({
                targets: '.menu-item',
                opacity: [1, 0],
                translateY: [0, 100],
                duration: 500,
                delay: anime.stagger(100, { start: 0, from: 'last' }),
            });
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if (showMenu) {
            animateMenuClose();
        } else {
            animateMenu();
        }
    };
    const handleToggle = () => {
        toggleMenu();
    };



    return (
        <nav className="bg-white">
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
                            <span className="font-extrabold tracking-tight text-2xl whitespace-nowrap">Cantina del Otaku</span>
                        </Link>
                    </div>


                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 tracking-tight">
                            <Link
                                to="/"
                                className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                                Inicio
                            </Link>
                            <Link
                                to="/merchandising"
                                className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                                Merchandising
                            </Link>
                            <Link
                                to="/mangas"
                                className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                                Mangas
                            </Link>
                            <Link
                                to="/comics"
                                className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                                Comics
                            </Link>
                            <Link
                                to="/foro"
                                className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                                Foro
                            </Link>
                            <Link
                                to="/libreria"
                                className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>
                                Libreria
                            </Link>
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="bg-transparent border-2 border-black rounded-lg w-full text-black font-md mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:font-light"
                                style={{
                                    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    color: '#1e2447',
                                    borderColor: '#1e2447'
                                }}
                            />

                            <button type="submit"
                                    className="flex-shrink-0 font-bold border-2 border-black text-md py-1 px-4 rounded-lg transform hover:scale-105 hover:shadow-md transition-all duration-300"
                                    style={{backfaceVisibility: 'hidden', color: '#1e2447', borderColor: '#1e2447'}}>
                                Buscar
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none`}
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
                                    <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                                </svg>
                            ) : (
                                <svg
                                    viewBox="0 0 448 512"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    className="fill-current text-black"
                                >
                                    <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
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




