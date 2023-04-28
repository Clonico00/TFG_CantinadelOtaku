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
    const provinciasConCiudades = [
        {
            provincia: 'Álava',
            ciudades: ['Vitoria-Gasteiz', 'Amurrio', 'Laudio', 'Salvatierra', 'Ayala']
        },
        {
            provincia: 'Albacete',
            ciudades: ['Albacete', 'Hellín', 'Villarrobledo', 'Almansa', 'La Roda']
        },
        {
            provincia: 'Alicante',
            ciudades: ['Alicante', 'Elche', 'Torrevieja', 'Orihuela', 'Benidorm']
        },
        {
            provincia: 'Almería',
            ciudades: ['Almería', 'Roquetas de Mar', 'Adra', 'El Ejido', 'Huércal-Overa']
        },
        {
            provincia: 'Asturias',
            ciudades: ['Oviedo', 'Gijón', 'Avilés', 'Siero', 'Langreo']
        },
        {
            provincia: 'Ávila',
            ciudades: ['Ávila', 'Arévalo', 'El Tiemblo', 'Las Navas del Marqués', 'Cebreros']
        },
        {
            provincia: 'Badajoz',
            ciudades: ['Badajoz', 'Mérida', 'Don Benito', 'Almendralejo', 'Zafra']
        },
        {
            provincia: 'Barcelona',
            ciudades: ['Barcelona', 'L Hospitalet de Llobregat', 'Badalona', 'Sabadell', 'Terrassa']
        },
        {
            provincia: 'Burgos',
            ciudades: ['Burgos', 'Miranda de Ebro', 'Aranda de Duero', 'Briviesca', 'Lerma']
        },
        {
            provincia: 'Cáceres',
            ciudades: ['Cáceres', 'Plasencia', 'Navalmoral de la Mata', 'Trujillo', 'Coria']
        },
        {
            provincia: 'Cádiz',
            ciudades: ['Cádiz', 'Jerez de la Frontera', 'Algeciras', 'San Fernando', 'El Puerto de Santa María']
        },
        {
            provincia: 'Cantabria',
            ciudades: ['Santander', 'Torrelavega', 'Camargo', 'Castro Urdiales', 'Santa Cruz de Bezana']
        },
        {
            provincia: 'Castellón',
            ciudades: ['Castellón de la Plana', 'Villarreal', 'Burriana', 'Vinaròs', 'Benicarló']
        },
        {
            provincia: 'Ciudad Real',
            ciudades: ['Ciudad Real', 'Puertollano', 'Valdepeñas', 'Tomelloso', 'Alcázar de San Juan']
        },
        {
            provincia: 'Córdoba',
            ciudades: ['Córdoba', 'Lucena', 'Puente Genil', 'Montilla', 'Palma del Río']
        },
        {
            provincia: 'Cuenca',
            ciudades: ['Cuenca', 'Tarancón', 'San Clemente', 'Mota del Cuervo', 'Las Pedroñeras']
        },
        {
            provincia: 'Gerona',
            ciudades: [
                'Gerona',
                'Figueras',
                'Blanes',
                'Lloret de Mar',
                'Palamós'
            ]
        },
        {
            provincia: 'Granada',
            ciudades: [
                'Granada',
                'Baza',
                'Guadix',
                'Loja',
                'Motril'
            ]
        },
        {
            provincia: 'Guadalajara',
            ciudades: [
                'Guadalajara',
                'Azuqueca de Henares',
                'Sigüenza',
                'Molina de Aragón',
                'Marchamalo'
            ]
        },
        {
            provincia: 'Guipúzcoa',
            ciudades: [
                'San Sebastián',
                'Irún',
                'Éibar',
                'Hernani',
                'Oñati'
            ]
        },
        {
            provincia: 'Huelva',
            ciudades: [
                'Huelva',
                'Almonte',
                'Ayamonte',
                'Isla Cristina',
                'Moguer'
            ]
        },
        {
            provincia: 'Huesca',
            ciudades: [
                'Huesca',
                'Barbastro',
                'Monzón',
                'Sabiñánigo',
                'Jaca'
            ]
        },
        {
            provincia: 'Islas Baleares',
            ciudades: [
                'Palma de Mallorca',
                'Ibiza',
                'Manacor',
                'Mao',
                'Inca'
            ]
        },
        {
            provincia: 'Jaén',
            ciudades: [
                'Jaén',
                'Andújar',
                'Linares',
                'Úbeda',
                'La Carolina'
            ]
        },
        {
            provincia: 'La Coruña',
            ciudades: [
                'La Coruña',
                'Ferrol',
                'Santiago de Compostela',
                'Betanzos',
                'Cee'
            ]
        },
        {
            provincia: 'La Rioja',
            ciudades: [
                'Logroño',
                'Calahorra',
                'Haro',
                'Alfaro',
                'Nájera'
            ]
        },
        {
            provincia: 'Las Palmas',
            ciudades: [
                'Las Palmas de Gran Canaria',
                'Telde',
                'San Bartolomé de Tirajana',
                'Arrecife',
                'Santa Lucía de Tirajana'
            ]
        },
        {
            provincia: 'León',
            ciudades: [
                'León',
                'Ponferrada',
                'San Andrés del Rabanedo',
                'Villaquilambre',
                'Cistierna'
            ]
        },
        {
            provincia: 'Lérida',
            ciudades: [
                'Lérida',
                'Mollerusa',
                'Tárrega',
                'Alcarrás',
                'Solsona'
            ]
        },
        {
            provincia: 'Lugo',
            ciudades: [
                'Lugo',
                'Villalba',
                'Monforte de Lemos',
                'Ribadeo',
                'Foz'
            ]
        },
        {
            provincia: 'Madrid',
            ciudades: [
                'Madrid',
                'Móstoles',
                'Alcalá de Henares',
                'Fuenlabrada',
                'Leganés'
            ]
        },
        {
            provincia: 'Málaga',
            ciudades: [
                'Málaga',
                'Marbella',
                'Benalmádena',
                'Torremolinos',
                'Fuengirola'
            ]
        },
        {
            provincia: 'Murcia',
            ciudades: [
                'Murcia',
                'Cartagena',
                'Lorca',
                'Molina de Segura',
                'Alcantarilla'
            ]
        },
        {
            provincia: 'Navarra',
            ciudades: [
                'Pamplona',
                'Tudela',
                'Barañáin',
                'Estella-Lizarra',
                'Zizur Mayor'
            ]
        },
        {
            provincia: 'Orense',
            ciudades: [
                'Orense',
                'Barbadás',
                'Verín',
                'Carballino',
                'Ribadavia'
            ]
        },
        {
            provincia: 'Palencia',
            ciudades: [
                'Palencia',
                'Aguilar de Campoo',
                'Guardo',
                'Dueñas',
                'Venta de Baños'
            ]
        },
        {
            provincia: 'Pontevedra',
            ciudades: [
                'Vigo',
                'Pontevedra',
                'Vilagarcía de Arousa',
                'Redondela',
                'Marín'
            ]
        },
        {
            provincia: 'Salamanca',
            ciudades: [
                'Salamanca',
                'Béjar',
                'Ciudad Rodrigo',
                'Villares de la Reina',
                'Santa Marta de Tormes'
            ]
        },
        {
            provincia: 'Santa Cruz de Tenerife',
            ciudades: [
                'Santa Cruz de Tenerife',
                'San Cristóbal de La Laguna',
                'Arona',
                'La Orotava',
                'Los Realejos'
            ]
        },
        {
            provincia: 'Segovia',
            ciudades: [
                'Segovia',
                'Cuéllar',
                'Cantalejo',
                'San Ildefonso',
                'Carbonero el Mayor'
            ]
        },
        {
            provincia: 'Sevilla',
            ciudades: [
                'Sevilla',
                'Dos Hermanas',
                'Alcalá de Guadaíra',
                'Utrera',
                'Mairena del Aljarafe'
            ]
        },
        {
            provincia: 'Soria',
            ciudades: [
                'Soria',
                'Almazán',
                'San Esteban de Gormaz',
                'Golmayo',
                'Ólvega'
            ]
        },
        {
            provincia: 'Tarragona',
            ciudades: [
                'Tarragona',
                'Reus',
                'Valls',
                'Cambrils',
                'Salou'
            ]
        },
        {
            provincia: 'Teruel',
            ciudades: [
                'Teruel',
                'Alcañiz',
                'Calamocha',
                'Andorra',
                'Utrillas'
            ]
        },
        {
            provincia: 'Toledo',
            ciudades: [
                'Toledo',
                'Talavera de la Reina',
                'Illescas',
                'Seseña',
                'Sonseca'
            ]
        },
        {
            provincia: 'Valencia',
            ciudades: [
                'Valencia',
                'Gandía',
                'Torrent',
                'Sagunto',
                'Paterna'
            ]
        },
        {
            provincia: 'Valladolid',
            ciudades: [
                'Valladolid',
                'Medina del Campo',
                'Laguna de Duero',
                'Arroyo de la Encomienda',
                'Tordesillas'
            ]
        },
        {
            provincia: 'Vizcaya',
            ciudades: [
                'Bilbao',
                'Barakaldo',
                'Getxo',
                'Portugalete',
                'Durango'
            ]
        },
        {
            provincia: 'Zamora',
            ciudades: [
                'Zamora',
                'Benavente',
                'Morales del Vino',
                'Puebla de Sanabria',
                'Villaralbo'
            ]
        },
        {
            provincia: 'Zaragoza',
            ciudades: [
                'Zaragoza',
                'Calatayud',
                'Ejea de los Caballeros',
                'Utebo',
                'Tarazona'
            ]
        }

    ]

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
                                    <h2 className="text-lg font-bold text-gray-900"
                                        style={{backfaceVisibility: "hidden", color: "#1e2447"}}>
                                        Nike Air Max 2019
                                    </h2>
                                    <span
                                        className="text-sm title-font text-slate-400 tracking-widest">BRAND NAME</span>
                                    <p className="text-sm title-font font-bold mt-8"
                                       style={{backfaceVisibility: "hidden", color: "#4a63ee"}}>259.000 $</p>

                                </div>

                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                    <div className="flex items-center space-x-4 ml-24 sm:justify-end "
                                         style={{order: 2}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash hover:text-red-500"
                                             viewBox="0 0 16 16">
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
                                    <h2 className="text-lg font-bold text-gray-900"
                                        style={{backfaceVisibility: "hidden", color: "#1e2447"}}>
                                        Nike Air Max 2019
                                    </h2>
                                    <span
                                        className="text-sm title-font text-slate-400 tracking-widest">BRAND NAME</span>
                                    <p className="text-sm title-font font-bold mt-8 sm:text-md"
                                       style={{backfaceVisibility: "hidden", color: "#4a63ee"}}>259.000 $</p>

                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                    <div className="flex items-center space-x-4 ml-24 sm:justify-end "
                                         style={{order: 2}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash hover:text-red-500"
                                             viewBox="0 0 16 16">
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
                        <div className="mb-2 flex justify-between mt-4 flex-col">
                            <label htmlFor="calle"
                                   className="text-sm font-bold text-gray-900  block mb-2 dark:text-gray-300"
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
                        <div className="mb-2 flex justify-between mt-2 flex-col">
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
                        <div className="mb-2 flex justify-between mt-2 flex-col">
                            <label htmlFor="provincia"
                                   className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>
                                Provincia:
                            </label>
                            <div className="relative mb-6">
                                <select name="provincia" id="provincia"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        onChange={(e) => {
                                            const provinciaSeleccionada = e.target.value;
                                            const ciudadesDeProvincia = provinciasConCiudades[provinciaSeleccionada];
                                            const opcionesCiudades = ciudadesDeProvincia.map((ciudad, index) => (
                                                <option key={index} value={ciudad}>{ciudad}</option>
                                            ));
                                            document.getElementById('ciudad').innerHTML = '';
                                            document.getElementById('ciudad').appendChild(opcionesCiudades);
                                        }}>
                                    {provincias.map((provincia, index) => (
                                        <option key={index} value={provincia}>{provincia}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-2 flex justify-between mt-2 flex-col">
                            <label htmlFor="ciudad"
                                   className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300"
                                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>
                                Ciudad:
                            </label>
                            <div className="relative mb-6">
                                <select name="ciudad" id="ciudad"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required>
                                </select>
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between mt-2 flex-col">
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
                        <hr className="my-4"/>
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">$129.99</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700 ">Shipping</p>
                            <p className="text-gray-700">$4.99</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <p className="text-xl font-bold" style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>
                                Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold"
                                   style={{backfaceVisibility: 'hidden', color: '#1e2447'}}>
                                    $134.98</p>
                            </div>
                        </div>
                        <button
                            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                            style={{backfaceVisibility: 'hidden', backgroundColor: '#4a63ee'}}>
                            Realizar Compra
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}