import React, { Fragment, useState, useEffect, useContext } from "react";
import { provincias } from "../data";
import { provinciasConCiudades } from "../data";
import { Dialog, Transition } from "@headlessui/react";
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from "./AuthContext";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export function Carrito({ cartItems, setCartItems }) {
    const [isOpen, setIsOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleDecrease = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Guardar en el localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleIncrease = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Guardar en el localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDeleteItem = () => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== articleToDelete
    );
    setCartItems(updatedCartItems);
    // Guardar en el localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    closeModal();
    toast.success('Artículo eliminado del carrito');
  };

  const subtotal = cartItems.reduce(
    (accumulator, item) => accumulator + item.precio * item.cantidad,
    0
  );
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const loadCartFromDatabase = async () => {
      try {
        const cartItemsLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
        if (cartItemsLocalStorage) {
          setCartItems(cartItemsLocalStorage);
        } else {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }

        if (currentUser) {
          const userEmail = currentUser.email;
          const cartDocRef = doc(db, 'carts', userEmail);
          const cartDocSnap = await getDoc(cartDocRef);

          if (cartDocSnap.exists()) {
            const cartData = cartDocSnap.data();
            setCartItems(cartData.cartItems);
          }
        }
      } catch (error) {
        console.error('Error al cargar el carrito desde la base de datos:', error);
      }
    };

    loadCartFromDatabase();
  }, [currentUser]);
  
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}

                toastStyle={{
                    width: '50%', // Ajusta el ancho del contenido del toast
                }}
            />
            {/*eslint-disable-next-line */}
            {cartItems && cartItems != 0 ? (
                <div className=" pt-20 mb-24 overflow-auto">
                    <h2 className="text-center text-2xl font-extrabold mb-12 mt-1"
                        style={{ backfaceVisibility: "hidden", color: "#1e2447" }}>Carrito</h2>
                    <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <div
                                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                        <img
                                            src={item.image}
                                            alt="product-image2"
                                            className="w-full rounded-lg sm:w-40"
                                        />
                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-5 sm:mt-0">
                                                <h2 className="text-lg font-bold text-gray-900" style={{ backfaceVisibility: "hidden", color: "#1e2447" }}>
                                                    {item.title}
                                                </h2>
                                                <span className="text-sm title-font text-slate-400 tracking-widest">{item.brand}</span>

                                                <div className="mt-auto">
                                                    <p className="text-sm title-font font-bold" style={{ backfaceVisibility: "hidden", color: "#4a63ee" }}>
                                                        <span className="text-gray-900 text-lg">{item.precio * item.cantidad} €</span> ({item.precio} € x {item.cantidad})
                                                    </p>
                                                </div>
                                                {(item.category === "Mangas" || item.category === "Comics") && (
                                                    <div className="mt-4">
                                                        <label className="flex items-center">
                                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                                                            <span className="ml-2 text-gray-700">
                                                                {item.category === "Comics" ? "¿Desea agregar este cómic a su librería?" : "¿Desea agregar este manga a su librería?"}
                                                            </span>
                                                        </label>
                                                    </div>
                                                )}
                                            </div>

                                            <div
                                                className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                                <div className="flex items-center space-x-4 ml-24 sm:justify-end "
                                                    style={{ order: 2, color: "#d73544" }}>
                                                    <button style={{ color: "#d73544" }} onClick={() => {
                                                        setArticleToDelete(item.id);
                                                        openModal();
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                            className="h-4 w-4"
                                                            strokeWidth="1"
                                                            fill="currentColor">

                                                            <path
                                                                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                                        </svg>
                                                    </button>
                                                    <Transition appear show={isOpen} as={Fragment}>
                                                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                                            <Transition.Child
                                                                as={Fragment}
                                                                enter="ease-out duration-300"
                                                                enterFrom="opacity-0"
                                                                enterTo="opacity-100"
                                                                leave="ease-in duration-200"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                                                            </Transition.Child>

                                                            <div className="fixed inset-0 overflow-y-auto">
                                                                <div
                                                                    className="flex min-h-full items-center justify-center p-4 text-center">
                                                                    <Transition.Child
                                                                        as={Fragment}
                                                                        enter="ease-out duration-300"
                                                                        enterFrom="opacity-0 scale-95"
                                                                        enterTo="opacity-100 scale-100"
                                                                        leave="ease-in duration-200"
                                                                        leaveFrom="opacity-100 scale-100"
                                                                        leaveTo="opacity-0 scale-95"
                                                                    >
                                                                        <Dialog.Panel
                                                                            className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                                            <Dialog.Title as="h3"
                                                                                className="text-lg font-medium leading-6 text-gray-900">
                                                                                Confirmación de borrado
                                                                            </Dialog.Title>
                                                                            <div className="mt-2">
                                                                                <p className="text-sm text-gray-500">
                                                                                    ¿Estás seguro de que quieres borrar este
                                                                                    articulo de su articulo?
                                                                                </p>
                                                                            </div>

                                                                            <div className="mt-4 flex justify-end">
                                                                                <button
                                                                                    type="button"
                                                                                    className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                                    onClick={() => handleDeleteItem()}
                                                                                    style={{ backgroundColor: '#4a63ee' }}
                                                                                >
                                                                                    Si, estoy seguro
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-2"
                                                                                    onClick={closeModal}
                                                                                >
                                                                                    Cancelar
                                                                                </button>
                                                                            </div>
                                                                        </Dialog.Panel>
                                                                    </Transition.Child>
                                                                </div>
                                                            </div>
                                                        </Dialog>
                                                    </Transition>

                                                </div>
                                                <div className="flex items-center border-gray-100 sm:justify-start">
                                                    <span
                                                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                        onClick={() => handleDecrease(item.id)}
                                                    >
                                                        {"-"}
                                                    </span>
                                                    <input
                                                        className="h-8 w-12 border bg-white text-center text-xs outline-none"
                                                        type="text"
                                                        value={item.cantidad}
                                                        min={1}
                                                        readOnly={true}
                                                    />
                                                    <span
                                                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                        onClick={() => handleIncrease(item.id)}
                                                    >
                                                        {"+"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <h3 className="text-center text-2xl font-extrabold mb-2 mt-1"
                                    style={{ backfaceVisibility: "hidden", color: "#1e2447" }}>Resumen</h3>
                            </div>
                            <hr />
                            {currentUser ? (
                                <>
                                    <div className="mb-2 flex justify-between mt-4 flex-col">
                                        <label htmlFor="nombre"
                                            className="text-sm font-bold text-gray-900  block mb-2 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                        >
                                            Nombre:
                                        </label>
                                        <div className="relative mb-6">
                                            <input type="text" name="nombre" id="nombre"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                                defaultValue={currentUser.displayName}

                                            />
                                        </div>
                                    </div>
                                    <div className="mb-2 flex justify-between mt-4 flex-col">
                                        <label htmlFor="email"
                                            className="text-sm font-bold text-gray-900  block mb-2 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                        >
                                            Email:
                                        </label>
                                        <div className="relative mb-6">
                                            <input type="text" name="email" id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                                defaultValue={currentUser.email}

                                            />
                                        </div>
                                    </div>
                                </>

                            ) : (
                                <>
                                    <div className="mb-2 flex justify-between mt-4 flex-col">
                                        <label htmlFor="nombre"
                                            className="text-sm font-bold text-gray-900  block mb-2 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                        >
                                            Nombre:
                                        </label>
                                        <div className="relative mb-6">
                                            <input type="text" name="nombre" id="nombre"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                                placeholder="Nombre"

                                            />
                                        </div>
                                    </div>
                                    <div className="mb-2 flex justify-between mt-4 flex-col">
                                        <label htmlFor="email"
                                            className="text-sm font-bold text-gray-900  block mb-2 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                        >
                                            Email:
                                        </label>
                                        <div className="relative mb-6">
                                            <input type="text" name="email" id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                                placeholder="Email"

                                            />
                                        </div>
                                    </div>
                                </>

                            )
                            }


                            <div className="mb-2 flex justify-between mt-4 flex-col">
                                <label htmlFor="calle"
                                    className="text-sm font-bold text-gray-900  block mb-2 dark:text-gray-300"
                                    style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                >
                                    Calle:
                                </label>
                                <div className="relative mb-6">
                                    <input type="text" name="calle" id="calle"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        placeholder="Calle Recogidas"

                                    />
                                </div>
                            </div>
                            <div className="mb-2 flex justify-between mt-2 flex-col">
                                <label htmlFor="numero"
                                    className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                    style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                >
                                    Numero:
                                </label>
                                <div className="relative mb-6">
                                    <input type="text" name="numero" id="numero"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        placeholder="Numero 11º"

                                    />
                                </div>
                            </div>
                            <div className="mb-2 flex justify-between mt-2 flex-col">
                                <label htmlFor="piso"
                                    className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                    style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                >
                                    Piso:
                                </label>
                                <div className="relative mb-6">
                                    <input type="text" name="piso" id="piso"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        placeholder="5"

                                    />
                                </div>
                            </div>
                            <div className="mb-2 flex justify-between mt-2 flex-col">
                                <label htmlFor="letra"
                                    className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                    style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                >
                                    Letra:
                                </label>
                                <div className="relative mb-6">
                                    <input type="text" name="letra" id="letra"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        placeholder="F"

                                    />
                                </div>
                            </div>
                            <div className="mb-2 flex justify-between mt-2 flex-col">
                                <label htmlFor="provincia"
                                    className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                    style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>
                                    Provincia:
                                </label>
                                <div className="relative mb-6">
                                    <select name="provincia" id="provincia"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required onChange={(e) => {
                                            const provinciaSeleccionada = e.target.value;
                                            const seleccion = provinciasConCiudades.find((provincia) => provincia.provincia === provinciaSeleccionada);
                                            if (seleccion) {
                                                const ciudadesDeProvincia = seleccion.ciudades;
                                                const ciudadSelect = document.getElementById('ciudad');
                                                ciudadSelect.innerHTML = '';
                                                ciudadesDeProvincia.forEach((ciudad) => {
                                                    const opcion = document.createElement('option');
                                                    opcion.value = ciudad;
                                                    opcion.text = ciudad;
                                                    ciudadSelect.appendChild(opcion);
                                                });
                                            }
                                        }}>
                                        {provincias.map((provincia, index) => (
                                            <option key={index} value={provincia}>
                                                {provincia}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 flex justify-between mt-2 flex-col">
                                <label htmlFor="ciudad"
                                    className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                    style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>
                                    Ciudad:
                                </label>
                                <div className="relative mb-6">
                                    <select name="ciudad" id="ciudad"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required></select>
                                </div>
                            </div>


                            <div className="mb-2 flex justify-between mt-2 flex-col">
                                <label htmlFor="cp"
                                    className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                    style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                >
                                    Codigo Postal:
                                </label>
                                <div className="relative mb-6">
                                    <input type="text" name="cp" id="cp"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        placeholder="18001"

                                    />
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between mt-4">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">{subtotal.toFixed(2)} €</p>
                            </div>
                            <div className="flex justify-between mt-1">
                                <p className="text-gray-700">Impuestos  </p>
                                <p className="text-gray-700">{taxes.toFixed(2)} €</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p className="text-xl font-bold" style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>
                                    Total
                                </p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold" style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>
                                        {total.toFixed(2)} €
                                    </p>
                                </div>
                            </div>
                            <button
                                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                                style={{ backfaceVisibility: 'hidden', backgroundColor: '#4a63ee' }}>
                                Realizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            ) : (

                <h2 className="text-center text-2xl font-extrabold my-56 "
                    style={{ backfaceVisibility: "hidden", color: "#1e2447" }}>
                    No hay articulos en el carrito
                </h2>

            )}


        </>
    );
}