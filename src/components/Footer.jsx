import React from 'react';
import {BiMap} from "react-icons/bi";
import {AiOutlinePhone, AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import Logo from "../img/logo.png";
import {Link} from "react-router-dom";

const Footer = ({handleLinkClick}) => {

    const user = {
        name: 'Juan',
        role: 'admin',
        isAdmin: true
    }

    return <footer className="py-12 w-full rounded-t-lg shadow-md border border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="grid grid-cols-1 gap-4 justify-center ">
                    <div className="flex items-center mb-4 justify-center mr-4">
                        <img src={Logo} alt="Logo" className="h-12 w-12 mr-2"/>
                        <h2 className="font-extrabold tracking-tight text-2xl whitespace-nowrap" style={{
                            backfaceVisibility: 'hidden',
                            color: '#1e2447',

                        }}>Cantina del Otaku</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <h2 className="font-extrabold tracking-tight text-xl whitespace-nowrap text-center" style={{
                        backfaceVisibility: 'hidden',
                        color: '#1e2447'
                    }}>Enlaces</h2>
                    <div className="flex flex-col">
                        {user.isAdmin ? (
                            <>
                                <div className="flex items-center mb-4 justify-center">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/admin')}
                                        to="/admin">Zona Admin</Link>
                                </div>
                                <div className="flex items-center mb-4 justify-center">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/foro')}
                                        to="/foro">Foro</Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center mb-4 justify-center">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/')}
                                        to="/">Inicio</Link>
                                </div>
                                <div className="flex items-center mb-4 justify-center">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/merchandising')}
                                        to="/merchandising"
                                    >
                                        Merchandising
                                    </Link>
                                </div>

                                <div className="flex items-center mb-4 justify-center">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/mangas')}
                                        to="/mangas">Mangas</Link>
                                </div>
                                <div className="flex items-center mb-4 justify-center ">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/comics')}
                                        to="/comics">Comics</Link>
                                </div>
                                <div className="flex items-center mb-4 justify-center">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/foro')}
                                        to="/foro">Foro</Link>
                                </div>
                                <div className="flex items-center mb-4 justify-center">
                                    <Link
                                        className={`hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg `}
                                        style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                        onClick={() => handleLinkClick('/libreria')}
                                        to="/libreria">Libreria</Link>
                                </div>
                            </>
                        ) }

                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="font-extrabold tracking-tight text-xl whitespace-nowrap text-center" style={{
                            backfaceVisibility: 'hidden',
                            color: '#1e2447'
                        }}>Redes sociales</h2>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4 justify-center">
                                <AiOutlineInstagram className="w-6 h-6 mr-2"/>
                                <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                   href="https://www.instagram.com/">Instagram</a>
                            </div>
                            <div className="flex items-center mb-4 justify-center">
                                <AiOutlineTwitter className="w-6 h-6 mr-2"/>
                                <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                   href="https://www.twitter.com/">Twitter</a>
                            </div>
                            <div className="flex items-center mb-4 justify-center">
                                <FaTiktok className="w-6 h-6 mr-2"/>
                                <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}
                                   href="https://www.tiktok.com/">Tiktok</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="font-extrabold tracking-tight text-xl whitespace-nowrap text-center" style={{
                            backfaceVisibility: 'hidden',
                            color: '#1e2447'
                        }}>Contacto</h2>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4 justify-center">
                                <BiMap className="w-6 h-6 mr-2"/>
                                <p className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}>Granada, España</p>
                            </div>
                            <div className="flex items-center mb-4 justify-center">
                                <AiOutlinePhone className="w-6 h-6 mr-2"/>
                                <p className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#4a63ee'}}>+34 601 303 832</p>
                            </div>
                            <div className="flex items-center mb-4 justify-center">
                                <AiOutlineMail className="w-6 h-6 mr-2"/>
                                <p className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-bold hover:text-shadow-lg"
                                   style={{
                                       backfaceVisibility: 'hidden',
                                       color: '#4a63ee'
                                   }}>cantinadelotaku@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 my-8"/>
            <div className="text-center mt-8">
                <p className="transition-all duration-400 px-3 py-2 text-md font-extrabold"
                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>&copy; 2023 Mi sitio web. Todos los derechos
                    reservados.</p>
            </div>
        </div>

    </footer>;
};

export default Footer;