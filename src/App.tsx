import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
    <Header />
    <main>
      <h2>Task-Board</h2>
      <TaskCard title="Skapa Dashboard" />
      </main>
      <Footer />
      </>
  );
}
export default App;