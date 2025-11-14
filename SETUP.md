# Reddy Hotel - Complete Setup Guide

## 🚀 Quick Start

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Setup Backend Server
```bash
cd server
npm install
cp .env.example .env
# Edit .env and change ADMIN_PASSWORD and JWT_SECRET
npm start
```

### 3. Start Frontend
```bash
# In root directory
npm run dev
```

## 📁 Project Structure

```
reddyhotel/
├── src/                    # React frontend
│   ├── pages/
│   │   └── Admin.tsx      # Admin panel (CRUD operations)
│   ├── home.tsx           # Home page
│   ├── contact.tsx        # Contact form (saves to backend)
│   ├── projects.tsx       # Projects page
│   └── ...
├── server/                # Backend API
│   ├── server.js         # Express server
│   ├── data/             # JSON data storage
│   └── package.json
└── public/
    └── images/           # Hotel images
```

## 🔐 Admin Access

1. Start the backend server (port 8000)
2. Navigate to: `http://localhost:3000/admin`
3. Login with:
   - Username: `admin`
   - Password: `admin123` (change in server/.env)

## ✨ Features

- ✅ Contact form saves to backend
- ✅ Admin panel with authentication
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Search and filter contacts
- ✅ Status management (New, Contacted, Resolved)
- ✅ Notes system for contacts
- ✅ Four Seasons-inspired elegant design

## 🎨 Design

The website is designed with a clean, professional aesthetic inspired by Four Seasons hotels - elegant typography, sophisticated layouts, and premium user experience.

