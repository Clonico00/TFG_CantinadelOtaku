import React, {useState} from "react";

export function Carrito() {
    const [quantity, setQuantity] = useState(2); // Valor inicial
    const provincias = [
        'Álava',
        'Albacete',
        'Alicante',
        'Almería',
        'Asturias',
        'Ávila',
        'Badajoz',
        'Barcelona',
        'Burgos',
        'Cáceres',
        'Cádiz',
        'Cantabria',
        'Castellón',
        'Ciudad Real',
        'Córdoba',
        'Cuenca',
        'Gerona',
        'Granada',
        'Guadalajara',
        'Guipúzcoa',
        'Huelva',
        'Huesca',
        'Islas Baleares',
        'Jaén',
        'La Coruña',
        'La Rioja',
        'Las Palmas',
        'León',
        'Lérida',
        'Lugo',
        'Madrid',
        'Málaga',
        'Murcia',
        'Navarra',
        'Orense',
        'Palencia',
        'Pontevedra',
        'Salamanca',
        'Santa Cruz de Tenerife',
        'Segovia',
        'Sevilla',
        'Soria',
        'Tarragona',
        'Teruel',
        'Toledo',
        'Valencia',
        'Valladolid',
        'Vizcaya',
        'Zamora',
        'Zaragoza'
    ];

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    return (
        <>
            <div className=" pt-20 mb-24 overflow-auto">
                <h2 className="text-center text-2xl font-extrabold mb-12 mt-1"
                    style={{backfaceVisibility: "hidden", color: "#1e2447"}}>Carrito</h2>
                <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img
                                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="product-image1"
                                className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900" style={{backfaceVisibility: "hidden", color: "#1e2447"}}>
                                        Nike Air Max 2019
                                    </h2>
                                    <span className="text-sm title-font text-slate-400 tracking-widest" >BRAND NAME</span>
                                    <p className="text-sm title-font font-bold mt-8" style={{backfaceVisibility: "hidden", color: "#4a63ee"}} >259.000 $</p>

                                </div>

                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                    <div className="flex items-center space-x-4 ml-24 sm:justify-end " style={{order:2}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash hover:text-red-500" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                            <path
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                        </svg>
                                    </div>
                                    <div className="flex items-center border-gray-100 sm:justify-start  ">
                                        <span
                                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            onClick={handleDecrease}
                                        >
                                          {" "}-{" "}
                                        </span>
                                        <input
                                            className="h-8 w-12 border bg-white text-center text-xs outline-none"
                                            type="text"
                                            value={quantity}
                                            min={1}
                                            readOnly={true}
                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                        />
                                        <span
                                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            onClick={handleIncrease}
                                        >
                                          {" "}+{" "}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img
                                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                                alt="product-image2"
                                className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900" style={{backfaceVisibility: "hidden", color: "#1e2447"}}>
                                        Nike Air Max 2019
                                    </h2>
                                    <span className="text-sm title-font text-slate-400 tracking-widest">BRAND NAME</span>
                                    <p className="text-sm title-font font-bold mt-8 sm:text-md" style={{backfaceVisibility: "hidden", color: "#4a63ee"}} >259.000 $</p>

                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                    <div className="flex items-center space-x-4 ml-24 sm:justify-end " style={{order:2}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash hover:text-red-500" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                            <path
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                        </svg>
                                    </div>
                                    <div className="flex items-center border-gray-100 sm:justify-start  ">
                                        <span
                                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            onClick={handleDecrease}
                                        >
                                          {" "}-{" "}
                                        </span>
                                        <input
                                            className="h-8 w-12 border bg-white text-center text-xs outline-none"
                                            type="text"
                                            value={quantity}
                                            min={1}
                                            readOnly={true}
                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                        />
                                        <span
                                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            onClick={handleIncrease}
                                        >
                                          {" "}+{" "}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sub total */}
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <h3 className="text-center text-2xl font-extrabold mb-2 mt-1"
                                style={{backfaceVisibility: "hidden", color: "#1e2447"}}>Resumen</h3>
                        </div>
                        <hr/>
                        <div className="mb-2 flex justify-between mt-4">
                            <label htmlFor="calle"
                                   className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}
                            >
                                Calle:
                            </label>
                            <div className="relative mb-6">
                                <input type="text" name="calle" id="calle"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       required
                                       placeholder="Calle Recogidas"

                                />
                            </div>
                        </div>
                        <div className="mb-2 flex justify-between mt-2">
                            <label htmlFor="piso"
                                   className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}
                            >
                                Numero/Piso/Letra:
                            </label>
                            <div className="relative mb-6">
                                <input type="text" name="piso" id="piso"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       required
                                       placeholder="Numero 11 5F"

                                />
                            </div>
                        </div>
                        <div className="mb-2 flex justify-between mt-2">
                            <label htmlFor="provincia"
                                   className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>
                                Provincia:
                            </label>
                            <div className="relative mb-6">
                                <select name="provincia" id="provincia"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required>
                                    {provincias.map((provincia, index) => (
                                        <option key={index} value={provincia}>{provincia}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between mt-2">
                            <label htmlFor="cp"
                                   className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}
                            >
                                Codigo Postal:
                            </label>
                            <div className="relative mb-6">
                                <input type="text" name="cp" id="cp"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       required
                                       placeholder="18001"

                                />
                            </div>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">$129.99</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">$4.99</p>
                        </div>
                        <hr className="my-4"/>
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button
                            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}