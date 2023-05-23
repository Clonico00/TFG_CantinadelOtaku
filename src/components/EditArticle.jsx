import React, {useState, useEffect} from "react";
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from "../firebase";
import {useLocation, useNavigate } from "react-router-dom";

export default function EditArticle() {
    const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  let id = path.substring(path.lastIndexOf('/') + 1);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async (id) => {
      const articleRef = doc(db, 'articles', id);
      const snapshot = await getDoc(articleRef);
      if (snapshot.exists()) {
        const articleData = { id: snapshot.id, ...snapshot.data() };
        setArticle(articleData);
      } else {
        // El documento no existe
        setArticle(null);
      }
    };

    fetchArticle(id);
  }, [id]);

  
  if (!article) {
    // Renderizar un mensaje de carga mientras se obtiene el artículo
    return <p>Cargando artículo...</p>;
  }


  const handleEdit = async (event) => {
    event.preventDefault();
  
    // Obtener los valores actualizados del formulario
    const updatedArticle = {
      title: event.target.title.value,
      description: event.target.description.value,
      category: event.target.category.value !== '' ? event.target.category.value : article.category,
      precio: event.target.price.value,
      stock: parseInt(event.target.stock.value),
      brand: event.target.brand.value,
      image: event.target.photo.files[0] ? event.target.photo.files[0] : null,
      // Resto de los campos del artículo
    };
  
    // Validar campos vacíos
    if (Object.values(updatedArticle).some(value => value === '')) {
      console.error('No se permiten campos vacíos');
      return;
    }
  
    try {
      // Actualizar el archivo de almacenamiento si se proporciona una nueva imagen
      let imageUrl = article.image;
      if (updatedArticle.image) {
        // Subir el archivo al almacenamiento y obtener la URL de descarga
        const fileRef = ref(storage, `articles/${id}/${updatedArticle.image.name}`);
        const snapshot = await uploadBytes(fileRef, updatedArticle.image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }
  
      // Crear el objeto actualizado para la base de datos
      const updatedFields = {
        ...updatedArticle,
        image: imageUrl,
      };
  
      // Actualizar el documento en la base de datos
      await updateDoc(doc(db, 'articles', id), updatedFields);
      console.log('Artículo actualizado exitosamente');
  
      // Restablecer el estado del artículo
      setArticle({
        id: '',
        title: '',
        description: '',
        category: '',
        precio: '',
        stock: '',
        brand: '',
        image: '',
        // Restablece aquí los demás campos del artículo
      });
      navigate('/admin');
    } catch (error) {
      console.error('Error al actualizar el artículo', error);
    }
  };
  
  
  const handleChange = (event) => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value
    });
  };

    return (

        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md shadow-md rounded-lg border border-gray-200">
                <div className="md:flex">
                    <div className="w-full p-4 py-5">
                        <h2 className="text-center text-2xl font-bold t dark:text-white"
                            style={{
                                backfaceVisibility: 'hidden',
                                color: '#1e2447'
                            }}>Editar Articulo</h2>
                        <form className="mt-4" onSubmit={handleEdit}>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="title"
                                           className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                           style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Nombre: </label>
                                    <div className="relative mb-6">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            value={article.title}
                                            pattern="[A-Za-z0-9\s!@#$%^&*()_+=\-[\]{}|\\:;<>,.?/]*"
                                            title="Solo se permiten letras, números y símbolos comunes."
                                            onChange={handleChange} // Agrega el evento onChange para actualizar el estado
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="description"
                                           className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                           style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Description: </label>
                                    <div className="relative mb-6">
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            value={article.description}
                                            pattern="[A-Za-z0-9\s!@#$%^&*()_+=\-[\]{}|\\:;<>,.?/]*"
                                            title="Solo se permiten letras, números y símbolos comunes."
                                            onChange={handleChange} // Agrega el evento onChange para actualizar el estado
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="category"
                                           className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                                           style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Categoria: </label>
                                    <div className="relative mb-6">
                                        <select name="category" id="category"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                >
                                            <option value="">Seleccione una categoría</option>
                                            <option value="Merchandising">Merchandising</option>
                                            <option value="Mangas">Mangas</option>
                                            <option value="Comics">Comics</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="price"
                                           className="block text-sm font-bold text-gray-900 dark:text-gray-300"
                                           style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Precio: </label>
                                    <div className="relative mb-6">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={article.price}
                                            onChange={handleChange} // Agrega el evento onChange para actualizar el estado
                                            pattern="[0-9]+(\.[0-9]+)?"
                                            title="Ingrese un número decimal válido, Ej: 9.99"
                                            
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
                                            value={article.stock}
                                            onChange={handleChange} // Agrega el evento onChange para actualizar el estado
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            min="1"
                                            
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="brand"
                                           className="text-sm font-bold text-gray-900 block dark:text-gray-300"
                                           style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>Brand: </label>
                                    <div className="relative mb-6">
                                        <input
                                            type="text"
                                            name="brand"
                                            id="brand"
                                            value={article.brand}
                                            onChange={handleChange} // Agrega el evento onChange para actualizar el estado
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            
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
                                            
                                        />
                                    </div>
                                </div>
                            </div>


                            <button type="submit"
                                    className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                    style={{backgroundColor: "#4a63ee"}}
                                
                            >Editar articulo

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}