
// Importing the CSS module for styling
import style from '../../components/Plans/GymPlan.module.css';

// Importing the GymPlan component
import GymPlan from '../../components/Plans/GymPlan';

// Importing necessary components from the React library
import React, { useState, useEffect } from 'react';

// Importing the fetchGymPlans function from the gymPlansData module
import { fetchGymPlans } from '../../db/gymPlansData';

// Functional component for displaying gym plans
const GymPlans = () => {
  // State variables for loading status and gym plans data
  const [loading, setLoading] = useState(true);
  const [plans, setplans] = useState([]);

  // Logging the fetched plans for debugging purposes
  console.log('Fetched Plans:', plans);

  // Asynchronous function to fetch gym plans data
  async function fetchData() {
    try {
      // Making an asynchronous call to fetch gym plans
      const response = await fetchGymPlans();

      // If the response is successful, update the state with the data
      if (response) {
        console.log(response);
        setplans(response.data);
        setLoading(false);
      }
    } catch (error) {
      // If an error occurs during fetching, log the error and update the loading state
      console.error(error);
      setLoading(false);
    }
  }

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // JSX structure for rendering the GymPlans component
  return (
    <div className={style.gymPlans}>
      <h2 className={style.gymPlanDescriptionTitle}>Membership Tiers</h2>
      <div className={style.gymPlan}>
        <div className={style.gymPlansDescription}>
          {/* Additional description content can be added here */}
        </div>
        {!loading ? (
          // Mapping through the plans and rendering GymPlan component for each plan
          plans.map((plan, key) => (
            <GymPlan key={key} title={plan.title} price={plan.price} plans={plan.feature} />
          )) 
        ) : (
          // Displaying a loading message while data is being fetched
          'loading...'
        )}
      </div>
    </div>
  );
};

// Exporting the GymPlans component as the default export
export default GymPlans;
