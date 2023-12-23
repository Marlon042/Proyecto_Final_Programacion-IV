"use client";
import React, { useState, useRef, useEffect } from "react";
import useTypewriter from "react-typewriter-hook";

const MagicOcean: string[] = [
  "Bienvenido al modulo de registro de unidades",
  "Si deseas registrar una unidad", 
  "Escribe en el",
  "espacio correspondiente",
];

let index = 0;

const MyTypingComponent: React.FC = () => {
  const [magicName, setMagicName] = useState("");
  const intervalRef = useRef<NodeJS.Timeout>();
  const name = useTypewriter(magicName);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > MagicOcean.length - 1 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return function clear() {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  //h es para la altura{inline-block px-4 py-2 text-4xl text-gray-700 bg-gray-200 border border-gray-400}
  return (
    <div className="flex items-center justify-center h-[60vh]" > 
    <div className="font-bold text-4xl text-gray-700">
      {name}
    </div>
    </div>
  );
};

export default MyTypingComponent;
