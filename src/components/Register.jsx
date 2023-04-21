import React from "react";

export default function Register() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md shadow-md rounded-lg overflow-hidden border border-gray-200">
                <div className="md:flex">
                    <div className="w-full p-4 py-5">
                        <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">Crear
                            cuenta</h2>
                        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Registrate para poder tener acceso a toda nuestra palataforma</p>
                        <form className="mt-4">
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="nombre"
                                           className="text-sm font-extrabold text-gray-900 block mb-2 dark:text-gray-300"
                                           style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}

                                    >Nombre: </label>
                                    <div className="relative mb-6">
                                        <input type="text" name="nombre" id="nombre"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="apellidos"
                                           className="text-sm font-extrabold text-gray-900 block mb-2 dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>Apellidos: </label>
                                    <div className="relative mb-6">
                                        <input type="text" name="apellidos" id="apellidos"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="usuario"
                                           className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#3E62FF'}} >Usuario: </label>
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
                                    <label htmlFor="email"
                                           className="block text-sm font-extrabold text-gray-900 dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>Email: </label>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                        <input type="email" id="email"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Email" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="password"
                                           className="text-sm font-extrabold text-gray-900 block dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>Contraseña: </label>
                                    <div className="relative mb-6">
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                 fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M16 7h-1V5c0-2.757-2.243-5-5-5S5 2.243 5 5v2H4C2.897 7 2 7.897 2 9v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM7 5c0-1.654 1.346-3 3-3s3 1.346 3 3v2H7V5zm7 12H6V9h8v8zm-4-6c0-.552-.448-1-1-1s-1 .448-1 1v3c0 .552.448 1 1 1s1-.448 1-1v-3z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col">
                                <div>
                                     <label htmlFor="password"
                                              className="text-sm font-extrabold text-gray-900 block mb-2 dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>Repite
                                    la
                                    contraseña</label>
                                    <div className="relative mb-6">
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                 fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M16 7h-1V5c0-2.757-2.243-5-5-5S5 2.243 5 5v2H4C2.897 7 2 7.897 2 9v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM7 5c0-1.654 1.346-3 3-3s3 1.346 3 3v2H7V5zm7 12H6V9h8v8zm-4-6c0-.552-.448-1-1-1s-1 .448-1 1v3c0 .552.448 1 1 1s1-.448 1-1v-3z"
                                                      clipRule="evenodd"/>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ">
                                <div className="relative">
                                    <label htmlFor="photo"
                                           className="text-sm font-extrabold text-gray-900 block dark:text-gray-300" style={{backfaceVisibility: 'hidden', color: '#3E62FF'}}>Foto
                                        de perfil: </label>
                                    <div className="max-w-2xl mx-auto">
                                        <input
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            id="photo" type="file"/>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <input type="checkbox" name="remember" id="remember"
                                           className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                                    <label htmlFor="remember"
                                           className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                        Acepto los términos y condiciones
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#"
                                       className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-blue-400">¿Tienes
                                        una cuenta?</a>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                    style={{backgroundColor: "#3E62ff"}}
                            >Crear cuenta

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}