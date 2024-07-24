import { Link, Outlet } from "react-router-dom";
import CustomNav from "./components/CustomeNav.js";
import './App.css';

function App() {
  return (
    <div className="navbar">
      <nav>
        <div>
      <CustomNav
      li={[
        ["Home", "img/dashboard.svg","/"],
        ["useState()", "img/manage_order.svg","/example1"],
      ]} />
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;