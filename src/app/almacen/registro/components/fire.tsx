import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    query,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

{/*Se modifico 1ero type Vehicle to Spare*/ }

type Spare = {
    id?: string;
    unitId: string;
    nombre: string;
    categoria: string;
    costo: string;
    cantidad: string;

    [key: string]: string | undefined;
};

{/*Se modifico const vehicles & setVehicles to spare & setSpares*/ }

export default function FireTuto() {
    const [spares, setSpares] = useState<Spare[]>([]);

    {/*Se modifico const newVehicle & setNewVehicle to newSpare & setNewSpare*/ }
    const [newSpare, setNewSpare] = useState<Spare>({
        unitId: "",
        nombre: "",
        categoria: "",
        costo: "",
        cantidad: "",

    });

    {/*Se modifico const editingVehicle & setEditingVehicle to editingSpare & setEditingSpare*/ }
    const [editingSpare, setEditingSpare] = useState<Spare | null>(null);

    {/*Se modifico const addVehicle por addSpare*/ }

    const addSpare = async (e: any) => {
        e.preventDefault();
        if (Object.values(newSpare).every((field) => field !== "")) {
            await addDoc(collection(db, "spares"), newSpare);
            setNewSpare({
                unitId: "",
                nombre: "",
                categoria: "",
                costo: "",
                cantidad: "",

            });
        }
    };

    {/*Se modifico const updateVehicle por updateSpare*/ }
    const updateSpare = async (e: any) => {
        e.preventDefault();
        if (editingSpare && editingSpare.id) {
            await updateDoc(doc(db, "spares", editingSpare.id), editingSpare);
            setEditingSpare(null);
        }
    };

    {/*Se modifico vehiclesArr por sparesArr*/ }
    useEffect(() => {
        const q = query(collection(db, "spares"));
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let sparesArr: Spare[] = [];
            querySnapshot.forEach((doc) => {
                sparesArr.push({ ...doc.data(), id: doc.id } as Spare);
            });
            setSpares(sparesArr);
        });
        return () => unSubscribe();
    }, []);

    {/*Se modifico deleteVehicle por deleteSpare*/ }
    const deleteSpare = async (id: string) => {
        await deleteDoc(doc(db, "spares", id));
    };


    {/*["unitId", "modelo", "nombre", "año", "placa", "estado", "capacidad", "color"]*/ }

    const spareKeys = ["unitId", "nombre", "categoria", "costo", "cantidad"];


    {/*Se modificó editVehicle por editSpare*/ }
    const editSpare = (spare: Spare) => {
        setEditingSpare(spare);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
            <div className="z-10 w-full max-w5xl items-center justify-between font-mono text-sm">
                <h1 className="text-4xl p-4 text-center">REGISTRAR</h1>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-2xl mb-4 text-center">Agregar nuevos repuestos</h2>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="col-span-2"> {/* Div contenedor de los campos del formulario */}
                            {spareKeys.map((key) => (
                                <div key={key} className="mb-4"> {/* Agregamos una clase "mb-4" para dar margen inferior entre los campos */}
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                                        {`Ingrese ${key}`}
                                    </label>
                                    <input
                                        id={key}
                                        value={editingSpare ? editingSpare[key] : newSpare[key]}
                                        onChange={(e) =>
                                            editingSpare
                                                ? setEditingSpare({ ...editingSpare, [key]: e.target.value })
                                                : setNewSpare({ ...newSpare, [key]: e.target.value })
                                        }
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2"> {/* Div contenedor del botón */}
                            <button
                                onClick={editingSpare ? updateSpare : addSpare}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                style={{ width: '150px' }}
                                type="submit"
                            >
                                {editingSpare ? 'Actualizar' : 'Agregar'}
                            </button>
                        </div>
                    </form>

                    <h2 className="text-2xl mt-8 mb-4 text-center">Tabla de Repuestos</h2>
                    <ul className="space-y-4">
                        <li className="border rounded-lg px-4 py-2 flex justify-between">
                            {spareKeys.map((key) => (
                                <span key={key} className="font-bold flex-grow">{key}</span>
                            ))}
                            <span className="font-bold w-32 text-center">Acciones</span>
                        </li>
                        {spares.map((spare, id) => (
                            <li
                                key={id}
                                className="border rounded-lg px-4 py-2 flex justify-between"
                            >
                                {spareKeys.map((key) => (
                                    <span key={key} className="flex-grow">{spare[key] || ""}</span>
                                ))}
                                <div className="flex space-x-4 items-center">
                                    {spare.id && (
                                        <>
                                            <button
                                                onClick={() => spare.id && deleteSpare(spare.id)}
                                                className="text-red-500 hover:text-red-700 p-2 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                <AiFillDelete size={20} />
                                            </button>
                                            <button
                                                onClick={() => editSpare(spare)}
                                                className="text-green-500 hover:text-green-700 p-2 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                <AiFillEdit size={20} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
