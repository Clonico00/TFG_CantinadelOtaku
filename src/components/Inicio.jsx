import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Waves from "../img/pattern.png";

function Inicio() {
    const backgroundImage = `url(${Waves})`;
    return (
        <ParallaxProvider>
            <Parallax speed={-10}>
                <div
                    className="h-screen mt-10 bg-cover bg-center"
                    style={{ backgroundImage }}
                >
                    <div className="flex flex-col justify-center items-center h-full px-8">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg" >
                            Cantina del Otaku
                        </h1>
                        <p className="text-lg md:text-2xl text-white mt-4 text-center">
                            Tu tienda en línea de manga, cómics y merchandising.
                        </p>
                        <button className="bg-white text-black py-2 px-4 rounded-full mt-8 hover:scale-105 hover:shadow-md transition-all duration-300">
                            Ver más
                        </button>
                    </div>
                </div>
            </Parallax>

            <Parallax speed={-10}>
                <div className=" h-screen" style={{backgroundColor:"#3a63f2"}}></div>
            </Parallax>

        </ParallaxProvider>
    );
}

export default Inicio;