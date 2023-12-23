import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Table from "./MyTable";
import RouteOpc from "./RouteOpc";
import Mtable from "./Mtable";
import { db } from "../firebase";
import FormTotal from "./FormTotal";

const FormReactive: React.FC = () => {
  const [PlacaUnit, setPlacaUnit] = useState<string>("");
  const [selectedGravity, setSelectedGravity] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [repairDetails, setRepairDetails] = useState<string>("");
  const [MaintenanceType, setMaintenanceType] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [spare, setSpare] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [selectedTableRow, setSelectedTableRow] = useState<any>(null);
  const [selectedMTableRow, setSelectedMTableRow] = useState<any>(null);
  const [laborCost, setLaborCost] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const [totalCost, setTotalCost] = useState<number>(0);

  const [selectedCost, setSelectedCost] = useState<number>(0);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGravity(event.target.value);
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairDetails(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = {
        //PlacaUnit,
        selectedGravity,
        checkedItems,
        repairDetails,
        MaintenanceType,
        selectedTableRow,
        selectedMTableRow,
        unit,
        spare,
        laborCost,
        notes,
        quantity,
        totalCost: calculatedTotalCost,
      };

      const firestore = getFirestore();
      await addDoc(collection(firestore, "FormData"), formData);
      console.log(formData);

      //setPlacaUnit("");
      setSelectedGravity("");
      setCheckedItems([]);
      setRepairDetails("");
      setMaintenanceType("");
      setSelectedTableRow(null);
      setSelectedMTableRow(null);
      setUnit("");
      setSpare("");
      setCost(0);
      setLaborCost(0);
      setNotes("");
      setQuantity(0);
      setTotalCost(calculatedTotalCost);
    } catch (error) {
      console.error("Error al guardar los datos en Firestore:", error);
    }
  };

  const handleCheckboxClear = () => {
    setCheckedItems([]);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaintenanceType(event.target.value);
  };

  const handlePlacaUnit = (PlacaUnit: string) => {
    setUnit(PlacaUnit);
  };

  const handleSpareSelect = (selectedSpare: string, selectedCost: number) => {
    setSpare(selectedSpare);
    setSelectedCost(selectedCost);
  };

  const calculatedTotalCost = laborCost + selectedCost * quantity;
  //console.log(calculatedTotalCost);

  const handleTableRowSelect = (selectedRow: any) => {
    setSelectedTableRow(selectedRow);
  };

  const handleMTableRowSelect = (selectedRow: any) => {
    setSelectedMTableRow(selectedRow);
  };

  const handleLaborCostChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLaborCost(Number(event.target.value));
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <div>
            <Image src="/bus2_blue.jpg" alt="bus" width={360} height={400} />
            <Table
              onUnitSelect={handlePlacaUnit}
              onRowSelect={handleTableRowSelect}
            />
          </div>
          <div>
            <Image src="/bus-repair.png" alt="bus" width={160} height={100} />
            <Mtable
              onSpareSelect={handleSpareSelect}
              onRowSelect={handleMTableRowSelect}
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:w-2/3 mx-auto"
          >
            <RouteOpc
              MaintenanceType={MaintenanceType}
              handleOptionChange={handleOptionChange}
            />
          </form>
          <div className="lg:pl-12 lg:text-left text-center">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Apartado a reparar
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-start">
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Motor"
                  checked={checkedItems.includes("Motor")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Motor</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Llantas"
                  checked={checkedItems.includes("Llantas")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Llantas</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Carrocería"
                  checked={checkedItems.includes("Carrocería")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Carrocería</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Transmisión"
                  checked={checkedItems.includes("Transmisión")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Transmisión</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Eléctrico"
                  checked={checkedItems.includes("Eléctrico")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Eléctrico</span>
              </label>
              <button
                type="button"
                className="bg-blue-500 text-white rounded-lg py-0.5 px-0.8"
                onClick={handleCheckboxClear}
              >
                Limpiar selección
              </button>
            </form>
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Gravedad
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-start">
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  value="Alta"
                  checked={selectedGravity === "Alta"}
                  onChange={handleRadioChange}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Alta</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  value="Media"
                  checked={selectedGravity === "Media"}
                  onChange={handleRadioChange}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Media</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  value="Baja"
                  checked={selectedGravity === "Baja"}
                  onChange={handleRadioChange}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Baja</span>
              </label>
            </form>
          </div>
          <div className="lg:pl-12 lg:text-left text-center">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Detalles de reparación
            </h2>
            <p>Puede incluir datos adicionales</p>
            <input
              type="text"
              placeholder="Detalles"
              value={repairDetails}
              onChange={handleDetailsChange}
              className="bg-white focus:outline-none border border-blue-500 rounded-lg py-2 px-4 mb-4"
            />
            <FormTotal
              laborCost={laborCost}
              handleLaborCostChange={handleLaborCostChange}
              notes={notes}
              handleNoteChange={handleNoteChange}
              quantity={quantity}
              handleQuantityChange={handleQuantityChange}
              totalCost={totalCost}
            />
            <button
              onClick={
                handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>
              }
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-2 px-4"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormReactive;
