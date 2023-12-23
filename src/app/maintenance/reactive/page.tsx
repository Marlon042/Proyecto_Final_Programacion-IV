"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Table from "@/app/components/MyTable";
import Form from "@/app/components/FormReactive";
import Tags from "@/app/components/Tags";
import RouteOpc from "@/app/components/RouteOpc";

const Section: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [busName, setBusName] = useState("");
  const [repairDetails, setRepairDetails] = useState("");
  const [selectedGravity, setSelectedGravity] = useState("");
  const [selectedUnit, setSelectedUnit] = React.useState<string>('');


  const selectUnit = (modelo: string) => {
    setSelectedUnit(modelo);
  };

  useEffect(() => {
    const handleClick = (modelo: string) => {
      selectUnit(modelo);
    };

  }, []);

  const handleRadioChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedGravity(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems((prevItems) => [...prevItems, value]);
    } else {
      setCheckedItems((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusName(event.target.value);
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairDetails(event.target.value);
  };

  const handleCheckboxClear = () => {
    setCheckedItems([]);
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected Repairs:", checkedItems);
    console.log("Bus Name:", busName);
    console.log("Repair Details:", repairDetails);
  };

  return (
    <>
    <Tags/>
    <Form />
    </>
  );
};

export default Section;
