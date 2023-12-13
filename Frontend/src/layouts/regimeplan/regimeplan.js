// Importing necessary components, styles, and functions from React, CSS module, and the regimeplan section component
import React, { useEffect, useState } from "react";
import styles from "./regimeplan.module.css";
import Regimeplancomponent from "../../components/regimeplan/regimeplansection";
import { fetchRegime } from "../../db/regimeData";

// Functional component for rendering the RegimePlan section
const RegimePlan = (props) => {
  // State variables to manage regime plan data and dashboard state
  const [regimePlan, setRegimePlan] = useState([]);
  const [isOnDashboard, setIsOnDashboard] = useState(false);

  // Function to fetch regime plan data
  async function fetchData() {
    try {
      const response = await fetchRegime();
      console.log('Fetched data:', response.data.data)
      if (response) {
        setRegimePlan(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // JSX structure for rendering the RegimePlan component
  return (
    <section className={styles.RegimePlanContainer}>
      {/* Section header */}
      <section className={styles.RegimePlanHeader}>
        <h2 id="regimePlans">Every Meals Counts: A Complete Body-Type Nutrition Guide!</h2>
      </section>
      {/* Section content */}
      <section className={styles.RegimeplanFlex}>
        {/* Mapping through the regimePlan data and rendering Regimeplancomponent for each item */}
        {regimePlan.map((item, key) => (
          <Regimeplancomponent
            key={key}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>
    </section>
  );
};

// Exporting the RegimePlan component as the default export
export default RegimePlan;
