import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Task-Board</h2>
        <TaskCard
          title="Skapa Dashboard"
          id={1}
          description="Bygg en enkel dashboard med React."
          assignee="Fredrik"
          category="Frontend"
          priority="Hög"
        />
        <TaskCard
          title="Skapa design"
          id={2}
          description="Bestäm färger och layout för applikationen."
          assignee="Erik"
          category="Design"
          priority="Medium"
        />
        <TaskCard
          title="Skriva tester"
          id={3}
          description="Skriv tester för applikationens komponenter."
          assignee="Miranda"
          category="Testning"
          priority="Låg"
        />
      </main>
      <Footer />
    </>
  );
}
export default App;
