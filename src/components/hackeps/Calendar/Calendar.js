import React from "react";

const Calendar = () => {
  const daysOfWeek = ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"];
  const year = 2025;
  const month = 10; // Novembre (0-indexat)
  const daysInMonth = 30;

  const highlightedDays = [22, 23];

  // Primer dia del mes (0 = Dg, 1 = Dl, ..., 6 = Ds)
  const rawFirstDay = new Date(year, month, 1).getDay();
  const firstDay = (rawFirstDay + 6) % 7; // Ajustar perquè dilluns sigui primer

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-[var(--primary)] text-[var(--white)] rounded">
      <h2 className="text-xl font-bold text-center mb-4">Novembre 2025</h2>
      <div className="grid grid-cols-7 text-center font-medium mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weeks.flat().map((day, index) => (
          <div
            key={index}
            className={`p-2 border rounded h-10 flex items-center justify-center ${
              highlightedDays.includes(day)
                ? "bg-[var(--primary-strong2)] text-black font-bold border-white"
                : "bg-[var(--primary-strong)]"
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
