import { Link } from "react-router";

function Navigation() {
  return (
    <nav>
      <Link to="/">Task Board</Link>
      <Link to="/create">Skapa ny task</Link>
    </nav>
  );
}
export default Navigation;
