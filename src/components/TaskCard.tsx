type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  priority: string;
};

function TaskCard({
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProps) {
  return (
    <article>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Ansvarig: {assignee}</p>
      <p>Prioritet: {priority}</p>
    </article>
  );
}
export default TaskCard;
