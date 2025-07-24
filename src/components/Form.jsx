import { useState, useEffect } from "react";

export const Form = ({data, onCancel, onSave}) => {

    const [inputValue, setInputValue] = useState({id: null, nombre: '', puesto: '', salario: ''})

    useEffect(() => {
        if(!data){
            setInputValue({
                id: null, 
                nombre: '', 
                puesto: '', 
                salario: ''
            })
        } else {
            setInputValue(
                {
                    id: data.id,
                    nombre: data.nombre.trim(),
                    puesto: data.puesto.trim(),
                    salario: data.salario
                }
            )
        }

    }, [data])

    const handleSave = (e) => {
        e.preventDefault();
        if(!inputValue.nombre || !inputValue.puesto || !inputValue.salario){
            alert("Todos los campos son obligatorios");
            return;
        }
        onSave(inputValue);
        console.log("Simulando guardado de cliente: ", inputValue)
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue, [name]: value
        })
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center text-gray-400">
            <div className="flex items-center justify-around flex-col gap-4 bg-gray-900 px-10 py-4 rounded-xl text-lg">
                <h2 className="text-2xl font-bold">{!data ? "Nuevo" : "Editar"} empleado</h2>
                <form className="flex flex-col justify-around  w-full">
                    <label>{!data ? "Nuevo" : data.id}</label>
                    <label>Nombre: </label>
                    <input
                        className="form-save-input" 
                        type="text" 
                        name="nombre"
                        value={inputValue.nombre}
                        onChange={handleOnChange}
                        />

                    <label>Puesto: </label>
                    <input
                        className="form-save-input"
                        type="text" 
                        name="puesto"
                        value={inputValue.puesto}
                        onChange={handleOnChange}
                        />
                        

                    <label>Salario: </label>
                    <input 
                        className="form-save-input"
                        type="number" 
                        name="salario"
                        value={inputValue.salario}
                        onChange={handleOnChange}
                        />
                </form>
                <div className="flex justify-around w-full">
                    <button className="form-save-btn bg-green-600 hover:bg-green-700"
                        onClick={handleSave}
                    >Guardar</button>
                    <button className="form-save-btn bg-red-600 hover:bg-red-700"
                        onClick={onCancel}
                    >Cancelar</button>
                </div>
            </div>
        </div>
    );
};