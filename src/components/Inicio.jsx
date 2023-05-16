import React from 'react';
import Waves from "../img/pattern.png";
import WavesVolt from "../img/pattern_volteada.png";

import {Link} from "react-router-dom";

function Inicio() {
    const backgroundImage = `url(${Waves})`;

    return (
        <div>
            <div
                className="h-screen mt-10 bg-cover bg-center"
                style={{backgroundImage}}
            >
                <div className="flex flex-col justify-center items-center h-full px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                        Cantina del Otaku
                    </h1>
                    <p className="text-lg md:text-2xl text-white mt-4 text-center">
                        Tu tienda en línea de manga, cómics y merchandising.
                    </p>
                    <button
                        className="bg-white text-black py-2 px-4 rounded-full mt-8 hover:scale-105 hover:shadow-md transition-all duration-300">
                        <Link to="/merchandising">Ver productos</Link>
                    </button>
                </div>
            </div>
            <div className="h-screen bg-cover bg-center" style={{backgroundColor: `#3a63f2`}}
            >
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="100" height="100"
                         fill="#FFFFFF">
                        <path
                            d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Modernidad y atractivo</p>
                    <p className="text-white font-bold text-md">Con un estilo fresco y a la ultima</p>

                </div>
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100" height="100"
                         fill="#FFFFFF">
                        <path
                            d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Rapidez e intuivo</p>
                    <p className="text-white font-bold text-md">Navegas sin perderte y rapidamente</p>

                </div>
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg " width="100" height="100" fill="#FFFFFF"
                         viewBox="0 0 512 512">
                        <path
                            d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Foro</p>
                    <p className="text-white font-bold text-md">Pregunta tus dudas en nuestro foro</p>

                </div>
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100" height="100"
                         fill="#FFFFFF">
                        <path
                            d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Libreria</p>
                    <p className="text-white font-bold text-md">Guarda tus comics para leerlos cuando quieras</p>

                </div>

            </div>
            <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${WavesVolt})`}}
            >
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="100" height="100"
                         fill="#FFFFFF">
                        <path
                            d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Modernidad y atractivo</p>
                    <p className="text-white font-bold text-md">Con un estilo fresco y a la ultima</p>

                </div>
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100" height="100"
                         fill="#FFFFFF">
                        <path
                            d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Rapidez e intuivo</p>
                    <p className="text-white font-bold text-md">Navegas sin perderte y rapidamente</p>

                </div>
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg " width="100" height="100" fill="#FFFFFF"
                         viewBox="0 0 512 512">
                        <path
                            d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Foro</p>
                    <p className="text-white font-bold text-md">Pregunta tus dudas en nuestro foro</p>

                </div>
                <div className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100" height="100"
                         fill="#FFFFFF">
                        <path
                            d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                    </svg>
                    <p className="text-white font-extrabold text-2xl mt-10 mb-4">Libreria</p>
                    <p className="text-white font-bold text-md">Guarda tus comics para leerlos cuando quieras</p>

                </div>

            </div>

        </div>


    );
}

export default Inicio;
