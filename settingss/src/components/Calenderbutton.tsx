"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import customIcon from './custom-icon.svg'; // Import your custom icon

const MyDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <section>

        <div className='ms-3 mt-3'>
          <div className='relative'>
            <div>
              <button className= 'pe-40 p-6 border-gray-600 border-2'></button>
            </div>
          

          <div className='absolute top-3 start-2'>
            {selectedDate && (
            <span>{selectedDate.toLocaleDateString()} </span>
            )}
          </div>
          <div className='absolute top-3 start-36'>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
            customInput={
            <button className=''>
              <img className='w-[24px] h-[24px]' src="/date.svg" alt="Custom Icon" />
            </button>
        }
          />
        </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default MyDatePicker;
