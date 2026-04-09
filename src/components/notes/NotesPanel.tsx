"use client";

import { useState, useEffect } from "react";

export default function NotesPanel({ currentDate }: { currentDate: Date }) {

  const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;

  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(key);
    setNote(saved || "");
  }, [key]);

  const save = () => {
    localStorage.setItem(key, note);
  };

  return (
    <div className="notes">
      <h4 style={{ marginBottom: "8px" }}>
        Notes for {currentDate.toLocaleString("default", { month: "long" })}
      </h4>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write notes for this month..."
      />

      <button onClick={save}>Save</button>
    </div>
  );
}