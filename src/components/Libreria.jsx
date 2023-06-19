import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAtomValue } from "jotai";
import { userDataAtom } from "../atoms/userAtom";
/**

    Componente de la librería.
* @class    */
function Libreria() {
  const [page, setPage] = useState(1);
  const { currentUser } = useContext(AuthContext);
  const [articles, setDisplayedArticles] = useState([]);
  const articlesPerPage = 9;
  const userAtom = useAtomValue(userDataAtom);

  /**
    
        Recupera los datos de la librería desde Firestore.
        @returns {Promise} Una promesa que resuelve con los datos de la librería.
        */
        const fetchLibraryData = async () => {
          console.log(userAtom.email);
          const libraryCollection = collection(db, "library");
          const userDocRef = doc(libraryCollection, userAtom.email);
          const userDocSnap = await getDoc(userDocRef);
        
          if (userDocSnap.exists()) {
            const libraryData = { id: userDocSnap.id, data: userDocSnap.data() };
            console.log(libraryData);
            return [libraryData];
          } else {
            console.log("El documento no existe.");
            return [];
          }
        };
        

  useEffect(() => {
    /**
     * Obtiene los datos de la librería y actualiza el estado.
     */
    const getLibraryData = async () => {
      try {
        const libraryData = await fetchLibraryData();
        setDisplayedArticles(libraryData);
        console.log(libraryData);
      } catch (error) {
        console.log(
          "Error al obtener los documentos de la colección library:",
          error
        );
      }
    };
    if (userAtom) {
      getLibraryData();
    }
    // eslint-disable-next-line
  }, [userAtom]);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  /**
    
        Maneja el evento de clic en una página.
        @param {number} pageNum - El número de la página.
        */
  const handleClick = (pageNum) => {
    setPage(pageNum);
  };

  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  return (
    <>
      {userAtom ? (
        <>
          {articles.length > 0 ? (
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
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {displayedArticles.map((article) =>
                    article.data.library.map((item, index) => (
                      <article
                        key={index}
                        className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
                      >
                        <Link
                          to={`/libreria/detail/${encodeURIComponent(
                            userAtom.email
                          )}/${encodeURIComponent(item.pdf)}`}
                        >
                          <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="object-cover object-center h-[250px] w-full"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="mt-1 p-2 flex flex-col">
                            <div className="flex justify-between items-end">
                              <h2
                                className="font-bold"
                                style={{
                                  backfaceVisibility: "hidden",
                                  color: "#1e2447",
                                  fontSize: "1rem",
                                }}
                              >
                                {item.title}
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))
                  )}
                </div>

                <div className="flex justify-center my-6">
                  {page > 1 && (
                    <button
                      className="mx-1 md:mx-2 lg:mx-3 py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full  border-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      onClick={() => handleClick(page - 1)}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
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
                    )
                  )}
                  {page < totalPages && (
                    <button
                      className="mx-1 md:mx-2 lg:mx-3 py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full bg-white border-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      onClick={() => handleClick(page + 1)}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </section>
            </>
          ) : (
            <div className="pt-16 mb-56">
              <h2
                className="text-center text-xl font-bold"
                style={{ backfaceVisibility: "hidden", color: "#1e2447" }}
              >
                No tienes aún ningún artículo en tu librería.
              </h2>
            </div>
          )}
        </>
      ) : (
        <>
          <h2
            className="text-center text-2xl font-extrabold my-80 "
            style={{ backfaceVisibility: "hidden", color: "#1e2447" }}
          >
            Inicia Sesion para tener acceso a la libreria
          </h2>
        </>
      )}
    </>
  );
}

export default Libreria;
