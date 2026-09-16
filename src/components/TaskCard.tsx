type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  prioritet: string;
};

function TaskCard({
  title,
  description,
  assignee,
  category,
  prioritet,
}: TaskCardProps) {
  return (
    <article>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Ansvarig: {assignee}</p>
      <p>Prioritet: {prioritet}</p>
    </article>
  );
}
export default TaskCard;
