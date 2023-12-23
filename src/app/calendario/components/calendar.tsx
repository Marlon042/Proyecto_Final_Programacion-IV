"use client"
import React, { useState } from 'react';

interface CalendarProps {
    selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const getMonthName = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    return date.toLocaleString('en-US', options);
  };

  const renderDays = () => {
    const days = [];
    const daysCount = daysInMonth(currentMonth);
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty_${i}`} className="calendar-day empty" />);
    }

    for (let i = 1; i <= daysCount; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={`day_${i}`}
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => onDateSelect(date)}
        >
          <div className="day-inner border border-black p-2">{i}</div>
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  return (
    <div className="calendar p-4">
      <div className="calendar-header flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handlePrevMonth}
        >
          Prev
        </button>
        <h2 className="text-lg font-semibold">{getMonthName(currentMonth)}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-2">
        <div className="calendar-day-header">Sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;


