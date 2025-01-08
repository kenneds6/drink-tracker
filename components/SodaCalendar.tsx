"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SodaCalendar = () => {
  const [year] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [consumption, setConsumption] = useState<Record<string, number>>({});

  const getColorForConsumption = (drinks: number) => {
    if (drinks === 0) return 'bg-green-500';
    if (drinks <= 2) return 'bg-yellow-500';
    if (drinks <= 3) return 'bg-orange-500';
    if (drinks <= 5) return 'bg-red-500';
    return 'bg-black';
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDayClick = (day: number) => {
    const dateKey = `${year}-${month + 1}-${day}`;
    const currentValue = consumption[dateKey] || 0;
    const newValue = currentValue >= 6 ? 0 : currentValue + 1;
    setConsumption(prev => ({
      ...prev,
      [dateKey]: newValue
    }));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 border border-gray-200"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${month + 1}-${day}`;
      const drinks = consumption[dateKey] || 0;
      days.push(
        <div
          key={day}
          onClick={() => handleDayClick(day)}
          className={`h-12 border border-gray-200 flex items-center justify-center cursor-pointer 
                     ${getColorForConsumption(drinks)} text-white transition-colors`}
        >
          <div className="flex flex-col items-center">
            <span>{day}</span>
            <span className="text-xs">{drinks}</span>
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <button 
            onClick={() => setMonth(prev => prev === 0 ? 11 : prev - 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            ←
          </button>
          <span>
            {new Date(year, month).toLocaleString('default', { month: 'long' })} {year}
          </span>
          <button 
            onClick={() => setMonth(prev => prev === 11 ? 0 : prev + 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            →
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-semibold">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {renderCalendar()}
        </div>
      </CardContent>
    </Card>
  );
};

export default SodaCalendar;