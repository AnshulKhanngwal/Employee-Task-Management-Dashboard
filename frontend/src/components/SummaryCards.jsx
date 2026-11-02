import {
    ListTodo,
    Clock,
    CircleCheck,
    AlertTriangle
} from "lucide-react";

function SummaryCards({ tasks }) {
    const total = tasks.length;

    const pending = tasks.filter(
        task => task.status === "Pending"
    ).length;

    const inProgress = tasks.filter(
        task => task.status === "In Progress"
    ).length;

    const completed = tasks.filter(
        task => task.status === "Completed"
    ).length;

    const overdue = tasks.filter(
        task =>
            task.status !== "Completed" &&
            new Date(task.deadline) < new Date()
    ).length;

    const cards = [
        {
            title: "Total Tasks",
            value: total,
            icon: ListTodo,
            color: "blue"
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock,
            color: "orange"
        },
        {
            title: "In Progress",
            value: inProgress,
            icon: AlertTriangle,
            color: "purple"
        },
        {
            title: "Completed",
            value: completed,
            icon: CircleCheck,
            color: "green"
        },
        {
            title: "Overdue",
            value: overdue,
            icon: AlertTriangle,
            color: "red"
        }
    ];

    return (
        <section className="summary-grid">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div className="summary-card" key={card.title}>
                        <div>
                        <div className={`summary-icon ${card.color}`}>
                            <Icon size={21} />
                        </div>
                        <p>{card.title}</p>
                        </div>
                        <h2>{card.value}</h2>
                    </div>
                );
            })}
        </section>
    );
}

export default SummaryCards;