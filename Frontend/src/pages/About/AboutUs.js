// Importing necessary React components
import React from 'react';

// Importing custom components used in the AboutUs component
import OurValue from '../../components/OurValue/OurValue';
import Hero from '../../components/HeroAboutUs/HeroAbouUs';
import OurStory from '../../components/OurStory/OurStory';
import OurCulture from '../../components/NavBar/OurCulture/OurCulture';

// Functional component representing the About Us page
function AboutUs() {
  // Rendering the components in the desired order
  return (
    <>
      {/* Including the Hero component at the top of the page */}
      <Hero />

      {/* Creating a section wrapper for the content */}
      <section className='aboutUsWrapper'>

        {/* Including the OurStory component */}
        <OurStory />

        {/* Including the OurValue component */}
        <OurValue />

        {/* Including the OurCulture component */}
        <OurCulture />

      </section>
    </>
  );
}

// Exporting the AboutUs component
export default AboutUs;
