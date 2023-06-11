import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from "react-router-dom";

/**
 * @class
 */
function AddArticle() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showPdfInput, setShowPdfInput] = useState(false);

    /**
     * Maneja el cambio de categoría seleccionada.
     * @param {Object} event - El evento de cambio.
     * @param {string} event.target.value - El valor seleccionado.
     * @returns {void}
     */
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);

        if (category === "Mangas" || category === "Comics") {
            setShowPdfInput(true);
        } else {
            setShowPdfInput(false);
        }
    };

    /**
     * Maneja la acción de agregar un nuevo artículo.
     * @param {Object} e - El evento de envío del formulario.
     * @returns {Promise<void>}
     */
    const handleAdd = async (e) => {
        e.preventDefault();

        // Obtener los valores del formulario
        const title = e.target.nombre.value;
        const description = e.target.description.value;
        const category = e.target.categoria.value;
        const precio = e.target.precio.value;
        const stock = parseInt(e.target.stock.value);
        const brand = e.target.brand.value;
        const image = e.target.photo.files[0];
        // El pdf puede estar o no
        const pdfFile = e.target.elements.pdf && e.target.elements.pdf.files[0];
        const pdf = pdfFile ? pdfFile.name : "";

        try {
            // Comprobar si ya existe un artículo con el mismo título y categoría
            const articlesCollection = collection(db, 'articles');
            const duplicateQuery = query(
                articlesCollection,
                where('title', '==', title),
                where('category', '==', category)
            );
            const duplicateSnapshot = await getDocs(duplicateQuery);

            if (!duplicateSnapshot.empty) {
                setError('Ya existe un artículo con el mismo título y categoría.');
                return;
            }

            // Subir la imagen a Firebase Storage
            const fileRef = ref(storage, `articles/${title}/${image.name}`);
            const snapshot = await uploadBytes(fileRef, image);
            const imageUrl = await getDownloadURL(snapshot.ref);

            // Subir el pdf a Firebase Storage
            const fileRef2 = ref(storage, `pdfs/${title}/${pdf.name}`);
            const snapshot2 = await uploadBytes(fileRef2, pdf);
            const pdfUrl = pdfFile ? await getDownloadURL(snapshot2.ref) : "";

            // Crear el nuevo artículo
            const newArticle = {
                title: title,
                description: description,
                category: category,
                precio: precio,
                stock: stock,
                brand: brand,
                image: imageUrl,
                pdf: pdfUrl
            };

            // Agregar el artículo a la colección "articles"
            await addDoc(articlesCollection, newArticle);
            console.log('Artículo agregado exitosamente');

            navigate('/admin');
        } catch (error) {
            console.error('Error al agregar el artículo', error);
            setError('Ocurrió un error durante el registro.');
        }
    };


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
                            <form className="mt-4" onSubmit={handleAdd}>
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
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Nombre: </label>
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
                                        <label htmlFor="description"
                                            className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Description: </label>
                                        <div className="relative mb-6">
                                            <input
                                                type="text"
                                                name="description"
                                                id="description"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                                placeholder="Es un manga muy bueno..."
                                                pattern="[A-Za-z0-9\s!@#$%^&*()_+=\-[\]{}|\\:;<>,.?/]*"
                                                title="Solo se permiten letras, números y símbolos comunes."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div>
                                        <label
                                            htmlFor="categoria"
                                            className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                        >
                                            Categoria:
                                        </label>
                                        <div className="relative mb-6">
                                            <select
                                                name="categoria"
                                                id="categoria"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                required
                                                onChange={handleCategoryChange}
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
                                        <label htmlFor="precio"
                                            className="block text-sm font-bold text-gray-900 dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Precio: </label>
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
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Stock: </label>
                                        <div className="relative mb-6">
                                            <input
                                                type="text"
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
                                    <div>
                                        <label htmlFor="brand"
                                            className="text-sm font-bold text-gray-900 block dark:text-gray-300"
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Brand: </label>
                                        <div className="relative mb-6">
                                            <input
                                                type="text"
                                                name="brand"
                                                id="brand"
                                                placeholder="Disney"
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
                                            style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}>Imagen del
                                            artículo: </label>
                                        <div className="max-w-2xl mx-auto mb-6">
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

                                {showPdfInput && (
                                    <div className="flex flex-col">
                                        <div className="relative">
                                            <label
                                                htmlFor="pdf"
                                                className="text-sm font-bold mb-2 text-gray-900 block dark:text-gray-300"
                                                style={{ backfaceVisibility: 'hidden', color: '#1e2447' }}
                                            >
                                                PDF:
                                            </label>
                                            <div className="max-w-2xl mx-auto">
                                                <input
                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    id="pdf"
                                                    type="file"
                                                    accept="file/*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button type="submit"
                                    className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                    style={{ backgroundColor: "#4a63ee" }}
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

export default AddArticle;