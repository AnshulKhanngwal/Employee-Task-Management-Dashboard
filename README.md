# Employee Task Dashboard

A responsive employee task management dashboard that consolidates tasks from two different sources — CRM and Helpdesk — into a single interface. It helps users track task status, monitor deadlines, identify priorities, and filter tasks based on employees and other criteria.

## Features

- **Unified Task Management:** Displays tasks from CRM and Helpdesk in one dashboard.
- **Task Prioritization:** Automatically calculates task priority based on urgency and deadlines.
- **Task Filtering:** Filter tasks by employee, status, and source.
- **Search:** Search tasks using their title, ID, or employee name.
- **Task Status Tracking:** View Pending, In Progress, and Completed tasks.
- **Deadline Monitoring:** Identify overdue tasks.
- **Source Navigation:** Open individual tasks through their respective CRM or Helpdesk links.
- **Dashboard Statistics:** View total, pending, in-progress, completed, and overdue task counts.
- **Pagination:** Navigate through tasks in smaller sets.
- **Error Handling:** Handles API errors and loading states.
- **Responsive Design:** Works across desktop, tablet, and mobile screens.

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React

### Backend
- Node.js
- Express.js
- JavaScript
- REST API
- JSON files for mock task data

## Project Structure

```text
employee-task-dashboard/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── data/
│   │   ├── crmTasks.json
│   │   └── helpdeskTasks.json
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- Git (optional, for cloning the repository)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AnshulKhanngwal/Employee-Task-Management-Dashboard.git
```

Navigate into the project directory:

```bash
cd Employee-Task-Management-Dashboard
```

### 2. Set Up the Backend

Open a terminal and navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend development server:

```bash
npm run dev
```

The backend server will start at:

```text
http://localhost:5000
```

You can verify that the server is running by opening `http://localhost:5000` in your browser.

### 3. Set Up the Frontend

Open a **new terminal** from the project root directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will be available at the URL displayed in your terminal, usually:

```text
http://localhost:5173
```

Open this URL in your browser to access the dashboard.

## API Endpoints

The backend exposes the following API endpoint:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Fetch all tasks |
| GET | `/api/tasks?employee=name` | Filter tasks by employee |
| GET | `/api/tasks?status=Pending` | Filter tasks by status |
| GET | `/api/tasks?source=CRM` | Filter tasks by source |
| GET | `/api/tasks?limit=5&offset=0` | Fetch paginated tasks |
| GET | `/api/tasks?id=CRM-101` | Fetch a specific task by ID |

*Note: The API supports combining filters and pagination. The single-task query assumes the backend controller supports the `id` query parameter.*

## Mock Data

The project currently uses local JSON files to simulate data from two external applications:

- `backend/data/crmTasks.json`
- `backend/data/helpdeskTasks.json`

These files contain sample tasks with employee information, status, urgency, deadlines, and source application details.

No external API credentials or database setup are required.

## Running Both Applications

For local development, keep two terminals running:

| Application | Command | URL |
|---|---|---|
| Backend | `npm run dev` (inside `backend/`) | `http://localhost:5000` |
| Frontend | `npm run dev` (inside `frontend/`) | `http://localhost:5173` |

## Future Improvements

- Integration with real CRM and Helpdesk APIs.
- Authentication and role-based access control.
- Database integration for persistent task management.
- Real-time task updates.
- Advanced reporting and analytics.

## Author

**Anshul Khanngwal**

GitHub: [AnshulKhanngwal](https://github.com/AnshulKhanngwal)

---

*Built as a practical assignment demonstrating frontend development, REST API integration, task prioritization, and responsive dashboard design.*# Employee-Task-Management-Dashboard
Employee Task Management Dashboard is a fullstack dashboard without database integration fetching data from json files and provides functionality like filtering tasks on basis of employee, status and source.
