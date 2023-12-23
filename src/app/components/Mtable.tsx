import React, { useState, useEffect } from 'react';
import { getDocs, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface MtableProps {
  onSpareSelect: (spare: string, cost: number) => void;
  onRowSelect: (row: any) => void;
}

const Mtable: React.FC<MtableProps> = ({ onSpareSelect, onRowSelect }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'spares'));
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
      if (data.length === 0 || selectedRow === null || selectedRow >= data.length) {
        return;
      }
      const selectedSpare = data[selectedRow];
      const unitId = selectedSpare.id;

      try {
        const unitDoc = await getDoc(doc(db, 'spares', unitId)); //const unitDoc = await getDoc(doc(db, 'otherTable', unitId));
        const unitData = unitDoc.data();

        //console.log('Datos de la tabla de repuestos:', unitData);

        // Pasar los datos seleccionados al componente padre (FormReactive)
        if (unitData) {
          onSpareSelect(unitData.nombre, unitData.costo);
          onRowSelect(selectedSpare);
        }
      } catch (error) {
        console.error('Error al obtener los datos de la otra tabla:', error);
      }
    };

    fetchUnitData();
  }, [data, selectedRow, onSpareSelect, onRowSelect]);

  const columnData = [
    { name: 'Nombre', key: 'nombre' },
    { name: 'Categoria', key: 'categoria' },
    { name: 'Costo', key: 'costo' },
  ];

  return (
    <>
      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
        Seleccionar tipo/repuesto
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

export default Mtable;
