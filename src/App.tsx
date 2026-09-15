import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";

function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Column title="To-Do">
            <TaskCard
              title="Skapa Dashboard"
              id={1}
              description="Bygg en enkel dashboard med React."
              assignee="Fredrik"
              category="Frontend"
              priority="Hög"
            />
          </Column>
          <Column title="In Progress">
          <TaskCard
            title="Skapa design"
            id={2}
            description="Bestäm färger och layout för applikationen."
            assignee="Erik"
            category="Design"
            priority="Medium"
          /></Column>
          <Column title="Done">
          <TaskCard
            title="Skapa backend"
            id={3}
            description="Bygg en enkel backend med Node.js."
            assignee="Anna"
            category="Backend"
            priority="Låg"
          /></Column>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default App;
