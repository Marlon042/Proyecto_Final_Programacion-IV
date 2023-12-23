import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

interface TableProps {
  onUnitSelect: (unit: string) => void;
  onRowSelect: (row: any) => void;
}

const Table: React.FC<TableProps> = ({ onUnitSelect, onRowSelect }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'vehicles'));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (error) {
        console.error('Error al obtener los datos de Firebase:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUnitData = async () => {
      if (data.length === 0 || selectedRow === null) {
        return;
      }

      const selectedUnit = data[selectedRow];
      const unitId = selectedUnit.id;

      try {
        // No es necesario obtener datos de la otra tabla en este componente
        // Simplemente pasar el nombre de la unidad seleccionada al componente padre (FormReactive)
        onUnitSelect(selectedUnit.Modelo);
        onRowSelect(selectedUnit);
      } catch (error) {
        console.error('Error al obtener los datos de la otra tabla:', error);
      }
    };

    fetchUnitData();
  }, [data, selectedRow, onUnitSelect, onRowSelect]);

  const columnData = [
    { name: 'ID', key: 'unitId' },
    { name: 'Modelo', key: 'Modelo' },
    { name: 'Placa', key: 'Placa' },
  ];

  return (
    <>
      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
        Seleccionar unidad
      </h2>
      <table
        style={{
          border: '1px solid lightblue',
          borderRadius: '4px',
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <colgroup>
          {columnData.map((column, index) => (
            <col key={index} style={{ borderRight: '1px solid #80acf2' }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columnData.map((column, index) => (
              <th
                key={index}
                style={{
                  border: '1px solid lightblue',
                  padding: '8px',
                  background: '#f1f5f8',
                  color: '#333',
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr
              key={index}
              onClick={() => handleRowClick(index)}
              style={{
                backgroundColor: selectedRow === index ? 'lightblue' : 'transparent',
                cursor: 'pointer',
              }}
            >
              {columnData.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  style={{
                    border: '1px solid lightblue',
                    padding: '8px',
                  }}
                >
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
