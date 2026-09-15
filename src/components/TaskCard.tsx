type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  asignee: string;
  category: string;
  priority: string;
};

function TaskCard({
  title,
  id,
  description,
  asignee,
  category,
  priority,
}: TaskCardProps) {
  return (
    <article>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Ansvarig: {asignee}</p>
      <p>Prioritet: {priority}</p>
    </article>
  );
}
export default TaskCard;
