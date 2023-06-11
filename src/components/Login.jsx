import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { collection, where, getDocs, query, addDoc } from "firebase/firestore";
import { Dialog, Transition } from "@headlessui/react";
import { useAtom } from 'jotai';
import { userDataAtom } from "../atoms/userAtom";

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(email);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                            >
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Reenvio de contraseña
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Escriba aqui su dirección de correo electrónico y le enviaremos un enlace para restablecer su contraseña.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={handleSubmit}
                                        style={{ backgroundColor: '#4a63ee' }}
                                    >
                                        Enviar
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-2"
                                        onClick={onClose}
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
    );
};

/**
 * 
* @class
 */
 function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [userAtom, setUserAtom] = useAtom(userDataAtom);

    /**
     * Cierra el modal.
     */
    const closeModal = () => {
        setIsOpen(false);
    };

    /**
     * Abre el modal.
     */
    const openModal = () => {
        setIsOpen(true);
    };

    /**
     * Maneja el inicio de sesión.
     * @param {object} e - El evento del formulario.
     */
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Iniciar sesión con correo electrónico y contraseña
            await signInWithEmailAndPassword(auth, email, password);

            // Obtener los datos del usuario
            const usersRef = collection(db, 'users');
            const userQuery = await query(usersRef, where('email', '==', email));
            const snapshot = await getDocs(userQuery);

            if (!snapshot.empty) {
                const userData = snapshot.docs[0].data();
                setUserAtom(userData);
                localStorage.setItem('userDataAtom', JSON.stringify(userData));
                // Verificar si el usuario es administrador
                if (userData.isAdmin) {
                    navigate('/admin'); // Redirigir a la página de administrador
                } else {
                    navigate('/merchandising'); // Redirigir a la página de inicio del usuario
                }
            }
        } catch (error) {
            // En caso de error, se maneja el error y se muestra una alerta correspondiente
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setError('Credenciales inválidas. Verifica tu correo electrónico y contraseña.');
            } else {
                setError('Ocurrió un error durante el inicio de sesión. ' + error);
            }
        }
    };

    /**
     * Maneja el inicio de sesión con Google.
     */
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(async (result) => {
                // Autenticación exitosa con Google
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...                // Obtener el correo electrónico y los datos del usuario
                const email = user.email;
                const usersRef = collection(db, 'users');
                const userQuery = query(usersRef, where('email', '==', email));
                let snapshot = await getDocs(userQuery);

                if (!snapshot.empty) {
                    setUserAtom(snapshot.docs[0].data());
                    localStorage.setItem('userDataAtom', JSON.stringify(snapshot.docs[0].data()));
                    navigate('/merchandising'); // Redirigir a la página de inicio del usuario

                } else {

                    await addDoc(collection(db, 'users'), {
                        email: email,
                        isAdmin: false,
                        name: user.displayName,
                        image: user.photoURL,
                    });

                    snapshot = await getDocs(userQuery);
                    setUserAtom(snapshot.docs[0].data());
                    localStorage.setItem('userDataAtom', JSON.stringify(snapshot.docs[0].data()));
                    navigate('/merchandising'); // Redirigir a la página de inicio del usuario
                }


            })
            .catch((error) => {
                // Error durante la autenticación con Google
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/account-exists-with-different-credential') {
                    setError('Ya existe una cuenta con el correo electrónico proporcionado.');
                } else {
                    setError('Ocurrió un error durante la autenticación con Google. ' + errorMessage);
                }
            });
    };

    /**
     * Restablece la contraseña.
     * @param {string} email - El correo electrónico para restablecer la contraseña.
     */
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                closeModal();
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    setError('No existe una cuenta con el correo electrónico proporcionado.');
                    closeModal();
                } else {
                    setError('Ocurrió un error al enviar el correo electrónico. ' + error);
                    closeModal();
                }
            });
    };

    /**
     * Alterna la visibilidad de la contraseña.
     */
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen mx-2">
                <div className="bg-white dark:bg-gray-800 w-full max-w-md shadow-md rounded-lg border border-gray-200 py-2">
                    <div className="md:flex">
                        <div className="w-full p-4 py-5">
                            <h2 className="text-center text-2xl font-bold t dark:text-white"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    color: '#1e2447'
                                }}>Inicar Sesión</h2>
                            <form className="mt-4" onSubmit={handleLogin}>
                                {error && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Error:</strong>
                                        <span className="block sm:inline">{error}</span>
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="email"
                                            className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Email: </label>
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
                                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                                                placeholder="Email" required />

                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="password"
                                            className="text-sm font-bold text-gray-900 block dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Contraseña: </label>
                                        <div className="relative mb-6">
                                            <input type={showPassword ? 'text' : 'password'}
                                                name="password" id="password" placeholder="••••••••"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required />
                                            <div
                                                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="w-5 h-5 text-gray-500 dark:text-gray-400">
                                                    <path
                                                        d="M10 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2z" />
                                                </svg>


                                            </div>
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
                                <div className="flex items-start">
                                    <div className="text-sm ml-3">
                                        <span className="text-blue-700 hover:underline ml-auto dark:text-blue-500" onClick={openModal}>
                                            ¿Te has olvidado de la contraseña?
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                    style={{ backgroundColor: "#4a63ee" }}
                                >
                                    Iniciar Sesión
                                </button>
                                <hr className="my-6 border-gray-300 w-full" />


                                <button
                                    type="button"
                                    className="w-full  bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center justify-center"
                                    style={{ backgroundColor: "#4a63ee" }}
                                    onClick={handleGoogleSignIn}
                                >
                                    <img className="h-5 w-5 mr-2"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
                                    Inicia Sesion con Google
                                </button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
                                    ¿No tienes cuenta?{" "}
                                    <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">
                                        Regístrate
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal} onSubmit={resetPassword} />
        </>

    );
}

export default Login;