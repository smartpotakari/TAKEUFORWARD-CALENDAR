# TAKEUFORWARD-CALENDAR

# 📅 Interactive Wall Calendar (Advanced UI)

An interactive and visually rich **wall calendar component** built using **Next.js (React)**.
This project replicates a **real-world wall calendar experience** with full-page flipping, gesture-based interaction, and integrated notes.

---

## 🚀 Features

### 📆 Date Range Selection

* Select start and end dates with click
* Hover preview for range selection
* Visual highlighting of selected range

### 🎞️ Full Page Flip Interaction

* Drag up/down to flip between months
* Entire calendar page flips (image + dates + notes)
* Smooth 3D animation mimicking a physical calendar sheet

### 📝 Integrated Notes (Inside Calendar)

* Notes are part of the calendar page
* Each month has its own notes section
* Notes persist using `localStorage`
* Switching months updates notes dynamically

### 🎨 Realistic UI Design

* Dark aesthetic background (wall)
* White paper-like calendar sheet
* Hanging calendar effect with:

  * Visible screw/nail
  * Supporting string
* Depth using shadows and layering

### 🖼️ Image Header

* Same image used across all months
* Fully responsive and scales with screen size
* Overlaid month and year title

### 📱 Fully Responsive

* Works across:

  * Desktop 💻
  * Tablet 📱
  * Mobile 📱
* Supports both mouse and touch interactions

---

## 🧠 Design Approach

This project focuses on replicating a **physical wall calendar experience** digitally.

Key decisions:

* **Full-page flipping** instead of content swapping
* **Notes inside the calendar sheet** to match real-world usage
* Separation between:

  * Background (wall)
  * Foreground (calendar page)
* Use of perspective and transform for realistic animation

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **CSS (custom styling, no external UI libraries)**

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── calendar/
│   │   ├── Calendar.tsx
│   │   └── CalendarGrid.tsx
│   │
│   └── notes/
│       └── NotesPanel.tsx
│
├── hooks/
│   └── useDateRange.ts
│
├── utils/
│   └── dateUtils.ts
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/smartpotakari/calendar-app.git
cd calendar-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---


## 🧪 How to Use

* Drag upward → go to next month
* Drag downward → go to previous month
* Click dates → select range
* Write notes → saved per month
* Resize screen → responsive layout

---

## 💡 Future Improvements

* Notes linked to specific dates or ranges
* API-based holiday integration
* Advanced page curl animation
* Dark/light mode toggle

---

## 👤 Author

Smart Potakari

---

## 📌 Final Note

This project goes beyond basic requirements by focusing on **interaction design, visual realism, and user experience**, aiming to replicate a physical wall calendar as closely as possible in a digital interface.
