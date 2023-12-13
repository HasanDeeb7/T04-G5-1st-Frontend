// Importing necessary components, styles, and images from React, CSS module, and assets
import React from "react";
import style from './PortfolioEquipment.module.css';
import equipment from '../../assets/images/PortfolioImages/portfolio-gym-tools.png';

// Functional component for rendering the Gym Equipment section of the portfolio
function GymEquipmentSection() {
  return (
    <section className={style.gymEquipmentSection}>
      {/* Section title */}
      <h2>Experience The Finest Gym Equipment!</h2>

      {/* Flex container for content and image */}
      <section className={style.gymEquipmentFlex}>
        {/* Paragraph describing the quality of gym equipment */}
        <p>
          At FitHub, we take pride in offering our members access to the absolute
          best gym equipment available. We understand that the quality of your
          workout hinges on the tools you use. Here's why our gym boasts the
          finest equipment, ensuring you get the most out of your fitness routine.
        </p>

        {/* Image displaying different gym equipments */}
        <img src={equipment} alt="image displaying different gym equipments" />
      </section>
    </section>
  );
}

// Exporting the GymEquipmentSection component as the default export
export default GymEquipmentSection;
