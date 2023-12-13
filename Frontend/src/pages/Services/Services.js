// Importing necessary dependencies
import React from 'react';
import Products from '../../layouts/Products/Products'; // Importing the Products component
import Regimeplansection from '../../layouts/regimeplan/regimeplan'; // Importing the Regimeplansection component
import PersonnalTraining from "../../layouts/PersonnalTraining/PersonnalTraining"; // Importing the PersonnalTraining component
import style from './Services.module.css'; // Importing the styles for the Services component

// Functional component for the Services page
function Services() {
  return (
    <>
      {/* Hero section for the Services page */}
      <section className={style.servicesHeroImage}>
        <span className={style.servicesHeroTextContainer}>
          <span style={{ color: "var(--red-text-clr)" }}>Make</span> Your Dream
          Body
        </span>
      </section>

      {/* Main content section for the Services page */}
      <section className="servicesWrapper">
        {/* Products section */}
        <Products />

        {/* Personal Training section */}
        <PersonnalTraining />

        {/* Regime Plans section */}
        <Regimeplansection />
      </section>
    </>
  );
}

// Exporting the Services component
export default Services;
