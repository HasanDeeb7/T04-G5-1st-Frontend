// PersonalTraining.js - File where the PersonalTraining component is defined

import React from "react";
import style from "./PersonalTraining.module.css";

// PersonalTraining Component Definition
function PersonalTraining(props) {
  // Destructuring props
  const { name, description, image } = props;

  // Constructing the image source with the base path
  const imageSrc = `${process.env.REACT_APP_PATH}${image}`;

  return (
    // PersonalTraining Component Container
    <section
      className={style.trainingComponentWrapper}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Name of the Personal Training */}
      <span className={style.trainingComponentName}>{name}</span>

      {/* Description of the Personal Training */}
      <p className={style.trainingComponentDescription}>{description}</p>
    </section>
  );
}

export default PersonalTraining;
