import React, { useState } from "react";
import './CustomeNav.css';
import { Link, Outlet } from "react-router-dom";
const CustomNav = ({ li }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
 return (
    <nav className="navbar-menu" style={{ width: window === false ? 270 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <img src="img/menu.svg" alt="burger" />
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i}>
            <img
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
        <div>
           <Link to={item[2]}>{item[0]}</Link>
        </div>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;