# Personal Expense Tracker 💰

A full-stack web application built using the MERN stack that helps users record, manage, and track their daily expenses. The application provides a simple interface for adding expenses, viewing expense records, editing or deleting entries, and calculating total spending.

## 🌐 Live Demo

- **Frontend:** https://personal-expense-tracker-1-nbme.onrender.com/
- **Backend API:** https://personal-expense-tracker-api-6ggc.onrender.com
- **GitHub Repository:** https://github.com/01harsha2006/Personal-Expense-Tracker

## ✨ Features

- Add new expenses with title, amount, category, and date.
- View all recorded expenses.
- Edit existing expense records.
- Delete unwanted expenses.
- Automatically calculate total expenses.
- Validate expense details before submission.
- Responsive user interface for different screen sizes.
- Store expense records in MongoDB Atlas.
- Connect the React frontend to the Express backend through REST APIs.

## 🛠️ Technologies Used

**Frontend**
- React.js
- Vite
- HTML5
- CSS3
- JavaScript

**Backend**
- Node.js
- Express.js
- Mongoose
- REST API

**Database**
- MongoDB Atlas

**Deployment**
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
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project locally:

- Node.js and npm
- A MongoDB Atlas account or MongoDB instance
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/01harsha2006/Personal-Expense-Tracker.git
cd Personal-Expense-Tracker
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your own MongoDB connection string. Keep your real `.env` file private and never commit database credentials to GitHub.

Start the backend:

```bash
node server.js
```

The backend should run at `http://localhost:5000`, provided the port is available.

### 3. Set Up the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api/expenses
```

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## 🔗 API Endpoints

The backend provides REST API endpoints for expense management.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/expenses` | Retrieve all expenses |
| POST | `/api/expenses` | Add a new expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

### Expense Data Fields

Each expense contains:

- `title` — name or description of the expense.
- `amount` — amount spent.
- `category` — expense category.
- `date` — date of the expense.

## 🚀 Deployment

The application is deployed using Render.

- **Frontend:** Render Static Site
- **Backend:** Render Web Service
- **Database:** MongoDB Atlas

The frontend uses the `VITE_API_URL` environment variable to communicate with the hosted backend. The backend uses `MONGODB_URI` to connect to MongoDB Atlas.

## 🔒 Security

- Database credentials should be stored in environment variables.
- Do not commit real `.env` files or database passwords to a public repository.
- Configure MongoDB Atlas network access carefully.
- Validate incoming API data on the server.

## 🎯 Project Objective

The objective of this project is to develop a simple and responsive expense management application using the MERN stack. It demonstrates frontend development, REST API integration, database connectivity, CRUD operations, and cloud deployment.

## 👩‍💻 Author

**Harsha Vardhan**

GitHub: https://github.com/01harsha2006

---

*Developed as a Full Stack Development project using the MERN stack.*
