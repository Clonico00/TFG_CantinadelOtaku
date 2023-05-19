import React, { useState } from "react";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";


export default function Register() {
    const [name, setName] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Comprobar si el nombre de usuario ya existe en la base de datos
            console.log(image)
            const usersCollection = collection(db, 'users');
            const usernameQuery = query(usersCollection, where('username', '==', username));
            const usernameSnapshot = await getDocs(usernameQuery);
            if (!usernameSnapshot.empty) {
                setError('El nombre de usuario ya está en uso.');
                return;
            }

            // Si el nombre de usuario no existe, se crea el nuevo usuario
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            // Sube la foto de perfil a Firebase Storage
            const storageRef = ref(storage, `profile_pictures/${user.uid}`);
            await uploadBytes(storageRef, image);
            const profilePictureURL = await getDownloadURL(storageRef);
            // Guarda los datos del usuario en Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name: name,
                apellidos: apellidos,
                username: username,
                email: email,
                image: profilePictureURL,
                isAdmin: false,
            });

            navigate('/login'); // Redirigir a la página de login
        } catch (error) {
            // En caso de error, se maneja el error y se muestra una alerta correspondiente
            if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico ya está en uso.');
            } else {
                setError('Ocurrió un error durante el registro.' + error.code);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen my-24 mx-2">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md shadow-md rounded-lg border border-gray-200">
                <div className="md:flex">
                    <div className="w-full p-4 py-5">
                        <h2 className="text-center text-2xl font-bold t dark:text-white"
                            style={{
                                backfaceVisibility: 'hidden',
                                color: '#1e2447'
                            }}>Registrar Usuario</h2>
                        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Registrate para poder tener
                            acceso a toda nuestra palataforma</p>
                        <form className="mt-4" onSubmit={handleRegister}>
                            {error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative" role="alert">
                                    <strong className="font-bold">Error: </strong>
                                    <span className="block sm:inline">{error}</span>
                                </div>
                            )}
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="nombre"
                                        className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                        style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}

                                    >Nombre: </label>
                                    <div className="relative mb-6">
                                        <input type="text" name="nombre" id="nombre"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="apellidos"
                                        className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                        style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>
                                        Apellidos:
                                    </label>
                                    <div className="relative mb-6">
                                        <input type="text" name="apellidos" id="apellidos"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                            onChange={(e) => setApellidos(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="usuario"
                                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                                        style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Usuario: </label>
                                    <div className="relative mb-6">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 11a3 3 0 100-6 3 3 0 000 6z"></path>
                                                <path d="M10 14c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z"></path>
                                            </svg>
                                        </div>
                                        <input type="text" name="usuario" id="usuario"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                                            placeholder="Usuario" required
                                            onChange={(e) => setUsername(e.target.value)}
                                        />

                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="email"
                                        className="block text-sm font-bold text-gray-900 dark:text-gray-300"
                                        style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Email: </label>
                                    <div className="relative mb-6">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path
                                                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                        <input type="email" id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Email" required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-bold text-gray-900 block dark:text-gray-300"
                                        style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                    >
                                        Contraseña:
                                    </label>
                                    <div className="relative mb-6">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            >
                                                <path
                                                    d="M10 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\p{P}\p{S}]).{8,}$"
                                            title="La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, un número y un símbolo especial"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 " fill="currentColor"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 " fill="currentColor"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" /></svg>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-bold text-gray-900 block dark:text-gray-300"
                                        style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                    >
                                        Repite la Contraseña:
                                    </label>

                                    <div className="relative mb-6">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                        >

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            >
                                                <path
                                                    d="M10 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type={showRepeatPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            value={repeatPassword}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                            pattern={`^${password}$`}
                                            title="Las contraseñas deben coincidir"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
                                            onClick={toggleRepeatPasswordVisibility}
                                        >
                                            {showRepeatPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 " fill="currentColor"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 " fill="currentColor"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" /></svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ">
                                <div className="relative">
                                    <label htmlFor="photo"
                                        className="text-sm font-bold mb-2 text-gray-900 block dark:text-gray-300"
                                        style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Foto
                                        de perfil: </label>
                                    <div className="max-w-2xl mx-auto">
                                        <input
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            id="photo"
                                            type="file"
                                            accept="image/*" // Acepta solo archivos de imagen
                                            required
                                            onChange={(e) => setImage(e.target.files[0])} // Acceder al primer archivo seleccionado
                                        />

                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <input type="checkbox" name="remember" id="remember" required
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label htmlFor="remember"
                                        className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                        Acepto los términos y condiciones
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link to="/login"
                                        className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-blue-400">¿Tienes
                                        una cuenta?</Link>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                style={{ backgroundColor: "#4a63ee" }}
                            >
                                Crear cuenta
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}