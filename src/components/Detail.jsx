import React,{useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../firebase";
export async function Detail() {
    const {article, setArticle} = useState(null);


    const location = useLocation();
    const path = location.pathname;

    // Obtener la categoría de la URL
    let category = '';
    if (path.includes('merchandising')) {
        category = 'merchandising';
    } else if (path.includes('comic')) {
        category = 'comic';
    } else if (path.includes('manga')) {
        category = 'manga';
    }

    // Obtener el ID del artículo de la URL
    let id = path.substring(path.lastIndexOf('/') + 1);
    console.log(id);
    // Realizar la consulta a la base de datos con la categoría y el ID
    const getArticleByCategoryAndId = async (id) => {
        const articleRef = doc(db, 'articles', id);
        const snapshot = await getDoc(articleRef);
        if (snapshot.exists()) {
            const article = { id: snapshot.id, ...snapshot.data() };
            return article;
        } else {
            // El documento no existe
            return null;
        }
    };

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

                                        "/"
                                    }
                                    className="text-slate-400 hover:text-slate-500 hover:underline"
                                >
                                    jds
                                </Link>
                                <span className="mx-2">/</span>
                                <span className="text-gray-800 font-bold" aria-current="page"
                                    style={{ backfaceVisibility: "hidden", color: "#1e2447" }}
                                >
                                    {article.title}
                                </span>
                            </div>
                        </nav>
                        <img
                            alt="ecommerce"
                            className="lg:w-12 w-full object-cover object-center rounded-b border border-gray-200"
                            src={article.image}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-slate-400 tracking-widest">
                                BRAND NAME
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1 "
                                style={{ backfaceVisibility: "hidden", color: "#1e2447" }}
                            >
                                {article.title}
                            </h1>

                            <p className="leading-relaxed">
                                {article.description}
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <hr />
                            </div>
                            <div className="flex">
                                <span className="title-font font-bold text-2xl text-gray-900"
                                    style={{ backfaceVisibility: "hidden", color: "#1e2447" }}
                                >
                                    {article.price}
                                </span>
                                <button
                                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded hover:scale-105 transition-all duration-400"
                                    style={{ backfaceVisibility: "hidden", backgroundColor: "#4a63ee" }}
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