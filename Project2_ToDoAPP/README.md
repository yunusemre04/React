# ✅ ToDoAPP — React Task Manager

A clean and responsive task management application built with **React 18** and **Vite**. Supports full CRUD operations with persistent storage via `localStorage`.

---

## 🚀 Features

- ➕ **Add** new tasks with a simple input field
- 🗑️ **Delete** tasks instantly
- ✏️ **Update** task content inline
- ✅ **Mark as Finished** — toggle task completion status
- ❌ **Mark as Unfinished** — revert completed tasks
- 💾 **Persistent Storage** — tasks are saved in `localStorage` and restored on page reload
- 📱 **Responsive Design** — works on all screen sizes

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | DOM rendering |
| `react-icons` | ^5.2.1 | Task action icons |
| `vite` | ^5.3.4 | Build tool & dev server |

---

## 📁 Project Structure

```
Project2_ToDoAPP/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # App title header
│   │   ├── Operation.jsx    # Core logic: state, CRUD, localStorage
│   │   ├── Task.jsx         # Task list renderer with action buttons
│   │   └── InfoBox.jsx      # Column labels (Status / Task / Operation)
│   ├── App.jsx              # Root component
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles
│   ├── main.jsx             # App entry point
│   └── Tasks.js             # Sample task data
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 Components

### `Header`
Renders the app title **"To Do APP"**.

### `Operation`
The brain of the app. Manages all state and CRUD logic:
- Holds the `tasks` array in `useState`
- Reads/writes tasks to `localStorage` via `useEffect`
- Passes handler functions down to `Task` component

### `Task`
Renders each task row with:
| Icon | Action |
|---|---|
| 🗑️ `MdDelete` | Delete task |
| 🔄 `MdOutlineUpdate` | Update task content |
| ✅ `TiTick` | Mark as finished |
| ❌ `MdCancel` | Mark as unfinished |
| ✔️ `SiTicktick` / ⚠️ `RiErrorWarningFill` | Status indicator |

### `InfoBox`
Displays column headers: **Status**, **Task**, **Operation**.

---

## ⚡ Getting Started

### Prerequisites
- Node.js >= 16
- npm >= 7

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/yunusemre04/React.git

# 2. Navigate to the project folder
cd React/Project2_ToDoAPP

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 💡 How It Works

1. Type a task name in the input field and click **Add Task**
2. Each task shows its current status (✔ finished / ⚠ unfinished)
3. Use the action buttons to manage your tasks
4. All tasks are **automatically saved** to `localStorage` — they persist after page refresh

---

## 👤 Author

**Yunus Emre Acar**
🔗 [github.com/yunusemre04](https://github.com/yunusemre04)

---

⬅️ [Back to Main Repository](../README.md)
