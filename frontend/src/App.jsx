
import { useEffect, useState } from "react";
import "./App.css";


const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api/expenses";

const emptyForm = {
  title: "",
  amount: "",
  category: "Food",
  date: new Date().toISOString().slice(0, 10),
};

function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadExpenses() {
    try {
      const res = await fetch(API);

      if (!res.ok) {
        throw new Error("Could not load expenses");
      }

      setExpenses(await res.json());
      setMessage("");
    } catch {
      setMessage(
        "Cannot reach backend. Check that the server is running."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadExpenses();
  }, []);

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const amount = Number(form.amount);

    if (
      !form.title.trim() ||
      !form.date ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setMessage(
        "Enter a title, valid positive amount, and date."
      );
      return;
    }

    try {
      const res = await fetch(
        editingId ? `${API}/${editingId}` : API,
        {
          method: editingId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            title: form.title.trim(),
            amount,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Operation failed");
      }

      setMessage(
        editingId
          ? "Expense updated successfully!"
          : "Expense added successfully!"
      );

      setForm(emptyForm);
      setEditingId(null);

      await loadExpenses();
    } catch (err) {
      setMessage(err.message || "Could not save expense.");
    }
  }

  function startEdit(expense) {
    setEditingId(expense._id);

    setForm({
      title: expense.title,
      amount: String(expense.amount),
      category: expense.category,
      date: new Date(expense.date).toISOString().slice(0, 10),
    });

    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function deleteExpense(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Delete failed");
      }

      setMessage("Expense deleted successfully!");

      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
      }

      await loadExpenses();
    } catch (err) {
      setMessage(err.message || "Could not delete expense.");
    }
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
    setMessage("");
  }

  return (
    <main className="app">
      <header className="hero">
        <div className="brand">
          Personal Expense Tracker
        </div>

        <p>SMART MONEY MANAGEMENT</p>

        <h1>Know where your money goes.</h1>

        <p className="subtitle">
          Track your daily spending, one expense at a time.
        </p>
      </header>

      <section className="summary">
        <div>
          <span className="eyebrow">TOTAL AMOUNT SPENT</span>

          <h2>
            ₹
            {total.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>

          <span className="muted">
            {expenses.length} recorded expenses
          </span>
        </div>

        <div className="summary-icon">₹</div>
      </section>

      <section className="form-card">
        <h2>
          {editingId ? "Edit Expense" : "Add a New Expense"}
        </h2>

        <p className="muted">
          Enter your expense details below.
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Expense title

            <input
              name="title"
              placeholder="e.g. Lunch with friends"
              value={form.title}
              onChange={handleChange}
              required
              maxLength={100}
            />
          </label>

          <div className="form-grid">
            <label>
              Amount (₹)

              <input
                name="amount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.00"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Category

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                {[
                  "Food",
                  "Travel",
                  "Bills",
                  "Shopping",
                  "Other",
                ].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Expense date

            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>

          <div className="actions">
            <button className="primary" type="submit">
              {editingId ? "Save Changes" : "+ Add Expense"}
            </button>

            {editingId && (
              <button
                className="secondary"
                type="button"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {message && (
          <p className="message" role="status">
            {message}
          </p>
        )}
      </section>

      <section className="list-section">
        <div className="list-heading">
          <div>
            <h2>Your Expenses</h2>
            <p className="muted">
              Your latest spending activity
            </p>
          </div>

          <span className="count">
            {expenses.length} total
          </span>
        </div>

        {loading ? (
          <p>Loading expenses...</p>
        ) : expenses.length === 0 ? (
          <div className="empty">
            <span>◎</span>
            <h3>No expenses yet</h3>
            <p>
              Add your first expense above to get started.
            </p>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Expense</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense._id}>
                    <td className="expense-title">
                      {expense.title}
                    </td>

                    <td>
                      <span className="category">
                        {expense.category}
                      </span>
                    </td>

                    <td>
                      {new Date(
                        expense.date
                      ).toLocaleDateString("en-IN")}
                    </td>

                    <td className="amount">
                      ₹
                      {Number(expense.amount).toLocaleString(
                        "en-IN",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>

                    <td className="row-actions">
                      <button
                        type="button"
                        className="edit"
                        onClick={() => startEdit(expense)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="delete"
                        onClick={() =>
                          deleteExpense(expense._id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <footer>
        <span>Personal Expense Tracker</span>
        <span>Simple • Smart • Organized</span>
      </footer>
    </main>
  );
}

export default App;
