import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "./AuthContext";

/**
 * Componente de detalle del artículo.
 *  @class
 * @param {object} props - Propiedades del componente.
 * @param {Array} props.cartItems - Array de elementos en el carrito.
 * @param {function} props.setCartItems - Función para actualizar los elementos del carrito.
 * @returns {JSX.Element} El componente Detail.
 */
export function Detail({ cartItems, setCartItems }) {
  const location = useLocation();
  const path = location.pathname;
  const { currentUser } = useContext(AuthContext);

  // Obtener la categoría de la URL
  let category = "";
  if (path.includes("Merchandising") || path.includes("merchandising")) {
    category = "Merchandising";
  } else if (path.includes("Comic") || path.includes("comic")) {
    category = "Comics";
  } else if (path.includes("Manga") || path.includes("manga")) {
    category = "Mangas";
  }

  // Obtener el ID del artículo de la URL
  let id = path.substring(path.lastIndexOf("/") + 1);

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async (id) => {
      const articleRef = doc(db, "articles", id);
      const snapshot = await getDoc(articleRef);
      if (snapshot.exists()) {
        const articleData = { id: snapshot.id, ...snapshot.data() };
        setArticle(articleData);
      } else {
        // El documento no existe
        setArticle(null);
      }
    };

    fetchArticle(id);
  }, [id]);

  /**
   * Maneja la acción de agregar un artículo al carrito.
   * @param {object} article - Artículo a añadir al carrito.
   */
  const handleAddToCart = async (article) => {
    try {
      // Verificar si hay stock disponible
      if (article.stock === 0) {
        toast.error(`El artículo ${article.title} no está disponible en stock`);
        return;
      }

      // Realizar la operación de agregado al carrito
      if (!currentUser) {
        // El usuario no está loggeado, guardar en el localStorage
        const existingItem = cartItems.find((item) => item.id === article.id);

        if (existingItem) {
          // El artículo ya está en el carrito, incrementar la cantidad
          const updatedCartItems = cartItems.map((item) =>
            item.id === article.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
          setCartItems(updatedCartItems);
          localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        } else {
          // El artículo no está en el carrito, agregarlo con cantidad 1
          const newItem = { ...article, cantidad: 1 };
          setCartItems([...cartItems, newItem]);
          localStorage.setItem(
            "cartItems",
            JSON.stringify([...cartItems, newItem])
          );
        }

        toast.success(`${article.title} se ha añadido al carrito`);
      } else {
        // El usuario está loggeado, guardar en la base de datos
        const userEmail = currentUser.email;
        const cartDocRef = doc(db, "carts", userEmail);
        const cartDocSnap = await getDoc(cartDocRef);

        if (cartDocSnap.exists()) {
          // El usuario ya tiene un carrito, agregar el artículo sin borrar los demás
          const cartData = cartDocSnap.data();
          const existingItem = cartData.cartItems.find(
            (item) => item.id === article.id
          );

          if (existingItem) {
            // El artículo ya está en el carrito, incrementar la cantidad
            const updatedCartItems = cartData.cartItems.map((item) =>
              item.id === article.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            );
            await setDoc(cartDocRef, { cartItems: updatedCartItems });
            setCartItems(updatedCartItems);
          } else {
            // El artículo no está en el carrito, agregarlo con cantidad 1
            const newItem = { ...article, cantidad: 1 };
            const updatedCartItems = [...cartData.cartItems, newItem];
            await setDoc(cartDocRef, { cartItems: updatedCartItems });
            setCartItems(updatedCartItems);
          }
        } else {
          // El usuario no tiene un carrito, crear uno nuevo con el artículo
          const newCart = { cartItems: [{ ...article, cantidad: 1 }] };
          await setDoc(cartDocRef, newCart);
          localStorage.setItem("cartItems", JSON.stringify(newCart));
          setCartItems(newCart);
        }

        toast.success(`${article.title} se ha añadido al carrito`);
      }

      // Actualizar el stock en la base de datos
      const articleDocRef = doc(db, "articles", article.id);
      await updateDoc(articleDocRef, { stock: article.stock - 1 });
    } catch (error) {
      console.error("Error al añadir el artículo al carrito:", error);
    }
  };

  if (!article) {
    // Renderizar un mensaje de carga mientras se obtiene el artículo
    return <p>Cargando artículo...</p>;
  }

  return (
    <>
      {/* component */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastStyle={{
          width: "50%", // Ajusta el ancho del contenido del toast
        }}
      />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 pt-8 pb-12 mb-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <nav className="text-slate-400 body-font mb-8">
              <div className="container px-5 py-2 mx-auto flex">
                <Link
                  to={"/" + category}
                  className="text-slate-400 hover:text-slate-500 hover:underline"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
                <span className="mx-2">/</span>
                <span
                  className="text-gray-800 font-bold"
                  aria-current="page"
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
                {article.brand}
              </h2>
              <h1
                className="text-gray-900 text-3xl title-font font-bold mb-1 "
                style={{ backfaceVisibility: "hidden", color: "#1e2447" }}
              >
                {article.title}
              </h1>

              <p className="leading-relaxed">{article.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <hr />
              </div>
              <div className="flex">
                <span
                  className="title-font font-bold text-2xl text-gray-900"
                  style={{ color: "#4a63ee" }}
                >
                  {article.precio} €
                </span>
                <button
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded hover:scale-105 transition-all duration-400"
                  style={{
                    backfaceVisibility: "hidden",
                    backgroundColor: "#4a63ee",
                  }}
                  onClick={() => {
                    handleAddToCart(article);
                  }}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    Añadir al carrito
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
