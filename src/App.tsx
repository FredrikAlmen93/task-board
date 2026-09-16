import type { Task } from "./types/Task";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";

function App() {
  const todoTasks = tasks.filter((task) => task.status === "To-Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <>
      <Header />
      <main>
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
                priority={task.priority}
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
                priority={task.priority}
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
                priority={task.priority}
              />
            ))}
          </Column>
        </div>
      </main>
      <Footer />
    </>
  );
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Skapa Dashboard",
    description: "Bygg en enkel dashboard med React.",
    assignee: "Fredrik",
    category: "Frontend",
    priority: "Hög",
    status: "To-Do",
  },
  {
    id: 2,
    title: "Skapa design",
    description: "Bestäm färger och layout för applikationen.",
    assignee: "Erik",
    category: "Design",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Skapa backend",
    description: "Bygg en enkel backend med Node.js.",
    assignee: "Anna",
    category: "Backend",
    priority: "Låg",
    status: "Done",
  },
  {
    id: 4,
    title: "Skapa komponenter",
    description: "Skapa React-komponenter för applikationen.",
    assignee: "Fredrik",
    category: "Frontend",
    priority: "Hög",
    status: "To-Do",
  },
  {
    id: 5,
    title: "Skriva CSS",
    description: "Skriv CSS för att styla applikationen.",
    assignee: "Erik",
    category: "Design",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Testa komponenter",
    description: "Testa React-komponenter för applikationen med Vitest.",
    assignee: "Fredrik",
    category: "Frontend",
    priority: "Hög",
    status: "To-Do",
  },
  {
    id: 7,
    title: "Skapa projekt",
    description: "Skapa ett nytt React-projekt med Create React App.",
    assignee: "Anna",
    category: "Backend",
    priority: "Låg",
    status: "Done",
  },
  {
    id: 8,
    title: "Skapa Header.",
    description: "Skapa en header-komponent för applikationen.",
    assignee: "Fredrik",
    category: "Frontend",
    priority: "Hög",
    status: "In Progress",
  },
  {
    id: 9,
    title: "Skapa Footer",
    description: "Skapa en footer-komponent för applikationen.",
    assignee: "Erik",
    category: "Design",
    priority: "Medium",
    status: "Done",
  },
];

export default App;
