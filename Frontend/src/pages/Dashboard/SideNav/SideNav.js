// Importing necessary React components, styles, and icons
import React, { useState } from "react";
import style from "./SideNav.module.css";
import dash from "../../../assets/icons/dashLogo.svg";
import contentLogo from "../../../assets/icons/ContentLogo.svg";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

// Functional component representing the side navigation bar
export default function SideNav() {
  // State variables for managing side item visibility and sidebar collapse/expand
  const [isSideItem, setIsSideItem] = useState(false);
  const [sideBar, setSideBar] = useState(true);

  // Function to toggle the visibility of side items
  function toggleItems() {
    setIsSideItem(!isSideItem);
  }

  // Rendering the component structure
  return (
    <nav className={sideBar ? style.sideNav : style.collapsedSideNav}>

      {/* Icon to expand/collapse the sidebar */}
      <IoIosArrowBack
        className={sideBar ? style.expandArrow : style.rotateExpandArrow}
        onClick={() => setSideBar(!sideBar)}
      />

      {/* Dashboard section of the sidebar */}
      <section className={style.dashboardSideNav}>
        <section className={style.dashNavContent}>
          {/* Dashboard logo and title */}
          <span className={style.dashLogoContainer}>
            <img src={dash} alt="Dashboard Logo" />
            Dashboard
          </span>

          {/* Content Management section with toggleable items */}
          <section className={style.navItemsWrapper}>
            <span className={style.sideBarItem} onClick={toggleItems}>
              <img src={contentLogo} alt="Content management icon" /> Content
              Management{" "}
              <IoIosArrowBack
                className={
                  isSideItem
                    ? style.rotateSideBarItemArrow
                    : style.sideBarItemArrow
                }
              />
            </span>

            {/* List of content management items */}
            <ul
              className={style.ContentManagementItemsWrapper}
              style={{ height: isSideItem ? "105px" : "0" }}
            >
              {/* NavLink for Services with an active style */}
              <NavLink
                to="dashServices"
                exact={true}
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
              >
                Services
              </NavLink>

              {/* NavLink for Products with an active style */}
              <NavLink
                to="dashProducts"
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
                activeclassname={style.activeSideItem}
              >
                Products
              </NavLink>
            </ul>
          </section>
        </section>
      </section>
    </nav>
  );
}
