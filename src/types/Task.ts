export type TaskStatus = "To-Do" | "In Progress" | "Done";

export type Task = {
    id: number;
    title: string;
    description: string;
    assignee: string;
    category: string;
    priority: string;
    status: TaskStatus;
};