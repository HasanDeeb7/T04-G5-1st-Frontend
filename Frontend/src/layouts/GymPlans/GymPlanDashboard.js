// import style from "../../components/Plans/GymPlan.module.css";
import GymPlan from "../../components/Plans/GymPlan";
import React, { useState, useEffect } from "react";
import { fetchGymPlans } from "../../db/gymPlansData";
import style from "../../layouts/GymPlans/GymPlanDashboard.module.css";





const GymPlanDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [plans, setplans] = useState([]);
  const [showForm,setShowForm] = useState(false);
  const [values , setValues] = useState([])
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
    <div>
      <h2 className={style.h}>Gym Plans</h2>
      <div className={style.addButton}> 
     <button  className={style.addButto} onClick ={()=> setShowForm(true)}>Add +</button>
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
        <div  style = {{display:showForm? "block" : "none"}}
          className={style.container}>
      <div className={style.content}>
        <h1>Add a Gym Plan</h1>
        <form>
          <div className={style.elements}>
          <label htmlFor="title">Title:</label>
          <input type="text" title='title' className='formcontrol' placeholder="Enter a title" onChange={e => setValues({...values, title: e.target.value})}></input>
        </div>
        <div className={style.elements}>
        <label htmlFor="price">Price:</label>
          <input type="number" price='price' className='formcontrol' placeholder="Enter a price" onChange={e => setValues({...values, price: e.target.value})}></input>
        </div>
        <div className={style.element}> 
        <label htmlFor="feature">Feature:</label>
          <input type="text" feature='feature' className='formcontrol' placeholder="Enter a feature" onChange={e => setValues({...values, feature: e.target.value})}></input>
        </div>
        <button className={style.myButton}>Submit</button>
        {/* <Link to ="/" className={style.backButton}>Back</Link> */}
      </form>
    </div>
  </div>
      </div>
  );
};

export default GymPlanDashboard;
