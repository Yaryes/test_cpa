import { useForm } from "react-hook-form"
export const FormSimple = () => {
    const { register, handleSubmit, formState: { errors }, watch, setValue,reset } = useForm({
            defaultValue:{primerNombre:"Pablo", correo:""}
        });
    console.log(errors)
    return (
        <>
            <form onSubmit={handleSubmit((data) => {
                console.log(data) 
                alert('Enviando Datos....')
                //LOGICA DEL ENVIO DE DATOS 
                reset()
                })}>
                <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                            <div className="mx-auto">
                                {/* HEADER DEL FORMULARIO */}
                                <div className="flex items-center space-x-4">
                                    <div className="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center text-2xl font-mono">
                                        <img alt="ColeParro" src="/cpa.png" />
                                    </div>
                                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 className="leading-relaxed">Formulario de Registros</h2>
                                        <p className="text-sm text-gray-500 font-normal leading-relaxed">Este es un formujlario de test de registros, validando los datos ingresados.</p>
                                    </div>
                                </div>
                                {/* BODY DEL FORMULARIO */}
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        {/* INPUT RUT */}
                                        <div className="flex flex-col -mt-3">
                                            <label className="leading-loose">Rut:</label>
                                            {/* INPUT DEL RUT - VALIDAR REGISTRO*/}
                                            <input
                                                type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="Ingrese su Rut, Ej: 18434349-k"
                                                {...register("rut", {
                                                    required: {
                                                        value: true, message: "El Rut el Obligatorio"
                                                    },
                                                    pattern:{
                                                        value:/^[0-9]{7,8}-[0-9Kk]$/, message: "Por favor ingrese un Rut válido"
                                                    },
                                                })}
                                            />
                                            <span className="text-sm mt-2 font-serif text-gray-400 ">El Rut debe ir sin puntos y con guion</span>
                                            {errors.rut && <span className="text-sm text-red-900">{errors.rut.message}</span>}
                                        </div>
                                        {/* INPUT NOMBRES */}
                                        <div className="flex flex-col">
                                            <label className="-mt-2 -mb-2">Nombres:</label>
                                        </div>
                                        <div className="flex">
                                            {/* PONER UN ICONO PARA MOSTRAR EL TERCER NOMBRE EN CASO DE TENERLO */}
                                            <input
                                                type="text"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900  w-1/2 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="Ingrese su primer nombre"
                                                // CON HOOK-FORM EL PRIMER PARAMETRO QUE SE LE ENTREGA AL METODO ES EL VALOR DE LA VARIABLE 
                                                // Y LUEGO SE PUEDE ENTREGAR OPCIONES DE VALIDACIÓN!! POR EJEMPLO QUE SEA REQUERIDO 
                                                {...register("primerNombre", {
                                                    required: {
                                                        value: true, message: "El Primer Nombre es Obligatorio"
                                                    },
                                                    minLength: {
                                                        value: 2, message: "El Nombre no puede ser de un solo caracter"
                                                    },
                                                    maxLength: {
                                                        value: 20, message: "Demaciado caracteres"
                                                    },
                                                })}
                                            />
                                            <input
                                                type="text"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-1/2 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="Ingrese su segundo nombre "
                                                {...register("segundoNombre", {
                                                    minLength: {
                                                        value: 2, message: "El Segundo Nombre no puede ser un solo caracter"
                                                    },
                                                    maxLength: {
                                                        value: 50, message: "Demaciado caracteres"
                                                    },
                                                })}
                                            />
                                        </div>
                                        {/* MENSAJE DE ERRORES DE LOS INPUT NOMBRES */}
                                        <div className="flex">
                                            <div className="w-1/2 -mt-5">
                                                {errors.primerNombre && <span className="text-sm text-red-900">{errors.primerNombre.message}</span>}
                                            </div>
                                            <div className="w-1/2 -mt-5">
                                                {errors.segundoNombre && <span className="text-sm text-red-900">{errors.segundoNombre.message}</span>}
                                            </div>
                                        </div>
                                        {/* INPUT APELLIDO */}
                                        <div className="flex flex-col">
                                            <label className="leading-loose -mt-4">Apellidos: </label>
                                            <input
                                                type="text"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="Ingrese sus apellidos"
                                                {...register("apellidos", {
                                                    required: {
                                                        value: true, message: "El Apellido es Obligatorio"
                                                    },
                                                    minLength: {
                                                        value: 2, message: "El Apellido no puede ser de 1 caracter"
                                                    },
                                                    maxLength: {
                                                        value: 50, message: "Demaciado caracteres"
                                                    },
                                                })}
                                            />
                                            <div>
                                                {errors.apellidos && <span className="text-sm text-red-900">{errors.apellidos.message}</span>}
                                            </div>
                                        </div>
                                        {/* INPUT FECHA NACIMIENTO */}
                                        <div className="flex items-center space-x-4">
                                            <div className="flex flex-col w-1/2">
                                                <label className="leading-loose">Fecha de Nacimiento</label>
                                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                                    <input
                                                        type="date"
                                                        className="pr-4 pl-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full  sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                        placeholder="25/02/2020"
                                                        {...register("fechaNacimiento", {
                                                            required: {
                                                                value: true, message: "La Fecha de Nacimiento es Obligatorio"
                                                            },
                                                            // CREAMOS UNA FUNCION PARA CREAR UNA LOGICA EN LA VALIDACION
                                                            validate: (value) => {
                                                                // console.log(value)
                                                                const fechaNacimiento = new Date(value)
                                                                const fechaActual = new Date()
                                                                const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
                                                                console.log(edad)
                                                                return edad >= 18 || "Debe ser mayor de edad";
                                                            },
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            {/* INPUT GENERO */}
                                            <div className="flex flex-col w-1/2">
                                                <label className="leading-loose ml-2">Genero</label>
                                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                                    <select className=" ml-2 pl-2 py-2 border focus:ring-gray-500 focus:border-gray-900 
                                                        w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                        placeholder="" {...register("genero", {
                                                            required: {
                                                                value: true,
                                                                message: "Selecione su Genero"
                                                            },
                                                        })}>
                                                        <option value="" defaultValue >Su genero es</option>
                                                        <option value="masculino">Masculino</option>
                                                        <option value="femenino">Femenino</option>
                                                        <option value="no_binario">No Binario</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ERRORES DE INPUT */}
                                        <div className="flex">
                                            <div className="w-1/2 -mt-5">
                                                {
                                                    errors.fechaNacimiento && <span className="text-sm text-red-900">{errors.fechaNacimiento.message}</span>
                                                }
                                            </div>
                                            <div className="w-1/2 -mt-5">
                                                {
                                                    errors.genero && <span className="text-sm text-red-900">{errors.genero.message}</span>
                                                }
                                            </div>
                                        </div>
                                        {/* INPUTS DIRECCION Y NACIONALIDAD */}
                                        <div className="flex items-center space-x-4">
                                            <div className="flex flex-col w-1/2">
                                                <label className="leading-loose">Direccion</label>
                                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                                    <input
                                                        type="text"
                                                        className="pr-4 pl-2 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full
                                                        sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                        placeholder="Ingrese su dirección" {...register("direccion",{
                                                            required: {
                                                                value: true,
                                                                message: "La Direccion Obligatorio"
                                                            }, 
                                                            pattern: { 
                                                                value: /^[a-zA-Z0-9\s,'-]*$/,
                                                                message: "La No es Valida"},
                                                         })} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-1/2">
                                                <label className="leading-loose">Nacionalidad</label>
                                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                                    <select className="pr-4 pl-2 py-2 border focus:ring-gray-500 focus:border-gray-900 
                                                        w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                        placeholder=""  {...register("nacionalidad", {
                                                            required: {
                                                                value: true,
                                                                message: "Selecione su Nacionalidad"
                                                            },
                                                        })}>
                                                        <option value="" defaultValue>Seleccione su nacionalidad</option>                                                        
                                                        <option value="Chileno">Chileno</option>
                                                        <option value="Argentino">Argentino</option>
                                                        <option value="Otros">Otros</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ERRORES DE INPUT */}
                                        <div className="flex">
                                            <div className="w-1/2 -mt-5">
                                                {
                                                    errors.direccion && <span className="text-sm text-red-900">{errors.direccion.message}</span>
                                                }
                                            </div>
                                            <div className="w-1/2 -mt-5">
                                                {
                                                    errors.nacionalidad && <span className="text-sm text-red-900">{errors.nacionalidad.message}</span>
                                                }
                                            </div>
                                        </div>
                                        {/* INPUT CORREO*/}
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Correo Electronico</label>
                                            <input
                                                type="email"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full 
                                                sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="carlos@gmail.com" {...register("correoElectronico", {
                                                    required: {
                                                        value: true,
                                                        message: "El Correo Electronico es Obligatorio"
                                                    },
                                                    minLength: {
                                                        value: 2,
                                                        message: "El Correo Electronico no puede ser de un solo caracter"
                                                    },
                                                    pattern: {
                                                        value: /([a-zA-Z0-9]([^ @&%$\\\/()=?¿!.,:;]?|\d?)+[a-zA-Z0-9][\.]){1,2}/,
                                                        message: "El Correo Electronico no el Valido    "
                                                    }
                                                })}
                                            />
                                                {
                                                    errors.correoElectronico && <span className="text-sm text-red-900">{errors.correoElectronico.message}</span>
                                                }
                                        </div>
                                        {/* INPUT TELEFONO*/}
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Telefono</label>
                                            <input
                                                type="number"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full 
                                                sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="56936269401" {...register("fono",{
                                                    required: {
                                                        value: true, message: "El Numero de Telefono es Obligatorio"
                                                    },
                                                    minLength: {
                                                        value: 9,
                                                        message: "El Telefono no es es valido"
                                                    },
                                                    pattern: {
                                                        value: /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/,
                                                        message: "El Telefono no es valido"
                                                    }
                                                })}
                                            />
                                             {
                                                    errors.fono && <span className="text-sm text-red-900">{errors.fono.message}</span>
                                                }
                                        </div>
                                    </div>
                                     {/* INPUT FILEE*/}
                                     <div className="flex flex-col">
                                            <label className="leading-loose">Subir Archivo</label>
                                            <input 
                                                type="file"
                                                placeholder="Subir archivo"
                                                onChange={(e) =>{
                                                    setValue('fotoUsuario', e.target.files[0])
                                                }}
                                            />
                                                
                                        </div>
                                    {/* BOTON */}
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button
                                            className="bg-blue-500 flex justify-center items-center w-full 
                                                h-8 text-white px-4 py-3 rounded-md focus:outline-none"
                                            type="submit"
                                        >Enviar Registro
                                        </button>
                                    </div>
                                    <pre>
                                        {JSON.stringify(watch(),null, 3)}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
