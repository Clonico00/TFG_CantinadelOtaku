import React, {useState} from "react";
import {Link} from "react-router-dom";

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

    return (
        <>
            <div className="flex justify-between items-center px-6 py-4 mt-10 bg-gray-50 border border-gray-200 rounded mx-1">
                <h2 className="text-center text-2xl font-bold" style={{backfaceVisibility: "hidden", color: "#1e2447"}}>
                    Inventario
                </h2>
                <button className="text-white font-bold px-6 py-1 rounded hover:scale-105 transition-all duration-400 " style={{backgroundColor: "#4a63ee"}}>
                    <Link to={`/admin/add/`}>
                        <svg viewBox="0 0 512 512" fill="currentColor" height="30" width="30">
                            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" />
                        </svg>
                    </Link>
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md mx-1">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
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
                                        >
                                            <path
                                                d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
                                        </svg>
                                    </Link>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                             className="h-6 w-6"
                                             strokeWidth="1"
                                        >
                                            <path
                                                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="sticky bottom-0 left-0 right-0 bg-white ">
                    <div className="flex justify-center items-center p-4 shadow-md">
                        <button
                            className=" text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded hover:scale-105 transition-all duration-400"
                            style={{backfaceVisibility: "hidden", backgroundColor: "#4a63ee"}}
                            onClick={() => setPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                        <div className="font-bold mx-6" style={{color: "#1e2447"}}>
                            Página {currentPage} de {totalPages}
                        </div>
                        <button
                            className=" text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded hover:scale-105 transition-all duration-400"
                            style={{backfaceVisibility: "hidden", backgroundColor: "#4a63ee"}}
                            onClick={() => setPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}
