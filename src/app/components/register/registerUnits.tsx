import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  query,
  updateDoc,
} from "firebase/firestore";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillCheckCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FiSearch } from 'react-icons/fi';

type Vehicle = {
  id?: string;
  unitId: string;
  Modelo: string;
  Nombre: string;
  Año: string;
  Placa: string;
  Estado: string;
  Capacidad: string;
  Color: string;
  [key: string]: string | undefined;
};

export default function Register() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [newVehicle, setNewVehicle] = useState<Vehicle>({
    unitId: "",
    Modelo: "",
    Nombre: "",
    Año: "",
    Placa: "",
    Estado: "",
    Capacidad: "",
    Color: "",
  });

  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [tableEditingVehicle, setTableEditingVehicle] =
    useState<Vehicle | null>(null);

  const [searchTerm, setSearchTerm] = useState('');

  const addVehicle = async (e: any) => {
    e.preventDefault();
    if (Object.values(newVehicle).every((field) => field !== "")) {
      await addDoc(collection(db, "vehicles"), newVehicle);
      setNewVehicle({
        unitId: "",
        Modelo: "",
        Nombre: "",
        Año: "",
        Placa: "",
        Estado: "",
        Capacidad: "",
        Color: "",
      });
    }
  };

  const updateVehicle = async (e: any) => {
    e.preventDefault();
    if (editingVehicle && editingVehicle.id) {
      confirmAlert({
        title: "Confirmación de actualización",
        message: "¿Estás seguro de que deseas actualizar este vehículo?",
        buttons: [
          {
            label: "Sí",
            onClick: async () => {
              if (typeof editingVehicle.id === "string") {
                await updateDoc(
                  doc(db, "vehicles", editingVehicle.id),
                  editingVehicle
                );
                setEditingVehicle(null);
              }
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
      });
    }
  };

  const startTableEditingVehicle = (vehicle: Vehicle) => {
    setTableEditingVehicle(vehicle);
  };

  const cancelTableEditingVehicle = () => {
    setTableEditingVehicle(null);
  };

  const updateTableVehicle = async () => {
    if (tableEditingVehicle && tableEditingVehicle.id) {
      confirmAlert({
        title: "Confirmación de actualización",
        message: "¿Estás seguro de que deseas actualizar este vehículo?",
        buttons: [
          {
            label: "Sí",
            onClick: async () => {
              if (typeof tableEditingVehicle.id === "string") {
                await updateDoc(
                  doc(db, "vehicles", tableEditingVehicle.id),
                  tableEditingVehicle
                );
                setTableEditingVehicle(null);
              }
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
      });
    }
  };

  useEffect(() => {
    const q = query(collection(db, "vehicles"));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      let vehiclesArr: Vehicle[] = [];
      querySnapshot.forEach((doc) => {
        vehiclesArr.push({ ...doc.data(), id: doc.id } as Vehicle);
      });
      setVehicles(vehiclesArr);
    });
    return () => unSubscribe();
  }, []);

  const deleteVehicle = (id: string) => {
    confirmAlert({
      title: "Confirmación de eliminación",
      message: "¿Estás seguro de que deseas eliminar este vehículo?",
      buttons: [
        {
          label: "Sí",
          onClick: async () => await deleteDoc(doc(db, "vehicles", id)),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const vehicleKeys = [
    "unitId",
    "Modelo",
    "Nombre",
    "Año",
    "Placa",
    "Estado",
    "Capacidad",
    "Color",
  ];

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.Modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.Placa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 sm:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <h1 className="text-4xl p-4 text-center">Registro de unidades</h1>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 text-center">Agregar nueva unidad</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vehicleKeys.map((key, index) => (
              <div key={`input-${index}-${key}`}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={key}
                >
                  {` ${key}`}
                </label>
                <input
                  id={key}
                  value={editingVehicle ? editingVehicle[key] : newVehicle[key]}
                  onChange={(e) =>
                    editingVehicle
                      ? setEditingVehicle({
                          ...editingVehicle,
                          [key]: e.target.value,
                        })
                      : setNewVehicle({ ...newVehicle, [key]: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
            ))}
            <button
              onClick={editingVehicle ? updateVehicle : addVehicle}
              className="col-span-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {editingVehicle ? "Actualizar" : "Agregar"}
            </button>
          </form>
          <h2 className="text-2xl mt-8 mb-4 text-center">Tabla de Unidades</h2>

          <div className="relative">
           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
           <input
    type="text"
    placeholder="Buscar..."
    onChange={(event) => {
      setSearchTerm(event.target.value);
    }}
    className="pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
</div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                  {vehicleKeys.map((key, index) => (
                    <th
                      key={`table-head-${index}-${key}`}
                      className="px-6 py-2 text-left"
                    >
                      {key}
                    </th>
                  ))}
                  <th className="px-6 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600">
                {filteredVehicles.map((vehicle, index) => (
                  <tr
                    key={`vehicle-row-${index}-${vehicle.id}`}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {vehicleKeys.map((key, index) => (
                      <td
                        key={`vehicle-data-${index}-${key}`}
                        className="px-6 py-4 text-left whitespace-nowrap"
                      >
                        {tableEditingVehicle?.id === vehicle.id ? (
                          <input
                          value={tableEditingVehicle?.[key]}
                            onChange={(e) =>
                              tableEditingVehicle &&
                              setTableEditingVehicle({
                                ...tableEditingVehicle,
                                [key]: e.target.value,
                              })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                          />
                        ) : (
                          vehicle[key]
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-left">
                      {tableEditingVehicle?.id === vehicle.id ? (
                        <div className="flex space-x-1">
                          <AiFillCheckCircle
                            className="cursor-pointer text-green-500"
                            onClick={updateTableVehicle}
                          />
                          <AiFillCloseCircle
                            className="cursor-pointer text-red-500"
                            onClick={cancelTableEditingVehicle}
                          />
                        </div>
                      ) : (
                        <div className="flex space-x-1">
                          <AiFillEdit
                            className="cursor-pointer text-blue-500"
                            onClick={() => startTableEditingVehicle(vehicle)}
                          />
                          <AiFillDelete
                            className="cursor-pointer text-red-500"
                            onClick={() => deleteVehicle(vehicle.id as string)}
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
