import { ExternalLink, ArrowUpDown } from "lucide-react";

function TaskTable({
    tasks,
    currentPage,
    totalPages,
    onPageChange,
    pageSize,
    setFilters,
    onPageSizeChange
}) {
    const formatDate = (date) => {
        return new Date(date).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const updateFilter = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const changePagination = (e) => {
        onPageSizeChange(Number(e.target.value))
        updateFilter("limit", e.target.value)
    }

    const isOverdue = (task) => {
        return (
            task.status !== "Completed" &&
            new Date(task.deadline) < new Date()
        );
    };

    return (
        <div className="table-wrapper">
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Employee</th>
                        <th>Source</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                    <tbody>
                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <tr key={`${task.source}-${task.id}`}>
                                <td>
                                    <div className="task-title">
                                        <strong>{task.title}</strong>
                                        <span>{task.id}</span>
                                    </div>
                                </td>

                                <td>{task.employee}</td>

                                <td>
                                    <span className={`source-badge ${task.source.toLowerCase()}`}>
                                        {task.source}
                                    </span>
                                </td>

                                <td>
                                    <span className={
                                        isOverdue(task) ? "overdue-date" : ""
                                    }>
                                        {formatDate(task.deadline)}
                                    </span>
                                </td>

                                <td>
                                    <span className={`priority-badge ${task.priority.toLowerCase()}`}>
                                        {task.priority}
                                    </span>
                                </td>

                                <td>
                                    <span className={`status-badge ${task.status.toLowerCase().replace(" ", "-")}`}>
                                        {task.status}
                                    </span>
                                </td>

                                <td>
                                    <a
                                        href={task.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="source-link"
                                    >
                                        Open <ExternalLink size={14} />
                                    </a>
                                </td>
                            </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="empty-state">
                                    No tasks found.
                                </td>
                            </tr>
                        )}
                    </tbody>
            </table>
            <div className="pagination-container">

                <div className="pagination-info">
                    <span>Rows per page:</span>

                    <select
                        value={pageSize}
                        onChange={(e) => changePagination(e)}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>

                <div className="pagination-controls">

                    <span>
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        Previous
                    </button>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        Next
                    </button>

                </div>
            </div>
        </div>
    );
}

export default TaskTable;