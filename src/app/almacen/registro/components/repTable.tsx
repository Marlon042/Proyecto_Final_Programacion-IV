"use client"
import { useState } from 'react';

type FormValues = {
  id_unidad: number;
  categoria: string;
  costo: string;
  cantidad: number;
  placa: string;
  estado: string;
  capacidad: number;
  color: string;
};

type UnitsTableProps = {
  data: FormValues[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
};

const UnitsTable: React.FC<UnitsTableProps> = ({ data, onDelete, onEdit }) => {
  return (
    <div className="mt-8" style={{backgroundColor: "rgb(217, 217, 217)", borderRadius: "15px", overflow: "auto", maxHeight: "400px"}}>
      <h2 className="text-2xl font-bold mb-4 text-center">Tabla de Repuestos</h2>
      <table className="w-full border-collapse " style={{ backgroundColor: "rgb(217, 217, 217)", borderRadius: "15px" }}>
        <thead>
          <tr style={{ backgroundColor: "rgb(217, 217, 217)" }}>
            <th className="py-2 px-4 border-b-2 font-medium">Nombre</th>
            <th className="py-2 px-4 border-b-2 font-medium">Categoría</th>
            <th className="py-2 px-4 border-b-2 font-medium">Costo Unitario</th>
            <th className="py-2 px-4 border-b-2 font-medium">Cant Disponible</th>
           
            
            <th className="py-2 px-4 border-b-2 font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((unit, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{unit.id_unidad}</td>
              <td className="py-2 px-4 border-b">{unit.categoria}</td>
              <td className="py-2 px-4 border-b">{unit.costo}</td>
              <td className="py-2 px-4 border-b">{unit.cantidad}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onEdit(index)}
                  className="text-blue-500 font-bold hover:underline mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500 font-bold hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitsTable;