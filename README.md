<<<<<<< HEAD
# 🚀 Mini CRM (Client Lead Management System)

A simple Client Relationship Management (CRM) system built using React and Firebase.

This application allows businesses to manage leads from contact forms, track their status, and follow up with potential clients.

---

## 🎯 Features

* 🔐 Admin authentication (Firebase Auth)
* ➕ Add new leads (name, email)
* 📋 View all leads in a dashboard
* 🔄 Update lead status (new → contacted → converted)
* 📝 Add follow-up notes
* 🔍 Search leads by name
* 📊 Analytics (total leads & converted leads)

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Firebase
* Database: Firestore
* Authentication: Firebase Auth
* Editor: VS Code

---

## 🔐 Admin Login

Use the following credentials to log in:

Email: [admin@test.com](mailto:admin@test.com)
Password: 123456

---

## ⚙️ Installation & Setup

1. Clone the repository:

git clone YOUR_REPO_LINK

2. Navigate into the project:

cd mini-crm

3. Install dependencies:

npm install

4. Start the development server:

npm start

---

## 🔥 Firebase Setup

To run this project, you must connect your own Firebase project:

1. Go to Firebase Console
2. Create a new project
3. Enable Authentication (Email/Password)
4. Create Firestore Database
5. Replace the config inside:

src/firebase.js

with your own Firebase config.

---

## 📁 Project Structure

src/
│── components/
│   ├── Login.js
│   ├── Dashboard.js
│   ├── AddLead.js
│── firebase.js
│── App.js

---

## 💡 Future Improvements

* 📱 Mobile responsive UI
* 📊 Charts & analytics dashboard
* 🔐 Protected routes
* 🌐 Deployment (Netlify / Firebase Hosting)

---

## 📌 Author

Built by Luke Kadima

---

## 💼 Purpose

This project was built as a real-world simulation of how businesses manage leads and clients.

--