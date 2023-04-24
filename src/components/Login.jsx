import React from "react";

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md shadow-md rounded-lg overflow-hidden border border-gray-200 py-2">
                <div className="md:flex">
                    <div className="w-full p-4 py-5">
                        <h2 className="text-center text-2xl font-bold t dark:text-white"
                            style={{ backfaceVisibility: 'hidden',
                                color: '#1e2447'}}>Inicar Sesión</h2>
                        <form className="mt-4">
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="usuario"
                                           className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#1e2447'}} >Usuario: </label>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 11a3 3 0 100-6 3 3 0 000 6z"></path>
                                                <path d="M10 14c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z"></path>
                                            </svg>
                                        </div>
                                        <input type="text" name="usuario" id="usuario"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                                               placeholder="Usuario" required/>

                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="password"
                                           className="text-sm font-bold text-gray-900 block dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Contraseña: </label>
                                    <div className="relative mb-6">
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 className="w-5 h-5 text-gray-500 dark:text-gray-400">
                                                <path
                                                    d="M10 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2z"/>
                                            </svg>


                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="text-sm ml-3">
                                    <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Recuérdame</label>
                                </div>
                                <div className="text-sm ml-3">
                                    <a href="#" className=" text-blue-700 hover:underline ml-auto dark:text-blue-500">¿Te has olvidado de la contraseña?</a>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                    style={{backgroundColor: "#4a63ee"}}
                            >Iniciar Sesión

                            </button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
                                ¿No tienes cuenta? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"> Registrate</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}