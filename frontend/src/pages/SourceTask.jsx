
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { fetchTasks } from "../services/taskService";
import { ArrowLeft, ExternalLink } from "lucide-react";

function SourceTask() {
    const { taskId } = useParams();

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const filters = {
        "id": taskId
    }

    useEffect(() => {
        const loadTask = async () => {
            try {
                const selectedTask = await fetchTasks(filters);

                if (!selectedTask) {
                    throw new Error("Task not found");
                }

                setTask(selectedTask.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadTask();
    }, [taskId]);

    if (loading) return <div className="source-page">Loading task...</div>;

    if (error) {
        return (
            <div className="source-page">
                <h2>{error}</h2>
                <Link to="/">Return to Dashboard</Link>
            </div>
        );
    }

    return (
        <div className="source-page">
            <header className="source-header">
                <div>
                    <h2>{task.source} Workspace</h2>
                    <p>Task Management Application</p>
                </div>
            </header>

            <main className="source-detail">
                <Link to="/" className="back-link">
                    <ArrowLeft size={16} />
                    Back to Dashboard
                </Link>

                <div className="source-title">
                    <div>
                        <span className="task-id">{task.id}</span>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                    </div>

                    <span className="source-badge">{task.source}</span>
                </div>

                <section className="source-info">
                    <div>
                        <span>Assigned Employee</span>
                        <strong>{task.employee}</strong>
                    </div>

                    <div>
                        <span>Status</span>
                        <strong>{task.status}</strong>
                    </div>

                    <div>
                        <span>Urgency</span>
                        <strong>{task.urgency}</strong>
                    </div>

                    <div>
                        <span>Calculated Priority</span>
                        <strong>{task.priority}</strong>
                    </div>

                    <div>
                        <span>Deadline</span>
                        <strong>
                            {new Date(task.deadline).toLocaleString()}
                        </strong>
                    </div>
                </section>

                <p className="source-note">
                    This is a simulated {task.source} task detail page
                    created for the Employee Task Dashboard assignment.
                </p>
            </main>
        </div>
    );
}

export default SourceTask;
