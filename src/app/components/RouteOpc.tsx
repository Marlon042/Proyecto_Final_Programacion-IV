import React, { ChangeEvent } from "react";

interface RouteOpcProps {
  MaintenanceType: string;
  handleOptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function RouteOpc({ MaintenanceType, handleOptionChange }: RouteOpcProps) {
  return (
    <>
      <div>
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Tipo de mantenimiento</h2>
        <label className="inline-flex items-center mb-2">
          <input
            type="radio"
            value="preventivo"
            checked={MaintenanceType === "preventivo"}
            onChange={handleOptionChange}
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="ml-2">Preventivo</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center mb-2">
          <input
            type="radio"
            value="reactivo"
            checked={MaintenanceType === "reactivo"}
            onChange={handleOptionChange}
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="ml-2">Reactivo</span>
        </label>
      </div>
    </>
  );
}

export default RouteOpc;
