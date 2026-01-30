# HR Analytics Dashboard

A modern **HR Analytics Dashboard** designed to mirror real-world internal tools used by HR, HRIS, and healthcare IT teams. This project demonstrates **frontend engineering, product thinking, and domain awareness** in workforce data and analytics.

This is a **portfolio project** intentionally built with mock HR data to showcase internal-tool UX patterns, analytics workflows, and **export-ready reporting**, while remaining structured for future backend integration.

---

## 🚀 Live Demo

[https://hr-dashboard-gray.vercel.app](https://hr-dashboard-gray.vercel.app)

---

## 🏥 Real-World Use Case

This dashboard simulates internal tools used by HR and healthcare organizations to:

* Monitor workforce composition across departments and locations
* Quickly search and filter employee records for audits or reporting
* Visualize high-level staffing metrics for organizational planning
* Export employee datasets for downstream analysis and compliance workflows

The emphasis is on **clarity, usability, and decision support**, rather than decorative visuals.

---

## ✨ Key Features (Implemented)

### Core Functionality

* **Authentication System**
  Secure login flow with session persistence and automatic expiration

* **Employee Management**
  Centralized employee table with search, filtering, and sorting

* **Analytics & Metrics**
  Summary cards and interactive charts for workforce insights

* **Responsive Design**
  Mobile-first layout built with Tailwind CSS

* **Theme System**
  Light, dark, and system-based theme preferences with persistence

### Advanced UI & Data Features

* **Real-Time Search**
  Filter employees by name, email, department, or role

* **Advanced Filtering & Sorting**
  Department and status filters with configurable sort options

* **CSV Export**
  Export filtered employee datasets for reporting, audits, and downstream analysis

* **Settings Panel**
  User preferences for theme, pagination, and display behavior

* **Error Handling & Loading States**
  Graceful error boundaries and skeleton loaders

* **Performance Optimizations**
  Lazy-loaded routes and efficient component rendering

---

## 🛠️ Tech Stack

**Frontend**

* React 19
* Vite 7
* Tailwind CSS 3.4
* React Router DOM 7
* Recharts
* Lucide React

**Tooling & Infrastructure**

* ESLint
* Vite build pipeline
* Vercel (deployment)

---

## 📦 Local Setup

Clone the repository:

```
https://github.com/chelsbun/hr-dashboard
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🚀 Deployment

The application is deployed using **Vercel**, leveraging automatic builds for Vite-based projects.

Build for production:

```
npm run build
```

Preview production build:

```
npm run preview
```

---

## 📁 Project Structure

```
src/
 ├─ components/   # Reusable UI components
 ├─ pages/        # Route-level views
 ├─ contexts/     # Global state (theme, auth)
 ├─ data/         # Mock HR datasets
 ├─ App.jsx
 └─ main.jsx
```

---

## 📊 Data & State

* Uses **mock HR datasets** to simulate realistic workforce information
* Client-side state management for filtering, preferences, and sessions
* Structured to support future backend integration with minimal refactoring

---

## 🔮 Planned Enhancements (Not Yet Implemented)

* Real database integration (e.g., PostgreSQL)
* Backend API layer for authentication and data access
* Role-based access control (HR admin vs leadership)
* Scalable, normalized data models for audits and compliance

These enhancements are intended to more closely mirror production HRIS and healthcare IT systems.

---

## 🎯 What This Project Demonstrates

* Building internal-facing enterprise tools
* Translating business and compliance needs into usable UI
* Clean component architecture and separation of concerns
* Performance awareness and deployment polish
* Strong domain alignment with HR, HRIS, and healthcare IT workflows

---

## 👩‍💻 Author

**Chelsea Bonyata**
B.S. Computer Science — University of Houston-Downtown
Focus: HR Tech • Healthcare Software • Analytics-Driven Systems

GitHub: [https://github.com/chelsbun](https://github.com/chelsbun)
Live Demo: [https://hr-dashboard-gray.vercel.app](https://hr-dashboard-gray.vercel.app)

---

## 📄 License

MIT License
