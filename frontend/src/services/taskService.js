const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = async (filters = {}) => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
        if (value) {
            params.append(key, value);
        }
    });

    const response = await fetch(`${API_URL}?${params.toString()}`);

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    const result = await response.json();

    return result;
};