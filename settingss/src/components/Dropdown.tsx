import React, { useState } from "react";

interface CustomSelectProps {
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <select
          onChange={handleChange}
          className="w-40 border-2 rounded-lg p-3 appearance-none outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <img src="/stroke_dropdown.svg" alt="" />
        </div>
      </div>
      
    </>
  );
};

export default CustomSelect;
