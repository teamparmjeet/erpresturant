"use client";

import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import {
  ArrowRight,
  Play,
  Waves,
  Utensils,
  BedDouble,
  GlassWater,
  Calendar,
  Users,
  DoorOpen
} from 'lucide-react';

// --- Custom Number Input Component ---
// Handles typing numbers and enforces minimums automatically on blur
interface NumberInputProps {
  label: string;
  value: number | string;
  onChange: (val: string) => void;
  onBlur: () => void;
  icon: React.ReactNode;
  suffix: string;
}

const CustomNumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, onBlur, icon, suffix }) => (
  <div className="flex items-center gap-3 w-35 group">
    <div className="text-gray-400 shrink-0 transition-colors group-hover:text-[#0f2c23]">
      {icon}
    </div>
    <div className="flex flex-col w-full">
      <label className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5 group-focus-within:text-gray-700 transition-colors cursor-text">
        {label}
      </label>
      <div className="flex items-center text-sm sm:text-base text-gray-900 font-semibold transition-colors group-focus-within:text-[#0f2c23]">
        <input
          type="number"
          min="1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className="bg-transparent outline-none w-8 p-0 border-none hide-arrows font-semibold placeholder-gray-300"
          placeholder="1"
        />
        <span>{suffix}{Number(value) > 1 ? 's' : ''}</span>
      </div>
    </div>
  </div>
);

// --- Custom Date Input for React-DatePicker ---
const CustomDateInput = forwardRef<HTMLButtonElement, any>(({ value, onClick }, ref) => (
  <button
    className="text-sm sm:text-base text-gray-900 font-semibold bg-transparent outline-none cursor-pointer text-left p-0 border-none hover:text-[#0f2c23] transition-colors whitespace-nowrap"
    onClick={onClick}
    ref={ref}
  >
    {value || "Select Date"}
  </button>
));
CustomDateInput.displayName = 'CustomDateInput';

// --- Main Component ---
export default function Herobanner() {
  // Get today's date for validation
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // State setup
  const [checkIn, setCheckIn] = useState<Date | null>(today);
  const [checkOut, setCheckOut] = useState<Date | null>(tomorrow);
  const [guests, setGuests] = useState<number | string>(2);
  const [rooms, setRooms] = useState<number | string>(1);

  // Handlers for Inputs to enforce minimum values of 1
  const handleGuestsBlur = () => {
    const val = Number(guests);
    if (isNaN(val) || val < 1) setGuests(1);
  };

  const handleRoomsBlur = () => {
    const val = Number(rooms);
    if (isNaN(val) || val < 1) setRooms(1);
  };

  const handleCheckAvailability = () => {
    alert(
      `Searching Availability:\n\n` +
      `Check In: ${checkIn ? format(checkIn, 'dd MMM, yyyy') : 'Not selected'}\n` +
      `Check Out: ${checkOut ? format(checkOut, 'dd MMM, yyyy') : 'Not selected'}\n` +
      `Guests: ${guests}\n` +
      `Rooms: ${rooms}`
    );
  };

  return (
    <div className="relative w-full min-h-screen rounded-4xl overflow-hidden flex flex-col justify-center bg-gray-100 font-sans selection:bg-[#b89565] selection:text-white">

      {/* Background Image Setup */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/60 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 lg:pb-32 flex flex-col lg:flex-row justify-between items-center">

        {/* Left Column: Text & CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-[#b89565] font-semibold tracking-widest text-sm sm:text-base uppercase">Escape. Relax.</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#0f2c23] leading-tight">
            EXPERIENCE<br />SPARSH
          </h1>
          <div className="w-16 h-1 bg-[#b89565] my-2 rounded-full"></div>
          <p className="text-gray-800 text-base sm:text-lg max-w-md font-medium leading-relaxed">
            Where luxury meets nature.<br />Unwind in serenity. Indulge in elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0f2c23] text-white px-8 py-4 rounded-full hover:bg-[#1a4034] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group">
              <span className="font-semibold text-sm tracking-wide">Explore Rooms</span>
              <div className="border border-white/30 rounded-full p-1 group-hover:bg-white/10 transition-colors">
                <ArrowRight size={14} />
              </div>
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-[#0f2c23] hover:text-[#b89565] transition-colors px-6 py-4 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#0f2c23] group-hover:border-[#b89565] transition-colors">
                <Play size={18} className="ml-1" fill="currentColor" />
              </div>
              <span className="font-semibold text-sm tracking-wide">Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Column: Amenities Card */}
        <div className="hidden lg:flex justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-5 w-64">
            <div className="space-y-4">
              {[
                { icon: Waves, text: "Infinity Pool" },
                { icon: Utensils, text: "Fine Dining" },
                { icon: BedDouble, text: "Luxury Rooms" },
                { icon: GlassWater, text: "Events & Weddings" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 rounded-xl transition-all duration-300 hover:bg-[#f8f5f0]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8f5f0] text-[#b89565] transition-all duration-300 hover:bg-[#0f2c23] hover:text-white">
                    <item.icon size={18} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-medium text-gray-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Booking Bar */}
      <div className="absolute bottom-4 sm:bottom-10 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 flex justify-center z-30">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] p-4 sm:p-6 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">

          <div className="flex flex-row justify-between w-full md:w-auto gap-6 md:gap-8 flex-wrap md:flex-nowrap">

            {/* Check In */}
            <div className="flex items-center gap-3 w-35 group cursor-pointer">
              <Calendar className="text-gray-400 shrink-0 transition-colors group-hover:text-[#0f2c23]" size={24} strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5 group-hover:text-gray-700 transition-colors">Check In</span>
                <DatePicker
                  selected={checkIn}
                  onChange={(date: Date | null) => {
                    setCheckIn(date);
                    // Push checkout forward if user selects a checkin date after the current checkout
                    if (date && checkOut && date >= checkOut) {
                      const newOut = new Date(date);
                      newOut.setDate(newOut.getDate() + 1);
                      setCheckOut(newOut);
                    }
                  }}
                  minDate={today} // STRICT: Disallow past dates entirely
                  dateFormat="dd MMM, yyyy"
                  customInput={<CustomDateInput />}
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex items-center gap-3 w-35 group cursor-pointer">
              <Calendar className="text-gray-400 shrink-0 transition-colors group-hover:text-[#0f2c23]" size={24} strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5 group-hover:text-gray-700 transition-colors">Check Out</span>
                <DatePicker
                  selected={checkOut}
                  onChange={(date: Date | null) => setCheckOut(date)}
                  minDate={checkIn || today} // STRICT: Cannot checkout before checkin
                  dateFormat="dd MMM, yyyy"
                  customInput={<CustomDateInput />}
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

            {/* Guests Input */}
            <CustomNumberInput
              label="Guests"
              value={guests}
              onChange={setGuests}
              onBlur={handleGuestsBlur}
              icon={<Users size={24} strokeWidth={1.5} />}
              suffix="Guest"
            />

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

            {/* Rooms Input */}
            <CustomNumberInput
              label="Rooms"
              value={rooms}
              onChange={setRooms}
              onBlur={handleRoomsBlur}
              icon={<DoorOpen size={24} strokeWidth={1.5} />}
              suffix="Room"
            />
          </div>

          <button
            onClick={handleCheckAvailability}
            className="w-full md:w-auto bg-[#0f2c23] text-white px-8 py-4 rounded-2xl hover:bg-[#1a4034] transition-all duration-300 font-semibold text-sm whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Check Availability
          </button>

        </div>
      </div>

      {/* Global Overrides and native spin-button hiding */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hide browser default number arrows */
        .hide-arrows::-webkit-outer-spin-button,
        .hide-arrows::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .hide-arrows {
          -moz-appearance: textfield;
        }

        /* React DatePicker Styles */
        .react-datepicker-popper {
          z-index: 50 !important;
        }
        .react-datepicker {
          font-family: inherit !important;
          border: 1px solid #f3f4f6 !important;
          border-radius: 1.5rem !important;
          box-shadow: 0 20px 50px -12px rgba(0,0,0,0.15) !important;
          overflow: hidden;
        }
        .react-datepicker__header {
          background-color: #f8f5f0 !important;
          border-bottom: 1px solid #e5e7eb !important;
          padding-top: 1rem !important;
        }
        .react-datepicker__current-month {
          color: #0f2c23 !important;
          font-weight: 700 !important;
        }
        .react-datepicker__day-name {
          color: #6b7280 !important;
          font-weight: 600 !important;
        }
        .react-datepicker__day {
          color: #374151 !important;
          border-radius: 0.5rem !important;
          transition: all 0.2s;
        }
        .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
          background-color: #f3f4f6 !important;
          color: #0f2c23 !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
          background-color: #0f2c23 !important;
          color: white !important;
          font-weight: 600 !important;
        }
        .react-datepicker__day--disabled {
          color: #d1d5db !important;
          cursor: not-allowed !important;
        }
      `}} />
    </div>
  );
}