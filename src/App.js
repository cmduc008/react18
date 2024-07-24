import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/example1">useState()</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;