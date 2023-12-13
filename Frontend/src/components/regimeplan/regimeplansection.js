import React from "react";
import style from "./regimesection.module.css";

// Regimeplancomponent Component
function Regimeplancomponent(props) {
  // Destructuring props to get name, description, and image
  const { name, description, image } = props;

  // Creating the image source with the REACT_APP_PATH from environment variables
  const imgSrc = `${process.env.REACT_APP_PATH}${image}`;

  // JSX structure for the Regimeplancomponent component
  return (
    <section className={style.regimeplanComponentWrapper}>
      {/* Wrapper for the Regimeplan component */}
      <div className={style.regimeplanImageWrapper}>
        {/* Image wrapper with the source */}
        <img src={imgSrc} alt="img" className={style.regimeplanImage} />
      </div>
      <div className={style.regimeplanContent}>
        {/* Content wrapper with name and description */}
        <h3 className={style.regimeplanComponentName}>{name}</h3>
        <p className={style.regimeplanComponentDescription}>{description}</p>
      </div>
    </section>
  );
}

export default Regimeplancomponent;
