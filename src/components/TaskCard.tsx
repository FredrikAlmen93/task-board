type TaskCardProps = {
    title: string;
    id: number;
};

function  TaskCard ({title, id}: TaskCardProps) {
    return (
        <article>
            <p>Frontend</p>
            <h3>{title}</h3>
            <p>Bygg en enkel dashboard med React.</p>
            <p>Ansvarig: Fredrik</p>
            <p>Prioritet: Hög</p>
        </article>
    );
}
export default TaskCard;