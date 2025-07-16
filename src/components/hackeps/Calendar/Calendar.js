import React from "react";

const Calendar = () => {
  const daysOfWeek = ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"];
  const year = 2025;
  const month = 10;
  const daysInMonth = 30;
  const highlightedDays = [22, 23];

  const rawFirstDay = new Date(year, month, 1).getDay();
  const firstDay = (rawFirstDay + 6) % 7;

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarDays.push(day);

  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7)
    weeks.push(calendarDays.slice(i, i + 7));

  return (
    <div className="max-w-sm mx-auto p-6 bg-[#3c3c3c] text-white rounded-xl shadow-2xl font-mono">
      <h2 className="text-2xl text-center mb-4">Novembre</h2>
      <div className="grid grid-cols-7 gap-2 text-center text-lg mb-1">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {weeks.flat().map((day, idx) => {
          const isHighlighted = highlightedDays.includes(day);
          const bgColor = isHighlighted ? "bg-[#1d6aa3]" : "bg-[#fceee5]";
          const textColor = isHighlighted ? "text-white" : "text-black";

          return (
            <div
              key={idx}
              className={`md:h-10 h-7 rounded-md shadow-md flex items-center justify-center ${bgColor} ${textColor}`}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
