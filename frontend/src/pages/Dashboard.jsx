import { useEffect, useMemo, useState } from "react";

import {fetchTasks}  from "../services/taskService";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TaskFilters from "../components/TaskFilters";
import TaskTable from "../components/TaskTable";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const [filters, setFilters] = useState({
        search: "",
        employee: "",
        status: "",
        source: "",
        limit: 5,
        offset: 0
    });

    useEffect(() => {
        const loadTasks = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await fetchTasks(filters);
                setTasks(data.data);
                setCount(data.count);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadTasks();
    }, [filters]);

    useEffect(() => {
        setCurrentPage(1);
    }, [pageSize]);

    const employees = useMemo(() => {
        return [...new Set(tasks.map(task => task.employee))].sort();
    }, [tasks]);

    const totalPages = Math.max(
        1,
        Math.ceil(count / pageSize)
    );

    return (
        <div className="app-layout">
            <Sidebar setFilters={setFilters}/>

            <main className="main-content">
                <Navbar />

                <div className="dashboard-content">
                    {loading ? (
                        <div className="message-state">
                            Loading dashboard...
                        </div>
                    ) : error ? (
                        <div className="message-state error-state">
                            {error}
                            <button onClick={() => window.location.reload()}>
                                Retry
                            </button>
                        </div>
                    ) : (
                        <>
                            <SummaryCards tasks={tasks} />

                            <section className="tasks-section" id="tasks">
                                <div className="section-heading">
                                    <div>
                                        <h2>All Tasks</h2>
                                        <p>
                                            Manage and track tasks from
                                            CRM and Helpdesk.
                                        </p>
                                    </div>

                                    <span className="task-count">
                                        {tasks.length} Tasks
                                    </span>
                                </div>

                                <TaskFilters
                                    filters={filters}
                                    setFilters={setFilters}
                                    employees={employees}
                                />

                                <TaskTable
                                    tasks={tasks}
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                    pageSize={pageSize}
                                    filters={filters}
                                    setFilters={setFilters}
                                    onPageSizeChange={setPageSize}
                                />
                            </section>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Dashboard;