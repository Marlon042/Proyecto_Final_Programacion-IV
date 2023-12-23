"use client"
import React, { useState } from 'react';
import Calendar from './components/calendar';

const Page: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Calendario</h1>
      <Calendar selectedDate={selectedDate} onDateSelect={handleDateSelect} />
    </div>
  );
};

export default Page;
