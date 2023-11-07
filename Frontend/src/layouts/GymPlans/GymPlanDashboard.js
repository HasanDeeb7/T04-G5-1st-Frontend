// import style from "../../components/Plans/GymPlan.module.css";
import GymPlan from "../../components/Plans/GymPlan";
import React, { useState, useEffect } from "react";
import { fetchGymPlans } from "../../db/gymPlansData";
import style from "../../layouts/GymPlans/GymPlanDashboard.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';





const GymPlanDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [plans, setplans] = useState([]);
  console.log("Fetched Plans:", plans);


  async function fetchData() {
    try {
      const response = await fetchGymPlans();
      if (response) {
        console.log(response);
        setplans(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.h}>Gym Plans</h2>
     
      <div className={style.addButton}> 
     <button  className={style.addButto}>Add +</button>
       </div>
        <table className={style.gymPlansTable}>
          <thead className={style.tableHeader}>
            <tr>
              <th className={style.tableHeaderItem}>Id</th>
              <th className={style.tableHeaderItem}>Title</th>
              <th className={style.tableHeaderItem}>Price</th>
              <th className={style.tableHeaderItem}>Feature</th>
              <th className={style.tableHeaderItem}>Action</th>
            </tr>
          </thead>
          <tbody className={style.tableContent}>
          
            {
              plans.map((plan, key) => (
              <tr key={key}>
                <td>{plan._id}</td>
                <td>{plan.title}</td>
                <td>{plan.price}</td>
                <td>{plan.feature}</td>
                <td className={style.buttonSection}> 
                  <button className={style.buttonEdit}>Edit</button>
                  <button className={style.buttonDelete }>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={style.gymPlansDescription}></div>
      </div>
  );
};

export default GymPlanDashboard;
