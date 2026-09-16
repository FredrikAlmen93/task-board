import NewTaskForm from "../components/NewTaskForm";
import type { Task } from "../types/Task";

function NewTaskPage() {
  const handleCreateTask = (task: Task) => {
    console.log("New task created:", task);
  };

  return (
    <main>
      <h1>Skapa ny task</h1>
      <NewTaskForm onCreateTask={handleCreateTask} />
    </main>
  );
}

export default NewTaskPage;
