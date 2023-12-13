// Importing necessary dependencies
import React from "react";
import FitnessJourneyCss from "./FitnessJourney.module.css";
import image from './images/portfolio-personal-training 1.png'; // Importing the image

// Functional component for the Fitness Journey section
const FitnessJourneySection = () => {
    return (
        <div className={FitnessJourneyCss.fitnessSection}>
            {/* Heading for the Fitness Journey section */}
            <h2 className={FitnessJourneyCss.h2}>Elevate Your Fitness Journey with Personal Training!</h2>

            {/* Content section with a paragraph and an image */}
            <div className={FitnessJourneyCss.content}>
                {/* Paragraph explaining the benefits of personal training */}
                <p className={FitnessJourneyCss.p}>
                    Personal training is the best way to achieve your fitness goals, safely and effectively. 
                    Our personal trainers are experts in their field, and they will work with you to create 
                    a personalized training plan that is tailored to your specific needs and goals, and they 
                    will keep track of your progress to ensure reaching your goal.
                </p>

                {/* Image related to personal training */}
                <img src={image} alt="personal-training" className={FitnessJourneyCss.image} />
            </div>
        </div>
    );
};

// Exporting the FitnessJourneySection component
export default FitnessJourneySection;
