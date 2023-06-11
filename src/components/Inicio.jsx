import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../img/background2.png";
import Comic from "../img/comic.png";
import Manga from "../img/manga.png";
import Merch from "../img/merch.png";
import Icons from "../img/iconos.png";
import IconsMobile from "../img/iconosMobile.png";

/**
 *
 * @class
 */
function Inicio() {
  const backgroundImage = `url(${Background})`;
  const [imageSource, setImageSource] = useState(
    window.innerWidth > 750 ? Icons : IconsMobile
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      const newImageSource = window.innerWidth > 750 ? Icons : IconsMobile;
      setImageSource(newImageSource);
      setIsMobile(window.innerWidth < 450);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const flexDirection = isMobile ? "column" : "row";
  const marginTop = window.innerWidth > 600 ? "100px" : "";

  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage }}>
        <div
          className="flex flex-col ml-6  relative items-left px-8"
          style={{ top: "25%" }}
        >
          <h1
            className="text-4xl md:text-7xl  font-extrabold drop-shadow-lg"
            style={{ color: "#232533" }}
          >
            Libera al <span style={{ color: "#3a63f2" }}>superhéroe</span>{" "}
            <br />
            que llevas dentro.
          </h1>
          <p
            className="text-lg md:text-2xl text-black mt-4 text-left"
            style={{ color: "" }}
          >
            Tu tienda en línea de manga, cómics y merchandising.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "100px",
          flexDirection,
          marginTop,
        }}
      >
        <div className="mc-div">
          <img
            src={Merch}
            alt="Fondo"
            style={{ width: "100%", height: "auto", margin: "30px" }}
          />

          <button className="mc-button font-extrabold shadow-2xl border border-gray-400 ">
            <Link to="/Merchandising">Merchandising</Link>
          </button>
        </div>
        <div className="mc-div">
          <img
            src={Manga}
            alt="Fondo"
            style={{ width: "100%", height: "auto", margin: "30px" }}
          />

          <button className="mc-button font-extrabold shadow-2xl border border-gray-400">
            <Link to="/Mangas">Mangas</Link>
          </button>
        </div>

        <div className="mc-div">
          <img
            src={Comic}
            alt="Fondo"
            className="-mt-52"
            style={{ width: "100%", height: "auto", margin: "30px" }}
          />

          <button className="mc-button font-extrabold shadow-2xl border border-gray-400">
            <Link to="/Comics">Comics</Link>
          </button>
        </div>
      </div>

      <img src={imageSource} alt="Fondo" style={{ width: "100%" }} />
    </div>
  );
}

export default Inicio;
