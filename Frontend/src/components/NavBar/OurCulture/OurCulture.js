import React from "react"
import styles from '../OurCulture/OurCulture.module.css'

// OurCulture Component Definition
const OurCulture = () => {
    return (
        <div className={styles.container}>
            {/* Heading */}
            <h3 className={styles.heading}>Our Culture</h3>

            {/* Content */}
            <p className={styles.content}>
                We know that building a positive culture is incredibly important.
                We believe in encouraging, supporting, challenging, learning, and growing to be the best!
                Our flexible working solutions, gym rebates, and educational opportunities create a positive work/life
                balance for all our employees.
            </p>
        </div>
    );
};

export default OurCulture;
