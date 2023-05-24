import React, {useState,useEffect} from "react";
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";
import {Link} from "react-router-dom";

function Comics() {
    const [page, setPage] = useState(1);
    const section = "comics"; // Actualiza la sección aquí

    const articlesPerPage = 6;

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const articlesRef = collection(db, 'articles');
      const merchandisingQuery = query(articlesRef, where('category', '==', 'Comics'));
    
      const unsubscribe = onSnapshot(merchandisingQuery, (snapshot) => {
        const merchandisingArticles = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setArticles(merchandisingArticles);
      });
    
      return () => unsubscribe();
    }, []);

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handleClick = (pageNum) => {
        setPage(pageNum);
    };

    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const displayedArticles = articles.slice(startIndex, endIndex);

    return (
        <>
            <div className="pt-16">
                <h2
                    className="text-center text-2xl font-extrabold"
                    style={{backfaceVisibility: "hidden", color: "#1e2447"}}
                >
                    Comics
                </h2>
            </div>

            <section className="pt-6 pb-12">
                <div
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {displayedArticles.map((article) => (
                        <article
                            key={article.id}
                            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
                        >
                            <Link to={`/${section}/detail/${article.id}`}>
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover object-center h-[250px] w-full"
                                        style={{objectFit: "cover"}}
                                    />
                                </div>
                                <div className="mt-1 p-2 flex flex-col">
                                    <div className="flex justify-between items-end">
                                        <h2 className="font-bold" style={{
                                            backfaceVisibility: "hidden",
                                            color: "#1e2447"
                                        }}>{article.title}</h2>
                                        <p className="text-xl font-bold text-blue-500" style={{color: "#4a63ee"}}>
                                            ${article.price}
                                        </p>
                                    </div>
                                    <p className="my-2 text-sm text-slate-400 items-end flex-grow-0">{article.description}</p>
                                    <div className="flex justify-end pt-5 ">
                                        <div
                                            className="inline-flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 hover:scale-105 transition-all duration-400"
                                            style={{backgroundColor: "#4a63ee", width: "fit-content"}}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                                />
                                            </svg>
                                            <button className="text-sm inline-flex ">Añadir</button>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </article>


                    ))}
                </div>

                <div className="flex justify-center my-6">
                    {page > 1 && (
                        <button
                            className="mx-1 md:mx-2 lg:mx-3 py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full  border-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                            onClick={() => handleClick(page - 1)}
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" >
                                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clip-rule="evenodd" fill-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                            key={pageNum}
                            className={`mx-1 md:mx-2 lg:mx-3 py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full ${
                                pageNum === page
                                    ? "bg-blue-600 text-white"
                                    : "bg-white border border-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                            }`}
                            onClick={() => handleClick(pageNum)}
                        >
                            {pageNum}
                        </button>
                    ))}
                    {page < totalPages && (
                        <button
                            className="mx-1 md:mx-2 lg:mx-3 py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full bg-white border-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                            onClick={() => handleClick(page + 1)}
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd" fill-rule="evenodd">

                                </path>
                            </svg>


                        </button>

                    )}
                </div>
            </section>
        </>
    );
}

export default Comics;
