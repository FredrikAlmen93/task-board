import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskBoardPage from "./pages/TaskBoardPage";
import NewTaskPage from "./pages/NewTaskPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskBoardPage />} />
        <Route path="/create" element={<NewTaskPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
