🏢 Project Name

Megaplex Prime — Real Estate Website with Admin CMS

📌 Project Overview

This project is a full-stack MERN Real Estate Website developed as part of a frontend + backend assignment.
It replicates the provided real-estate landing page and includes a fully functional Admin Panel (CMS) to manage website content dynamically.
The admin can edit all text content across the website without modifying code.
Objective: Build an exact replica of the given real-estate webpage along with a dynamic admin panel. 


🚀 Live Demo

🌐 Frontend URL: https://your-frontend.vercel.app](https://megaplex-738a.vercel.app/)

🔗 Backend API: https://your-backend.onrender.com](https://megaplex-3ujz.onrender.com)

🧰 Tech Stack
Frontend

React.js
TypeScript
Tailwind CSS
Axios
Swiper.js
Animate.css

Backend

Node.js
Express.js
Database
MongoDB (Mongoose ODM)
Hosting
Frontend → Vercel
Backend → Render


🔐 Admin Login Credentials
Email: admin@gmail.com
Password: 1234


(Simple credential login — no JWT used as per requirement.)

🧩 Features
🌐 Website (User Side)

Hero Section
Project Overview
Pricing Section
Amenities
Floor Plans
Developer Section
Construction Updates
FAQs
Buildings Carousel
Responsive Design
Smooth Scrolling Navigation

🛠️ Admin Panel (CMS)
After login, admin can edit:
Hero Section text
Project Name
Pricing details
Address
About Project content
Developer content
Developer statistics
Construction Updates labels
FAQ questions & answers

Only text content is editable — images remain static. 

📂 Folder Structure
megaplex-prime/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── sections/
│   │   ├── components/
│   │   ├── pages/
│   │   └── routes/
│
├── server/                 # Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── schema/
│   ├── db/
│   └── server.js
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/soheb21/megaplex-prime.git
cd megaplex-prime

2️⃣ Setup Backend
cd server
npm install


Create .env

PORT=8000
MONGO_URI=your_mongodb_connection


Run server:

npm run dev

3️⃣ Setup Frontend
cd client
npm install
npm run dev

🔌 API Endpoints
Get Website Content
GET /api/content

Update Website Content
POST /api/content

Admin Login
POST /api/login

🗄️ Database Schema (CMS)

Key fields stored in MongoDB:

Hero headings
Project names
Pricing
Address
About content
Developer content
Developer stats
Construction updates (array)
FAQs (array)

📱 Responsive Design

Mobile First
Tablet optimized
Desktop optimized
Sticky navbar
Mobile sidebar menu

🎨 UI Highlights

Swiper carousel
Gradient cards
Smooth scroll navigation
Animated sections
CMS-driven content rendering

☁️ Deployment
Frontend (Vercel)

Root Directory → client

Build Command → npm run build

Output → dist

Backend (Render)

Root Directory → server

Start Command → node server.js

🧪 Admin CMS Workflow

Admin logs in
Dashboard loads CMS data
Admin edits text fields
Data saved to MongoDB
Frontend auto-updates via API

📖 Assignment Compliance

This project fulfills all requirements:

Real estate webpage replica
Admin CMS panel
Editable text content
Fixed login credentials
MERN stack usage
Live deployment


👨‍💻 Author

Ansari Shoeb
Full Stack MERN Developer

GitHub: https://github.com/soheb21
