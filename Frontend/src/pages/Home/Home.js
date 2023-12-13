// Importing necessary dependencies and components
import React from 'react';
import HeroSectionHomepage from './HeroSectionHomepage';
import ServicesSection from '../../layouts/HomepageServices/index';
import GymPlans from '../../layouts/GymPlans/GymPlans';
import ReasonsToJoin from '../../components/ReasonsToJoin/ReasonsToJoin';
import './home.css'; // Importing styles for the Home component

// Functional component for the Home page
function Home() {
  return (
    <>
      {/* Hero section of the homepage */}
      <HeroSectionHomepage />

      {/* Main content section of the homepage */}
      <section className='homeWrapper'> 
        {/* Component displaying reasons to join */}
        <ReasonsToJoin />

        {/* Component displaying services section */}
        <ServicesSection />

        {/* Component displaying gym plans */}
        <GymPlans />
      </section>
    </>
  );
}

// Exporting the Home component
export default Home;
