import { Bell, Search } from "lucide-react";

function Navbar() {
    return (
        <header className="navbar">
            <div>
                {/* <p className="breadcrumb">Workspace / Overview</p> */}
                <h2>Employee Task Management System</h2>
            </div>

            <div className="navbar-right">
                <button className="icon-button" aria-label="Notifications">
                    <Bell size={20} />
                </button>

                <div className="user-profile">
                    <div className="avatar">AD</div>
                    <div>
                        <strong>Admin</strong>
                        <span>Administrator</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;