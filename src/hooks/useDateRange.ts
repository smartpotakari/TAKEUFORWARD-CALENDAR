import { useState } from "react";

export const useDateRange = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const selectDate = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const isInRange = (date: Date) => {
    if (startDate && endDate) {
      return date > startDate && date < endDate;
    }

    // 🔥 hover preview logic
    if (startDate && hoverDate) {
      if (hoverDate > startDate) {
        return date > startDate && date < hoverDate;
      } else {
        return date > hoverDate && date < startDate;
      }
    }

    return false;
  };

  const getKey = (date: Date | null) => {
  if (!date) return "general";
  return date.toDateString();
};

  return {
    startDate,
    endDate,
    hoverDate,
    setHoverDate,
    selectDate,
    isInRange,
    getKey,
  };
};