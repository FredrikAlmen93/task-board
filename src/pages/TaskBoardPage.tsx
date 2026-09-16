import { useEffect, useState } from "react";
import Column from "../components/Column";
import TaskCard from "../components/TaskCard";
import type { Task } from "../types/Task";

function TaskBoardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/tasks");

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const result: Task[] = await response.json();
        setTasks(result);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const todoTasks = tasks.filter((task) => task.status === "To-Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <>
      <main>
        <h1>Task Board</h1>

        <div>
          <Column title="To-Do">
            {todoTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                prioritet={task.prioritet}
              />
            ))}
          </Column>
          <Column title="In Progress">
            {inProgressTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                prioritet={task.prioritet}
              />
            ))}
          </Column>
          <Column title="Done">
            {doneTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                prioritet={task.prioritet}
              />
            ))}
          </Column>
        </div>
      </main>
    </>
  );
}

export default TaskBoardPage;
