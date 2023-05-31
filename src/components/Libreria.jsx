import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Libreria() {
    const [page, setPage] = useState(1);
    const { currentUser } = useContext(AuthContext);
    const articlesPerPage = 9;
    const articles = [
        {
            id: 1,
            title: "Article 1",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "zzzzzzzzzzzzzzzzzzz"
        },
        {
            id: 2,
            title: "Article 2",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 3,
            title: "Article 3",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 4,
            title: "Article 4",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 5,
            title: "Article 5",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 6,
            title: "Article 6",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 7,
            title: "Article 7",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 8,
            title: "Article 8",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 9,
            title: "Article 9",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 10,
            title: "Article 10",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 11,
            title: "Article 11",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 12,
            title: "Article 12",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 13,
            title: "Article 13",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 14,
            title: "Article 14",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 15,
            title: "Article 15",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 16,
            title: "Article 16",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 17,
            title: "Article 17",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 18,
            title: "Article 18",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 19,
            title: "Article 19",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },
        {
            id: 20,
            title: "Article 20",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
            category: "Libros",
            urlPDF: "../pdf/Análisis y diseño.pdf"
        },

    ];

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handleClick = (pageNum) => {
        setPage(pageNum);
    };

    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const displayedArticles = articles.slice(startIndex, endIndex);

    return (
        <>

            {currentUser ? (
                <>
                    <div className="pt-16">
                        <h2
                            className="text-center text-2xl font-extrabold"
                            style={{ backfaceVisibility: "hidden", color: "#1e2447" }}
                        >
                            Libreria
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
                                    <Link to={`/libreria/${currentUser.email}?pdf=${encodeURIComponent(article.urlPDF)}`}>
                                        <div className="relative flex items-end overflow-hidden rounded-xl">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="object-cover object-center h-[250px] w-full"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="mt-1 p-2 flex flex-col">
                                            <div className="flex justify-between items-end">
                                                <h2 className="font-bold" style={{
                                                    backfaceVisibility: "hidden",
                                                    color: "#1e2447",
                                                    fontSize: "1rem"
                                                }}>{article.title}</h2>
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
                                            clipRule="evenodd" fillRule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            )}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    className={`mx-1 md:mx-2 lg:mx-3 py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full ${pageNum === page
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
                                            clipRule="evenodd" fillRule="evenodd">

                                        </path>
                                    </svg>


                                </button>

                            )}
                        </div>
                    </section>

                </>

            ) : (
                <>
                    <h2 className="text-center text-2xl font-extrabold my-80 "
                        style={{ backfaceVisibility: "hidden", color: "#1e2447" }}>
                        Inicia Sesion para tener acceso a la libreria
                    </h2>

                </>
            )}

        </>
    );
}

export default Libreria;
