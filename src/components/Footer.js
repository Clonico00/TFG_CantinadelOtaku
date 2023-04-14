import React from 'react';
import {BiMap} from "react-icons/bi";
import {AiOutlinePhone, AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import Wave from '../img/wave.png';

const Footer = () => {
    return <footer className="text-white py-12 w-full bg-gray-900 footer-with-svg" style={{
        backgroundImage: `url(${Wave})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPositionY: '-350px',
        backgroundPosition: '0',

    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:text-center md:text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center mb-4">
                        <h2 className="text-lg font-semibold">Cantina del Otaku</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <h2 className="text-lg font-semibold mb-4 ">Enlaces</h2>
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <a className="text-sm hover:text-gray-400"
                               href="/">Inicio</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="text-sm hover:text-gray-400"
                               href="/">Merchandising</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="text-sm hover:text-gray-400"
                               href="/">Mangas</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="text-sm hover:text-gray-400"
                               href="/">Comics</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="text-sm hover:text-gray-400"
                               href="/">Foro</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <a className="text-sm hover:text-gray-400"
                               href="/">Libreria</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-4">
                        <h3 className="text-lg font-semibold mb-4">Redes sociales</h3>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <AiOutlineInstagram className="w-6 h-6 mr-2"/>
                                <a className="text-sm hover:text-gray-400"
                                   href="https://www.instagram.com/">Instagram</a>
                            </div>
                            <div className="flex items-center mb-4">
                                <AiOutlineTwitter className="w-6 h-6 mr-2"/>
                                <a className="text-sm hover:text-gray-400"
                                   href="https://www.twitter.com/">Twitter</a>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaTiktok className="w-6 h-6 mr-2"/>
                                <a className="text-sm hover:text-gray-400" href="https://www.tiktok.com/">Tiktok</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="text-lg font-semibold mb-4">Contacto</h2>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <BiMap className="w-6 h-6 mr-2"/>
                                <p className="text-sm">Granada, España</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <AiOutlinePhone className="w-6 h-6 mr-2"/>
                                <p className="text-sm">+34 601 303 832</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <AiOutlineMail className="w-6 h-6 mr-2"/>
                                <p className="text-sm">cantinadelotaku@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 my-8"/>
            <div className="text-center mt-8">
                <p className="text-sm">&copy; 2023 Mi sitio web. Todos los derechos reservados.</p>
            </div>
        </div>

    </footer>;
};

export default Footer;