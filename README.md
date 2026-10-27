# Personal Expense Tracker 💰

A full-stack MERN application that helps users record, manage, and track daily expenses. Users can add, view, edit, and delete expenses and monitor their total spending through a simple, responsive interface.

## 🌐 Live Links

- **Frontend Website:** https://personal-expense-tracker-1-nbme.onrender.com/
- **Backend API — Expenses:** https://personal-expense-tracker-api-6ggc.onrender.com/api/expenses
- **Backend Homepage:** https://personal-expense-tracker-api-6ggc.onrender.com
- **GitHub Repository:** https://github.com/01harsha2006/Personal-Expense-Tracker

## ✨ Features

- Add expenses with title, amount, category, and date.
- View all recorded expenses.
- Edit existing expenses.
- Delete expenses.
- Automatically calculate total spending.
- Validate expense details.
- Responsive user interface.
- Store data in MongoDB Atlas.
- Communicate between frontend and backend using REST APIs.

## 🛠️ Technologies Used

**Frontend**
- React.js
- Vite
- HTML5, CSS3, JavaScript

**Backend**
- Node.js
- Express.js
- Mongoose
- REST API

**Database and Deployment**
- MongoDB Atlas
- Render
- GitHub

## 📁 Project Structure

```text
Personal-Expense-Tracker/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB Atlas account or a MongoDB instance
- Git

### 1. Clone the repository

```bash
git clone https://github.com/01harsha2006/Personal-Expense-Tracker.git
cd Personal-Expense-Tracker
```

### 2. Configure and run the backend

```bash
cd backend
npm install
```

Create a `backend/.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace the placeholder with your MongoDB connection string. Never commit real database credentials to a public repository.

Start the backend:

```bash
node server.js
```

The backend runs locally at `http://localhost:5000` when the port is available.

### 3. Configure and run the frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
```

Create a `frontend/.env` file:

```env
VITE_API_URL=http://localhost:5000/api/expenses
```

Start the frontend:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## 🔗 Backend API Endpoints

Base URL: `https://personal-expense-tracker-api-6ggc.onrender.com`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/expenses` | Retrieve all expenses |
| POST | `/api/expenses` | Add a new expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

The live GET endpoint is:

https://personal-expense-tracker-api-6ggc.onrender.com/api/expenses

It returns expense records in JSON format. An empty array (`[]`) means there are currently no records.

### Expense Data Fields

- `title` — expense name or description.
- `amount` — amount spent.
- `category` — expense category.
- `date` — expense date.

## 🚀 Deployment

The project is hosted using Render, with MongoDB Atlas as its database.

- **Frontend:** Render Static Site
- **Backend:** Render Web Service
- **Database:** MongoDB Atlas

The frontend uses the `VITE_API_URL` environment variable to connect to the hosted backend. The backend uses `MONGODB_URI` to connect to MongoDB Atlas.

## 🔒 Security

- Keep database credentials in environment variables.
- Do not commit real `.env` files or passwords to GitHub.
- Configure MongoDB Atlas network access carefully.
- Validate incoming data on the server.

## 🎯 Project Objective

To build a responsive expense management application using the MERN stack and demonstrate frontend development, REST API integration, CRUD operations, database connectivity, and cloud deployment.

## 👨‍💻 Author

**Harsha Vardhan**

GitHub: https://github.com/01harsha2006

---

*Developed as a Full Stack Development project using the MERN stack.*
