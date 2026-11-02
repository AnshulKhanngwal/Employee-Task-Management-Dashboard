const crmTasks = require("../data/crmTasks.json");
const helpdeskTasks = require("../data/helpdeskTasks.json");

const getAllTasks = () => {
    const tasks = [...crmTasks, ...helpdeskTasks];

    return tasks.map((task) => {
        const priority = calculatePriority(task);

        return {
            ...task,
            priority: priority.label,
            priorityScore: priority.score
        };
    });
};

const getTask = (id) =>  {
    const tasks = [...crmTasks, ...helpdeskTasks]
    const task = tasks.find((task) => task.id === id);
    const priority = calculatePriority(task);
    return {
            ...task,
            priority: priority.label,
            priorityScore: priority.score
        };
}

const calculatePriority = (task) => {
    const urgencyScores = {
        Critical: 4,
        High: 3,
        Medium: 2,
        Low: 1
    };

    const now = new Date();
    const deadline = new Date(task.deadline);

    const hoursRemaining = (deadline - now) / (1000 * 60 * 60);

    let deadlineScore;

    if (hoursRemaining < 0) {
        deadlineScore = 4;
    } else if (hoursRemaining <= 24) {
        deadlineScore = 3;
    } else if (hoursRemaining <= 72) {
        deadlineScore = 2;
    } else {
        deadlineScore = 1;
    }

    const urgencyScore = urgencyScores[task.urgency] || 1;

    const score = urgencyScore * 2 + deadlineScore;

    let label;

    if (score >= 10) {
        label = "Critical";
    } else if (score >= 8) {
        label = "High";
    } else if (score >= 5) {
        label = "Medium";
    } else {
        label = "Low";
    }

    return { label, score };
};

const filterTasks = (filters = {}) => {
    let tasks = getAllTasks();

    const { employee, status, source } = filters;

    if (employee) {
        tasks = tasks.filter(
            (task) => task.employee === employee
        );
    }

    if (status) {
        tasks = tasks.filter(
            (task) => task.status === status
        );
    }

    if (source) {
        tasks = tasks.filter(
            (task) => task.source.toLocaleLowerCase() === source.toLocaleLowerCase()
        );
    }

    return tasks;
};

module.exports = {
    getTask,
    getAllTasks,
    filterTasks
};