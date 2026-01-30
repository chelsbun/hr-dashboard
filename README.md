HR Analytics Dashboard

A modern HR Analytics Dashboard designed to mirror real-world internal tools used by HR, HRIS, and healthcare IT teams. This project demonstrates frontend engineering skills, product thinking, and domain awareness in workforce data and analytics.

Note: This is a portfolio project currently using mock HR data to demonstrate frontend architecture, data visualization, and internal-tool UX patterns. The system is designed to be extended with real backend services and databases.

⸻

🚀 Live Demo

https://hr-dashboard-gray.vercel.app

⸻

🏥 Real-World Use Case

This dashboard simulates internal tools used by HR and healthcare organizations to:
	•	Monitor workforce composition and departmental distribution
	•	Quickly locate employee records during audits or reporting
	•	Visualize trends for staffing and organizational planning
	•	Provide leadership with clear, accessible workforce metrics

The emphasis is on clarity, usability, and decision support, rather than surface-level visuals.

⸻

✨ Key Features

Core Functionality

Authentication System
Secure login flow with session persistence and automatic expiration

Employee Management
Centralized employee table with search, filtering, and sorting

Analytics & Metrics
Interactive charts and summary cards for workforce insights

Responsive Design
Mobile-first layout built with Tailwind CSS

Theme System
Light, dark, and system-based theme preferences with persistence

Advanced UI Features

Real-Time Search
Filter employees by name, email, department, or role

Advanced Filtering & Sorting
Department and status filters with configurable sort options

CSV Export
Export filtered employee data for reporting or audits

Settings Panel
User preferences for theme, pagination, and display behavior

Error Handling & Loading States
Graceful error boundaries and skeleton loaders

Performance Optimizations
Lazy-loaded routes and efficient component rendering

⸻

🛠️ Tech Stack

Frontend: React 19, Vite 7
Styling: Tailwind CSS 3.4
Routing: React Router DOM 7
Charts: Recharts
Icons: Lucide React
Tooling: ESLint, Vite build pipeline

⸻

📦 Local Setup

Clone the repository
https://github.com/chelsbun/hr-dashboard

Install dependencies
npm install

Run development server
npm run dev

Open in browser
http://localhost:5173

⸻

🚀 Deployment

The application is deployed using Vercel, leveraging automatic builds for Vite-based projects.

Build for production
npm run build

Preview production build
npm run preview

⸻

📁 Project Structure

src/
components/ – reusable UI components
pages/ – route-level views
contexts/ – global state (theme, auth)
data/ – mock HR datasets
App.jsx
main.jsx

⸻

📊 Data & State
	•	Uses mock HR datasets to simulate realistic workforce information
	•	Client-side state management for filtering, preferences, and sessions
	•	Structured to support future backend integration with minimal refactoring

⸻

🔮 Planned Enhancements

Real Database Integration
Replace mock datasets with a relational database (e.g., PostgreSQL)

Backend API Layer
Node.js API for authentication, data access, and business logic

Role-Based Access Control (RBAC)
Differentiated access for HR administrators, managers, and standard users

Scalable Data Models
Normalized schemas designed for growth, audits, and compliance-driven reporting

These enhancements are intended to more closely mirror production HRIS and healthcare IT systems.

⸻

🎯 What This Project Demonstrates
	•	Building internal-facing enterprise tools
	•	Translating business and compliance needs into usable UI
	•	Clean component architecture and separation of concerns
	•	Deployment, performance awareness, and polish
	•	Domain alignment with HR, HRIS, and healthcare IT workflows

⸻

👩‍💻 Author

Chelsea Bonyata
B.S. Computer Science — University of Houston–Downtown

GitHub: https://github.com/chelsbun
Live Demo: https://hr-dashboard-gray.vercel.app

⸻

📄 License

MIT License
