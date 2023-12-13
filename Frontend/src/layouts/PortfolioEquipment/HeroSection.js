// Importing necessary components and styles from React and CSS module
import React from 'react';
import style from './HeroSection.module.css';

// Functional component for rendering the Hero Section of the webpage
const HeroSection = () => {
  return (
    <div className={style.heroSection}>
      {/* Main title of the hero section */}
      <h1 className={style.heroSectionTitle}>easy with <span className={style.fitTitle}>fithub</span> gym</h1>

      {/* Portfolio statistics section */}
      <div className={style.portfolioStatistics}>
        {/* Individual statistic block for members */}
        <div className={style.statictic}>
          <h2 className={style.statisticNumber}>450+</h2>
          <h2 className={style.statisticDescription}>members</h2>
        </div>

        {/* Individual statistic block for fitness programs */}
        <div className={style.statictic}>
          <h2 className={style.statisticNumber}>120+</h2>
          <h2 className={style.statisticDescription}>fitness programs</h2>
        </div>

        {/* Individual statistic block for experience years */}
        <div className={style.statictic}>
          <h2 className={style.statisticNumber}>17+</h2>
          <h2 className={style.statisticDescription}>experience years</h2>
        </div>
      </div>
    </div>
  );
}

// Exporting the HeroSection component as the default export
export default HeroSection;
