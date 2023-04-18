import React from 'react';
import {BiMap} from "react-icons/bi";
import {AiOutlinePhone, AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import Logo from "../img/logo.png";

const Footer = () => {
    return <footer className="py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:text-center md:text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center mb-4">
                        <img src={Logo} alt="Logo" className="h-12 w-12 mr-2"/>
                        <h2 className="font-extrabold tracking-tight text-2xl whitespace-nowrap" style={{
                            backfaceVisibility: 'hidden',
                            color: '#1e2447'
                        }}>Cantina del Otaku</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <h2 className="font-extrabold tracking-tight text-xl whitespace-nowrap" style={{
                        backfaceVisibility: 'hidden',
                        color: '#1e2447'
                    }}>Enlaces</h2>
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                               style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                               href="/">Inicio</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                               style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                               href="/">Merchandising</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                               style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                               href="/">Mangas</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                               style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                               href="/">Comics</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                               style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                               href="/">Foro</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                               style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                               href="/">Libreria</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="font-extrabold tracking-tight text-xl whitespace-nowrap" style={{
                            backfaceVisibility: 'hidden',
                            color: '#1e2447'
                        }}>Redes sociales</h2>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <AiOutlineInstagram className="w-6 h-6 mr-2"/>
                                <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                   href="https://www.instagram.com/">Instagram</a>
                            </div>
                            <div className="flex items-center mb-4">
                                <AiOutlineTwitter className="w-6 h-6 mr-2"/>
                                <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                   href="https://www.twitter.com/">Twitter</a>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaTiktok className="w-6 h-6 mr-2"/>
                                <a className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}
                                   href="https://www.tiktok.com/">Tiktok</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="font-extrabold tracking-tight text-xl whitespace-nowrap" style={{
                            backfaceVisibility: 'hidden',
                            color: '#1e2447'
                        }}>Contacto</h2>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <BiMap className="w-6 h-6 mr-2"/>
                                <p className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>Granada, España</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <AiOutlinePhone className="w-6 h-6 mr-2"/>
                                <p className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                   style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>+34 601 303 832</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <AiOutlineMail className="w-6 h-6 mr-2"/>
                                <p className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold hover:text-shadow-lg"
                                   style={{
                                       backfaceVisibility: 'hidden',
                                       color: '#3E62FF'
                                   }}>cantinadelotaku@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 my-8"/>
            <div className="text-center mt-8">
                <p className="hover:scale-105 transition-all duration-400 px-3 py-2 text-md font-extrabold"
                   style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>&copy; 2023 Mi sitio web. Todos los derechos
                    reservados.</p>
            </div>
        </div>

    </footer>;
};

export default Footer;