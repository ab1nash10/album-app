import React from "react";
import { Link, useNavigate } from "react-router-dom";

//get button name and path for every component
const Navbar = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <h2 onClick={handleClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3342/3342176.png"
          alt="logo"
        />
      </h2>
      <Link to={props.path}>
        <button>{props.page}</button>
      </Link>
    </div>
  );
};

export default Navbar;
