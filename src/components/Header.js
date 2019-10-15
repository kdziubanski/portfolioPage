import React from "react";
import { NavLink } from "react-router-dom";
import "../style/header.scss";

const Header = () => {
  return (
    <nav className="header__navigation">
      <NavLink className="header__link" to="/" exact>
        Start
      </NavLink>
      <NavLink className="header__link" to="/about" exact>
        About
      </NavLink>
      <NavLink className="header__link" to="/toDo">
        ToDo
      </NavLink>
      <NavLink className="header__link" to="/memory">
        Memory
      </NavLink>
    </nav>
  );
};

export default Header;
