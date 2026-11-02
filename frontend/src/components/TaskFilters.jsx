import { Search, SlidersHorizontal } from "lucide-react";

function TaskFilters({ filters, setFilters, employees }) {
    const updateFilter = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="filter-bar">
            <div className="search-box">
                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={filters.search}
                    onChange={e =>
                        updateFilter("search", e.target.value)
                    }
                />
            </div>

            <div className="filter-controls">
                <SlidersHorizontal size={18} />

                <select
                    value={filters.employee}
                    onChange={e =>
                        updateFilter("employee", e.target.value)
                    }
                >
                    <option value="">All Employees</option>

                    {employees.map(employee => (
                        <option key={employee} value={employee}>
                            {employee}
                        </option>
                    ))}
                </select>

                <select
                    value={filters.status}
                    onChange={e =>
                        updateFilter("status", e.target.value)
                    }
                >
                    <option value="">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <select
                    value={filters.source}
                    onChange={e =>
                        updateFilter("source", e.target.value)
                    }
                >
                    <option value="">All Sources</option>
                    <option value="CRM">CRM</option>
                    <option value="Helpdesk">Helpdesk</option>
                </select>
            </div>
        </div>
    );
}

export default TaskFilters;