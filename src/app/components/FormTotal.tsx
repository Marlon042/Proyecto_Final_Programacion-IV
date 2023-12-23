import React from "react";
interface FormTotalProps {
  laborCost: number;
  handleLaborCostChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notes: string;
  handleNoteChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
  handleQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  totalCost: number;
}

const FormTotal: React.FC<FormTotalProps> = ({
  laborCost,
  handleLaborCostChange,
  notes,
  handleNoteChange,
  quantity,
  handleQuantityChange,
  totalCost,
}) => {
  return (
    <div>
      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
        Calcular el total
      </h2>
      <div>
        <p>Mano obra:</p>
        <input
          type="number"
          placeholder="Costo de mano obra"
          value={laborCost}
          onChange={handleLaborCostChange}
          className="bg-white focus:outline-none border border-blue-500 rounded-lg py-2 px-4 mb-4"
        />
      </div>
      <div>
        <p>Cantidad de repuestos:</p>
        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={handleQuantityChange}
          className="bg-white focus:outline-none border border-blue-500 rounded-lg py-2 px-4 mb-4"
        />
      </div>
      <div>
        {/* <p>Total:</p> */}
        <p>Total Cost: {totalCost}</p>
        <p>Detalle:</p>
        <input
          type="text"
          placeholder="Nota"
          value={notes}
          onChange={handleNoteChange}
          className="bg-white focus:outline-none border border-blue-500 rounded-lg py-2 px-4 mb-4"
        />
      </div>
    </div>
  );
};

export default FormTotal;
