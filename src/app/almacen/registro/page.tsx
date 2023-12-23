"use client";

import UnitsForm from "./components/RepForm";
import { useState } from "react";

import UnitsTable from "./components/repTable";
import StatsSection from "./components/statics";
import FireTuto from "./components/fire";

type FormValues = {
  id_unidad: number;
  modelo: string;
  marca: string;
  year: number;
  placa: string;
  estado: string;
  capacidad: number;
  color: string;
};

export default function RegistroP(params: any) {
  const [formData, setFormData] = useState<FormValues[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<FormValues | undefined>(undefined);

  const handleFormSubmit = (data: FormValues) => {
    if (editIndex !== null) {
      setFormData((prevData) => prevData.map((item, index) => index === editIndex ? data : item));
      setEditIndex(null);
      setEditValues(undefined);
    } else {
      setFormData((prevData) => [...prevData, data]);
    }
  };

  const handleDelete = (index: number) => {
    setFormData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditValues(formData[index]);
  };

  return (
    <>
   

      <StatsSection/>

      <FireTuto/>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-row justify-center w-full space-x-4">
          <div>
            
          </div>
         
        </div>
      </div>
      
    </>
  );
}
