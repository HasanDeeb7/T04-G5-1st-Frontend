// HeroContactUs.js - File where the HeroContactUs component is defined

import React from "react";
import styles from "./HeroContactUs.module.css";

// HeroContactUs Component Definition
const HeroContactUs = () => {
    return (
        <div className={styles.containerHero}>
            {/* Hero Section Content */}
            <div className={styles.backgroundImage}>
                <div className={styles.content}>
                    {/* Hero Section Title */}
                    <h1 className={styles.title}>Take <span className={styles.spann}>the Next </span>Step</h1>

                    {/* Hero Section Paragraph */}
                    <p className={styles.paragraph}>
                        You have made it this far, so do not waste another moment not being the person you were meant to be.
                        Take back your power, overcome your insecurities, and live the life you deserve.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroContactUs;
