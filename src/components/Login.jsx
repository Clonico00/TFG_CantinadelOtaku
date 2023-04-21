import React from "react";

export default function Login() {
    return (
        <div className="max-w-2xl mx-auto mt-10 mb-12">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Iniciar sesión</h3>
                    <div>
                        <label htmlFor="usuario"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Usuario</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 11a3 3 0 100-6 3 3 0 000 6z"></path>
                                    <path d="M10 14c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z"></path>
                                </svg>
                            </div>
                            <input type="text" name="usuario" id="usuario"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Usuario" required/>

                        </div>

                    </div>
                    <div>
                        <label htmlFor="password"
                               className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Contraseña</label>
                        <div className="relative mb-6">
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   required/>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M16 7h-1V5c0-2.757-2.243-5-5-5S5 2.243 5 5v2H4C2.897 7 2 7.897 2 9v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM7 5c0-1.654 1.346-3 3-3s3 1.346 3 3v2H7V5zm7 12H6V9h8v8zm-4-6c0-.552-.448-1-1-1s-1 .448-1 1v3c0 .552.448 1 1 1s1-.448 1-1v-3z"
                                          clipRule="evenodd"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="flex items-start">
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
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesión</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        ¿No tienes cuenta? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"> Registrate</a>
                    </div>
                </form>
            </div>
        </div>
    );
}