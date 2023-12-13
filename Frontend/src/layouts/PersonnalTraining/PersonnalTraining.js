// Importing necessary components and functions from React and other modules
import React, { useEffect, useState } from "react";
import PersonalTraining from "../../components/PersonalTraining/PersonalTraining";
import style from "./PersonnalTraining.module.css";
import { fetchTraining } from "../../db/trainingData";

// Functional component for rendering personal training section
export default function PersonnalTraining() {
  // State variables for personal trainings data and loading status
  const [personnalTrainings, setPersonnalTrainings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Asynchronous function to fetch personal training data
  const fetchData = async () => {
    try {
      // Making an asynchronous call to fetch training data
      const data = await fetchTraining();

      // If the data is successfully fetched, update the state with the data
      if (data) {
        setPersonnalTrainings(data.data.data);
        console.log(data.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      // Log any errors that occur during fetching
      console.log(error);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // JSX structure for rendering the PersonalTraining component
  return (
    <section className={style.personalTrainingContainer}>
      <section className={style.personalTrainingHeader}>
        <h2 id="training"> Personal Trainings</h2>
        <p>
          Transform your potential into power with our training services and
          redefine what your body is capable of.
        </p>
      </section>
      <section className={style.personalTrainingFlex}>
        {/* Conditional rendering based on loading status */}
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          // Mapping through the personal trainings data and rendering PersonalTraining component for each training
          personnalTrainings.map((item, i) => (
            <PersonalTraining
              key={i}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))
        )}
      </section>
    </section>
  );
}
