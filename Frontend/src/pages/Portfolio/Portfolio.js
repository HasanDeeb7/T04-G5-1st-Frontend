// Importing necessary dependencies
import React from "react";
import FitnessJourneySection from './FitnessJourney'; // Importing the FitnessJourneySection component
import HeroSection from "../../layouts/PortfolioEquipment/HeroSection"; // Importing the HeroSection component
import GymEquipmentSection from "../../layouts/PortfolioEquipment/index.js"; // Importing the GymEquipmentSection component
import PortfolioTestimonials from "../../layouts/PortfolioTestimonials/index"; // Importing the PortfolioTestimonials component
import Potential from "../../layouts/Potential"; // Importing the Potential component

// Functional component for the Portfolio page
function Portfolio() {
  return (
    <>
      {/* Hero section for the Portfolio page */}
      <HeroSection />

      {/* Main content section for the Portfolio page */}
      <section className="portfolioWrapper">
        {/* Fitness Journey section */}
        <FitnessJourneySection />

        {/* Potential section */}
        <Potential />

        {/* Gym Equipment section */}
        <GymEquipmentSection />

        {/* Portfolio Testimonials section */}
        <PortfolioTestimonials />
      </section>
    </>
  );
}

// Exporting the Portfolio component
export default Portfolio;
