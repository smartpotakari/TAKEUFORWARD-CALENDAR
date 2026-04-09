"use client";

import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "../notes/NotesPanel";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export default function Calendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [flip, setFlip] = useState("");
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const changeMonth = (dir: number) => {
    setFlip(dir > 0 ? "flip-up" : "flip-down");

    setTimeout(() => {
      setCurrentDate(
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + dir,
          1
        )
      );
      setFlip("");
    }, 300);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartY === null) return;
    setDragOffset(e.clientY - dragStartY);
  };

  const handleMouseUp = () => {
    if (dragStartY === null) return;

    if (dragOffset < -80) changeMonth(1);
    else if (dragOffset > 80) changeMonth(-1);

    setDragStartY(null);
    setDragOffset(0);
  };

  return (
    <div className="container">

      <div className="calendar-card">

        {/* 🔩 Nail + string now centered to page */}
        <div className="string"></div>
        <div className="nail"></div>

        <div
          className="flip-wrapper"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >

          {/* 🔥 WHOLE PAGE */}
          <div
            className={`page ${flip}`}
            style={{
              transform:
                dragStartY !== null
                  ? `rotateX(${Math.max(-70, Math.min(70, dragOffset / 2))}deg)`
                  : undefined,
            }}
          >

            {/* IMAGE */}
            <div className="hero">
              <img src="/images/calendar.jpg" />
              <div className="hero-title">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </div>
            </div>

            {/* CALENDAR */}
            <div className="calendar-content">
              <CalendarGrid currentDate={currentDate} />
            </div>

            {/* 🔥 NOTES NOW INSIDE PAGE */}
            <div className="notes-inside">
              <NotesPanel currentDate={currentDate} />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}