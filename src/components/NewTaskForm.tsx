import { useState } from "react";

function NewTaskForm() {
  const [title, setTitle] = useState("");

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </form>
  );
}
export default NewTaskForm;
