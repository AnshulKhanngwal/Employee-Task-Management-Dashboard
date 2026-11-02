
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SourceTask from "./pages/SourceTask";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                    path="/crm/tasks/:taskId"
                    element={<SourceTask />}
                />
                <Route
                    path="/helpdesk/tickets/:taskId"
                    element={<SourceTask />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
