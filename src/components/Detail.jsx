import React from "react";
import {Link, useLocation} from "react-router-dom";

export function Detail() {
    const location = useLocation();
    const isMerchandising = location.pathname.includes("merchandising");
    const isComics = location.pathname.includes("comics");
    const isMangas = location.pathname.includes("mangas");

    return (
        <>
            {/* component */}
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 pt-8 pb-12 mb-8 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <nav className="text-slate-400 body-font mb-8">
                            <div className="container px-5 py-2 mx-auto flex">
                                <Link
                                    to={
                                        isMerchandising
                                            ? "/merchandising"
                                            : isComics
                                                ? "/comics"
                                                : isMangas
                                                    ? "/mangas"
                                                    : "/"
                                    }
                                    className="text-slate-400 hover:text-slate-500 hover:underline"
                                >
                                    {isMerchandising
                                        ? "Merchandising"
                                        : isComics
                                            ? "Comics"
                                            : isMangas
                                                ? "Mangas"
                                                : "Home"}
                                </Link>
                                <span className="mx-2">/</span>
                                <span to="/detail" className="text-gray-800 font-bold" aria-current="page"
                                      style={{backfaceVisibility: "hidden", color: "#1e2447"}}
                                >
                                    Artículo 1
                                </span>
                            </div>
                        </nav>

                        <img
                            alt="ecommerce"
                            className="lg:w-12 w-full object-cover object-center rounded-b border border-gray-200"
                            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-slate-400 tracking-widest">
                                BRAND NAME
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1 "
                                style={{backfaceVisibility: "hidden", color: "#1e2447"}}
                            >
                                Articulo 1
                            </h1>

                            <p className="leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat lobortis nibh sit
                                amet tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nunc semper mauris eu volutpat varius. Sed consectetur congue efficitur.
                                Praesent vestibulum purus quis risus tristique, vitae sagittis ante cursus. Sed eu
                                laoreet orci, quis elementum ante. In id commodo augue, id pharetra velit. Quisque lacus
                                enim, posuere in consequat ac, tristique sit amet massa. Maecenas eleifend nibh vel
                                fringilla molestie.
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <hr/>
                            </div>
                            <div className="flex">
                                <span className="title-font font-bold text-2xl text-gray-900"
                                      style={{backfaceVisibility: "hidden", color: "#1e2447"}}
                                >
                                  $58.00
                                </span>
                                <button
                                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded hover:scale-105 transition-all duration-400"
                                    style={{backfaceVisibility: "hidden", backgroundColor: "#4a63ee"}}
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}