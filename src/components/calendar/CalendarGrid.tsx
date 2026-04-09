"use client";

import { generateCalendarDays } from "@/utils/dateUtils";
import { useDateRange } from "@/hooks/useDateRange";

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const holidays = [
  { day: 25, month: 11, name: "Christmas" },
  { day: 1, month: 0, name: "New Year" },
  { day: 14, month: 1, name: "Valentine's Day" },
];

export default function CalendarGrid({ currentDate }: { currentDate: Date }) {

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let days = generateCalendarDays(year, month);

  const firstDay = new Date(year, month, 1).getDay();
  const shift = firstDay === 0 ? 6 : firstDay - 1;

  const adjustedDays = [
    ...Array(shift).fill(null),
    ...days.filter(d => d !== null)
  ];

  const {
    startDate,
    endDate,
    hoverDate,
    setHoverDate,
    selectDate,
    isInRange,
  } = useDateRange();

  const isSameDay = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return d1.toDateString() === d2.toDateString();
  };

  return (
    <div>

      {/* Header */}
      <div className="grid" style={{ marginBottom: "8px" }}>
        {daysOfWeek.map(day => (
          <div key={day} className="day" style={{fontWeight:"bold",opacity:0.7}}>
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid">
        {adjustedDays.map((date, i) => {
          if (!date) return <div key={i}></div>;

          const isStart = isSameDay(date, startDate);
          const isEnd = isSameDay(date, endDate);
          const inRange = isInRange(date);

          const holiday = holidays.find(
            h => h.day === date.getDate() && h.month === month
          );

          return (
            <div
              key={i}
              title={holiday?.name || ""}
              onClick={() => selectDate(date)}
              onMouseEnter={() => setHoverDate(date)}
              onMouseLeave={() => setHoverDate(null)}
              className={`day 
                ${isStart ? "start" : ""}
                ${isEnd ? "end" : ""}
                ${inRange ? "range" : ""}
                ${holiday ? "holiday" : ""}
              `}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>

    </div>
  );
}