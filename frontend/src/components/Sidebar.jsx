import {
    LayoutDashboard,
    ListTodo,
    BriefcaseBusiness,
    Headset,
    Settings
} from "lucide-react";

function Sidebar({setFilters}) {
    const updateFilter = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-icon">T</div>
                <h2>ETMS</h2>
            </div>

            <p className="sidebar-label">WORKSPACE</p>

            <nav>
                <button className = "nav-link" onClick={() => updateFilter("source", "")}>
                    <LayoutDashboard size={19} />
                    Overview
                </button>

                <button className = "nav-link" onClick={() => updateFilter("source", "")}>
                    <ListTodo size={19} />
                    All Tasks
                </button>

                <button className = "nav-link" onClick={() => updateFilter("source", "CRM")}>
                    <BriefcaseBusiness size={19} />
                    CRM Tasks
                </button>

                <button className = "nav-link" onClick={() => updateFilter("source", "Helpdesk")}>
                    <Headset size={19} />
                    Helpdesk Tasks
                </button>
            </nav>

            <div className="sidebar-bottom">
                <a href="#" className="nav-link">
                    <Settings size={19} />
                    Settings
                </a>
                <p>Employee Task Dashboard</p>
            </div>
        </aside>
    );
}

export default Sidebar;