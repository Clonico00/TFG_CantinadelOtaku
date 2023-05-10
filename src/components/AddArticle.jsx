import React from "react";

export default function AddArticle() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white dark:bg-gray-800 w-full max-w-md shadow-md rounded-lg border border-gray-200">
                    <div className="md:flex">
                        <div className="w-full p-4 py-5">
                            <h2 className="text-center text-2xl font-bold t dark:text-white"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    color: '#1e2447'
                                }}>Añadir Articulo</h2>
                            <form className="mt-4">
                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="nombre"
                                               className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                               style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Nombre: </label>
                                        <div className="relative mb-6">
                                            <input
                                                type="text"
                                                name="nombre"
                                                id="nombre"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                                placeholder="One piece"
                                                pattern="[A-Za-z0-9\s!@#$%^&*()_+=\-[\]{}|\\:;<>,.?/]*"
                                                title="Solo se permiten letras, números y símbolos comunes."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="categoria"
                                               className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                                               style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Categoria: </label>
                                        <div className="relative mb-6">
                                            <select name="categoria" id="categoria"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    required>
                                                <option value="">Seleccione una categoría</option>
                                                <option value="merchandising">Merchandising</option>
                                                <option value="manga">Manga</option>
                                                <option value="comic">Comic</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="precio"
                                               className="block text-sm font-bold text-gray-900 dark:text-gray-300"
                                               style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Precio: </label>
                                        <div className="relative mb-6">
                                            <input
                                                type="text"
                                                id="precio"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="9.99"
                                                pattern="[0-9]+(\.[0-9]+)?"
                                                title="Ingrese un número decimal válido, Ej: 9.99"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="stock"
                                               className="text-sm font-bold text-gray-900 block dark:text-gray-300"
                                               style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Stock: </label>
                                        <div className="relative mb-6">
                                            <input
                                                type="number"
                                                name="stock"
                                                id="stock"
                                                placeholder="300"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                min="1"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="relative">
                                        <label htmlFor="photo"
                                               className="text-sm font-bold mb-2 text-gray-900 block dark:text-gray-300"
                                               style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Imagen del
                                            artículo: </label>
                                        <div className="max-w-2xl mx-auto">
                                            <input
                                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                id="photo"
                                                type="file"
                                                accept="image/*"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>


                                <button type="submit"
                                        className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                        style={{backgroundColor: "#4a63ee"}}
                                >Añadir articulo

                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}