import { useState } from "react";

function NewTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      title,
      description,
      assignee,
      category,
      priority,
    });
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
        <label htmlFor="priority">Prioritet</label>
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
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
