import { useState } from "react";
import type React from "react";
import type { NewTask, Task } from "../types/Task";

type NewTaskFormProps = {
  onCreateTask: (task: Task) => void;
};

function NewTaskForm({ onCreateTask }: NewTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [prioritet, setprioritet] = useState("Låg");

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: NewTask = {
      title,
      description,
      assignee,
      category,
      prioritet,
    };

    try {
      const response = await fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const task: Task = await response.json();

      onCreateTask(task);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titel</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Beskrivning</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="assignee">Ansvarig</label>
        <input
          id="assignee"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Kategori</label>
        <input
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="prioritet">Prioritet</label>
        <select
          id="prioritet"
          value={prioritet}
          onChange={(event) => setprioritet(event.target.value)}
        >
          <option value="Låg">Låg</option>
          <option value="Medium">Medium</option>
          <option value="Hög">Hög</option>
        </select>
      </div>

      <button type="submit">Skapa task</button>
    </form>
  );
}
export default NewTaskForm;
