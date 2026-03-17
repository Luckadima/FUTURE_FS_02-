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



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
