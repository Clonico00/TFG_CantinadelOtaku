import React, { Fragment, useState, useContext, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Dialog, Transition } from "@headlessui/react";
import { AuthContext } from './AuthContext';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { where, getDocs, query, onSnapshot, orderBy, doc, deleteDoc } from "firebase/firestore";
import UsuarioIconDefault from '../img/usuario_icon.png';
import { toast, Toaster } from 'react-hot-toast';
/**
 * 
* @class
 */

const Forum = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  // eslint-disable-next-line
  const [image, setImage] = useState(UsuarioIconDefault);
  const [messages, setMessages] = useState([]);
  const [messageIdtoDelete, setMessageIdtoDelete] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  /**
   * Maneja la selección de una foto por el usuario.
   * @param {object} e - Evento de cambio de archivo.
   */
  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    } else {
      setSelectedImage(null);
    }
  };

  /**
   * Limpia la selección de la foto del usuario.
   */
  const handlePhotoClear = () => {
    setSelectedImage(null);
  };

  /**
   * Formatea un timestamp en una cadena de texto que muestra la hora y la fecha.
   * @param {object} timestamp - El timestamp a formatear.
   * @returns {string} La cadena de texto formateada con la hora y la fecha.
   */
  const formatTimestamp = (timestamp) => {
    const date = timestamp ? timestamp.toDate() : new Date(); // Convertir el timestamp a un objeto Date

    const hour = date.getHours().toString().padStart(2, '0'); // Obtener la hora y asegurarse de que tenga 2 dígitos
    const minute = date.getMinutes().toString().padStart(2, '0'); // Obtener los minutos y asegurarse de que tengan 2 dígitos
    const formattedTime = `${hour}:${minute}`; // Formatear la hora y los minutos

    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }; // Opciones de formato de fecha
    const formattedDate = date.toLocaleDateString(undefined, options); // Formatear la fecha

    return `${formattedTime} · ${formattedDate}`; // Combinar la hora y la fecha formateadas
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const usersRef = collection(db, 'users');
          const userQuery = query(usersRef, where('email', '==', currentUser.email));
          const snapshot = await getDocs(userQuery);

          if (!snapshot.empty) {
            const userData = snapshot.docs[0].data();
            setUserData(userData);

            // Establecer el estado "image" después de obtener los datos del usuario
            const image = userData && userData.image ? userData.image : UsuarioIconDefault;
            setImage(image);
          }
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  /**
   * Envía un mensaje al foro.
   */
  const sendMessage = async () => {
    const inputElement = document.getElementById('nombre');
    const message = inputElement.value;

    // Verificar si se seleccionó una imagen
    const imageInputElement = document.getElementById('image-input');

    // Comprueba que el tipo de archivo sea una imagen y no pese más de 5MB
    const imageFile =
      imageInputElement.files[0] &&
      imageInputElement.files[0].type.includes('image/') &&
      imageInputElement.files[0].size < 5000000
        ? imageInputElement.files[0]
        : null;
    if (!imageFile) {
      toast.error('Error al enviar el mensaje: La imagen no es válida o es demasiado grande');
      return;
    }

    try {
      let profilePictureURL = null; // Inicializa la URL de la imagen como null

      if (imageFile) {
        const storageRef = ref(storage, `forum_images/${currentUser.id}`);
        await uploadBytes(storageRef, imageFile);
        profilePictureURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, 'forum'), {
        user: currentUser.email,
        userName: userData.name,
        user_photo: userData.image,
        message: message,
        message_date: serverTimestamp(),
        message_img: profilePictureURL,
      });

      // Limpiar el campo del mensaje y restablecer la selección de imagen
      inputElement.value = '';
      imageInputElement.value = '';

      console.log('Mensaje enviado correctamente');
      console.log(currentUser);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'forum'), orderBy('message_date')),
      (snapshot) => {
        const messageData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messageData);
      }
    );

    return () => unsubscribe();
  }, []);

  /**
   * Elimina un mensaje del foro.
   */
  const deleteMessage = async () => {
    try {
      await deleteDoc(doc(db, 'forum', messageIdtoDelete));
      console.log('Mensaje eliminado correctamente');
      closeModal();
    } catch (error) {
      console.error('Error al eliminar el mensaje:', error);
    }
  };

  /**
   * Calcula la diferencia de tiempo entre la fecha del mensaje y el momento actual.
   * @param {object} timestamp - El timestamp del mensaje.
   * @returns {string} La diferencia de tiempo formateada.
   */
  const getTimeDifference = (timestamp) => {
    const currentDate = new Date(); // Fecha actual
    const messageDate = timestamp ? timestamp.toDate() : new Date(); // Fecha del mensaje
    const difference = Math.abs(currentDate - messageDate); // Diferencia en milisegundos

    const minutesDifference = Math.floor(difference / (1000 * 60)); // Diferencia en minutos

    if (minutesDifference < 1) {
      return 'Posted less than a minute ago';
    } else if (minutesDifference === 1) {
      return 'Posted 1 minute ago';
    } else if (minutesDifference < 60) {
      return `Posted ${minutesDifference} minutes ago`;
    } else {
      const hoursDifference = Math.floor(minutesDifference / 60); // Diferencia en horas

      if (hoursDifference === 1) {
        return 'Posted 1 hour ago';
      } else {
        return `Posted ${hoursDifference} hours ago`;
      }
    }
  };

  /**
   * Cierra el modal de eliminación de mensaje.
   */
  function closeModal() {
    setIsOpen(false);
  }

  /**
   * Abre el modal de eliminación de mensaje.
   */
  function openModal() {
    setIsOpen(true);
  }


    return (
        <div className="flex justify-center">
            <div className="container mx-auto p-4 mt-10">
                <div className="pt-8">
                    <h2 className="text-center text-2xl font-extrabold"
                        style={{ backfaceVisibility: "hidden", color: "#1e2447" }}>Foro</h2>
                </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}

                    toastStyle={{
                        width: '50%', // Ajusta el ancho del contenido del toast
                    }}
                />
                <div
                    className="custom-max-height overflow-auto bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 max-w-7xl mb-28 mt-12">
                    <div className="grid gap-4">
                        {messages.map((msg, index) => (
                            <div key={index} className="card bg-white rounded-lg p-4 mt-4 shadow mx-2 hover:bg-gray-50">
                                <div className="flex flex-col">
                                    <div className="flex items-center space-x-4">
                                        <img src={msg.user_photo} alt="User Profile"
                                            className="w-12 h-12 rounded-full" />
                                        <div className="flex flex-col">
                                            <span className="font-bold" style={{
                                                backfaceVisibility: "hidden",
                                                color: "#1e2447"
                                            }}>{msg.userName}</span>
                                            <span className="text-sm mt-1 text-gray-400">{msg.user}</span>
                                        </div>
                                    </div>
                                    <div className="text mt-2">
                                        <span className="text-lg">{msg.message}</span>
                                        {msg.message_img &&
                                            // eslint-disable-next-line
                                            <img src={msg.message_img} alt="Message Image" className="mt-4" />}
                                        <span className="date text-sm text-gray-500 flex items-center mt-1" style={{ backfaceVisibility: "hidden" }}>
                                            <span className="ml-2 text-gray-500">
                                                {formatTimestamp(msg.message_date)}
                                            </span>
                                            <span className="ml-2" style={{ color: "#4a63ee" }}>
                                                {getTimeDifference(msg.message_date)}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                {currentUser && currentUser.email === "admin@admin.com" && (
                                    <div className="admin-button flex justify-end mt-2">
                                        <button
                                            className="text-sm send-button
                                             rounded-lg px-4 py-2"
                                            onClick={() => {
                                                setMessageIdtoDelete(msg.id);
                                                openModal();
                                            }}
                                            style={{
                                                color: "#d73544"
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
                                                                        mensaje?
                                                                    </p>
                                                                </div>

                                                                <div className="mt-4 flex justify-end">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                        onClick={() => deleteMessage()} // Llama a la función deleteMessage con el ID del mensaje
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
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {currentUser && (
                    <div className="forum-label flex items-center justify-center">
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            className="bg-gray-50 ml-2 my-2 mr-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                            placeholder="Escribe tu opinión..."
                            pattern="[A-Za-z0-9\s!@#$%^&*()_+=\-[\]{}|\\:;<>,.?/]*"
                            title="Solo se permiten letras, números y símbolos comunes."
                        />
                        <div className="flex items-center relative">
                            {selectedImage && (
                                <div className="flex items-center relative mr-2">
                                    <img
                                        src={selectedImage}
                                        alt="Imagen previa"
                                        className="w-16 h-16 rounded-lg"
                                    />
                                    <button
                                        className="text-sm send-button rounded-full px-2 py-1 bg-white absolute top-0 right-0  mr-1"
                                        onClick={handlePhotoClear}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 384 512"
                                            fill="red"
                                        >
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="image-input"
                                onChange={handlePhotoSelect}
                            />
                            <label
                                htmlFor="image-input"
                                className={`text-sm send-button bg-blue-500 text-white rounded-lg px-4 py-2 mr-2 ${selectedImage ? 'hidden' : ''}`}
                                style={{ backgroundColor: "#4a63ee" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    height="20"
                                    width="20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                                    />
                                </svg>
                            </label>
                        </div>

                        <button
                            className="text-sm send-button bg-blue-500 text-white rounded-lg px-4 py-2 mr-1"
                            style={{ backgroundColor: "#4a63ee" }}
                            onClick={sendMessage}
                        >
                            Enviar
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Forum;
