import React from "react";
import { NavLink } from "react-router-dom";

function Bottom() {
  return (
    <>
      <div className="bottom-nav">
        <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fas fa-home nav-icon"></i>
          <span>Home</span>
        </NavLink>

        <NavLink to="/visitors" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fas fa-users nav-icon"></i>
          <span>Visitors</span>
        </NavLink>

        <NavLink to="/enquiries" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fas fa-question nav-icon"></i>
          <span>Enquiries</span>
        </NavLink>

        <NavLink to="/clients" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fas fa-user-tie nav-icon"></i>
          <span>Clients</span>
        </NavLink>
      </div>
    </>
  );
}

export default Bottom;
