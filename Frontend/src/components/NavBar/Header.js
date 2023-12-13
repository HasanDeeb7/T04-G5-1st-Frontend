// Header.js - File where the Header component is defined

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from '../../assets/images/logo/logo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink, useLocation } from "react-router-dom";

// Header Component Definition
const Header = () => {
  const [nav, setNav] = useState(false); // State to manage mobile menu

  const location = useLocation();

  useEffect(() => {
    // Close the mobile menu when a NavLink is clicked
    setNav(false);
  }, [location]);

  return (
    // Header Container
    <header className={styles.headerContainer}>
      <div className={styles.navbar}>
        {/* Logo */}
        <img src={logo} alt="/" />

        {/* Navigation Links */}
        <nav>
          <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
            {/* NavLink for Home */}
            <li>
              <NavLink to='/' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/' ? styles.activeNavItem : ''}`}>
                Home
              </NavLink>
            </li>

            {/* NavLink for Services */}
            <li>
              <NavLink to='/services' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/services' ? styles.activeNavItem : ''}`}>
                Services
              </NavLink>
            </li>

            {/* NavLink for Portfolio */}
            <li>
              <NavLink to='/portfolio' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/portfolio' ? styles.activeNavItem : ''}`}>
                Portfolio
              </NavLink>
            </li>

            {/* NavLink for About Us */}
            <li>
              <NavLink to='/about' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/about' ? styles.activeNavItem : ''}`}>
                About Us
              </NavLink>
            </li>

            {/* NavLink for Contact Us */}
            <li>
              <NavLink to='/contact' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/contact' ? styles.activeNavItem : ''}`}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
