import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false); // const changes the css class 

  const location = useLocation(); // location variable

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);        // function runs when loaction variable changes

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}> 
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/resume"> Resume </Link>
      </div>
    </div>
  );
}

export default Navbar;