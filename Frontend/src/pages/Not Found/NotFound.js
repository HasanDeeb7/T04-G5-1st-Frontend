// Importing necessary dependencies
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NotFound.module.css";

// Functional component for the Not Found page
export default function NotFound(props) {
  return (
    <div className={style.NotFoundContainer}>
      <div className={style.NotFoundWrapper}>
        {/* Displaying the Not Found message and 404 status */}
        <div className={style.NotFoundText}>
          <h1>{"Couldn't Find The Dumbbell :("}</h1>
          <p>404</p>
        </div>

        {/* Link/button to navigate back to the home page */}
        <NavLink to={"/"} className={style.notFoundButton}>
          HomePage
        </NavLink>
      </div>
    </div>
  );
}
