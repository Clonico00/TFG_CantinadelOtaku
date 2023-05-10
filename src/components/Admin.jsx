import React, {useState, Fragment} from "react";
import {Link} from "react-router-dom";
import {Dialog, Transition} from '@headlessui/react'

const articulos = [
    {
        id: "1",
        nombre: "Articulo 1",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "2",
        nombre: "Articulo 2",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "3",
        nombre: "Articulo 3",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "4",
        nombre: "Articulo 4",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "5",
        nombre: "Articulo 5",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "6",
        nombre: "Articulo 6",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "7",
        nombre: "Articulo 7",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "8",
        nombre: "Articulo 8",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "9",
        nombre: "Articulo 9",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "10",
        nombre: "Articulo 10",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "11",
        nombre: "Articulo 11",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "12",
        nombre: "Articulo 12",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "13",
        nombre: "Articulo 13",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "14",
        nombre: "Articulo 14",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },
    {
        id: "15",
        nombre: "Articulo 15",
        imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        stock: "300",
        precio: "10.95",
        categoria: "Mangas"
    },


];

export default function Admin() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false)

    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = articulos.slice(startIndex, endIndex);

    const totalPages = Math.ceil(articulos.length / itemsPerPage);

    const setPage = (page) => {
        if (page < 1 || page > totalPages) {
            return;
        }

        setCurrentPage(page);
    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>

            <div
                className="flex justify-between items-center px-6 py-4 mt-10 bg-gray-50 border border-gray-200 rounded  custom-margin ">
                <h2 className="text-center text-2xl font-bold" style={{backfaceVisibility: "hidden", color: "#1e2447"}}>
                    Inventario
                </h2>
                <button className="text-white font-bold px-6 py-1 rounded hover:scale-105 transition-all duration-400 "
                        style={{backgroundColor: "#4a63ee"}}>
                    <Link to={`/admin/add/`}>
                        <svg viewBox="0 0 512 512" fill="currentColor" height="30" width="30">
                            <path
                                d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"/>
                        </svg>
                    </Link>
                </button>
            </div>

            <div className=" overflow-x-auto rounded-lg border border-gray-200 shadow-md  custom-margin mb-10">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500  ">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-bold text-md" style={{color: "#1e2447"}}>
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-4 font-bold text-md" style={{color: "#1e2447"}}>
                            Stock
                        </th>
                        <th scope="col" className="px-6 py-4 font-bold text-md" style={{color: "#1e2447"}}>
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-4 font-bold text-md" style={{color: "#1e2447"}}>
                            Categoria
                        </th>
                        <th scope="col" className="px-6 py-4 font-bold text-md" style={{color: "#1e2447"}}>
                            Acciones
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {currentItems.map((articulo) => (
                        <tr key={articulo.id} className="hover:bg-gray-50">
                            <td className="flex gap-3 px-6 py-4 text-gray-500">
                                <div className="relative h-10 w-10">
                                    <img
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src={articulo.imagen}
                                        alt={articulo.nombre}
                                    />
                                </div>
                                <div className="mt-2.5 ml-2">
                                    {articulo.nombre}
                                </div>
                            </td>
                            <td className="px-6 py-4">{articulo.stock}</td>
                            <td className="px-6 py-4">{articulo.precio}$</td>
                            <td className="px-6 py-4">{articulo.categoria}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-start gap-4 ">
                                    <Link to={`/admin/edit/${articulo.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                             className="h-6 w-6"
                                             strokeWidth="1"
                                             fill="#1e2447"
                                        >
                                            <path
                                                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                                        </svg>
                                    </Link>
                                    <button
                                        onClick={openModal}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                             className="h-6 w-6"
                                             strokeWidth="1"
                                             fill="#1e2447"

                                        >
                                            <path
                                                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
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
                                                <div className="fixed inset-0 bg-black bg-opacity-25"/>
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
                                                                    ¿Estás seguro de que quieres borrar este artículo?
                                                                </p>
                                                            </div>

                                                            <div className="mt-4 flex justify-end">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                    onClick={closeModal}
                                                                    style={{backgroundColor: '#4a63ee'}}
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
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="sticky bottom-0 left-0 right-0 bg-white ">
                    <div className="flex justify-center items-center p-4 shadow-md">
                        <button
                            className=" text-white  border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded hover:scale-105 transition-all duration-400"
                            style={{backfaceVisibility: "hidden", backgroundColor: "#4a63ee"}}
                            onClick={() => setPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6" fill="currentColor">
                                <path
                                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                        </button>
                        <div className="font-bold mx-6" style={{color: "#1e2447"}}>
                            Página {currentPage} de {totalPages}
                        </div>
                        <button
                            className=" text-white  border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded hover:scale-105 transition-all duration-400 "
                            style={{backfaceVisibility: "hidden", backgroundColor: "#4a63ee"}}
                            onClick={() => setPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6" fill="currentColor"
                            >
                                <path
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}
