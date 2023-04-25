import React, {useState} from "react";

function Mangas() {
    const [page, setPage] = useState(1);

    const articlesPerPage = 6;
    const articles = [
        {
            id: 1,
            title: "Article 1",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 2,
            title: "Article 2",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 3,
            title: "Article 3",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 4,
            title: "Article 4",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 5,
            title: "Article 5",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 6,
            title: "Article 6",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 7,
            title: "Article 7",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 8,
            title: "Article 8",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 9,
            title: "Article 9",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 10,
            title: "Article 10",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 11,
            title: "Article 11",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 12,
            title: "Article 12",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 13,
            title: "Article 13",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 14,
            title: "Article 14",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 15,
            title: "Article 15",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 16,
            title: "Article 16",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 17,
            title: "Article 17",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 18,
            title: "Article 18",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 19,
            title: "Article 19",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100
        },
        {
            id: 20,
            title: "Article 20",
            description: "Este es una artículo de prueba, me encanta es muy bonito y es lo mejor que hay en el mundo",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 100,
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
            <div className="pt-16">
                <h2
                    className="text-center text-2xl font-extrabold"
                    style={{backfaceVisibility: "hidden", color: "#1e2447"}}
                >
                    Mangas
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
                            <a href="/">
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
                                    <div className="flex justify-end pt-5">
                                        <div
                                            className="inline-flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
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
                                            <button className="text-sm inline-flex">Añadir</button>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </article>


                    ))}
                </div>

                <div className="flex justify-center my-6">
                    {Array.from({length: totalPages}, (_, i) => i + 1).map((pageNum) => (
                        <button
                            key={pageNum}
                            className={`mx-2 py-2 px-4 rounded-full ${
                                pageNum === page ? "bg-blue-500 text-white" : "bg-white border-blue-500 text-blue-500 border-2"
                            }`}
                            onClick={() => handleClick(pageNum)}
                        >
                            {pageNum}
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Mangas;
