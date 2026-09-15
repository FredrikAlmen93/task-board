type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  asignee: string;
  category: string;
};

function TaskCard({
  title,
  id,
  description,
  asignee,
  category,
}: TaskCardProps) {
  return (
    <article>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Ansvarig: {asignee}</p>
      <p>Prioritet: Hög</p>
    </article>
  );
}
export default TaskCard;
