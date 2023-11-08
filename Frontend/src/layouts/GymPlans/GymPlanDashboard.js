// import style from "../../components/Plans/GymPlan.module.css";
import GymPlan from "../../components/Plans/GymPlan";
import React, { useState, useEffect } from "react";
import { fetchGymPlans } from "../../db/gymPlansData";
import style from "../../layouts/GymPlans/GymPlanDashboard.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';





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
    <div className={style.container}>
      <h2 className={style.h}>Gym Plans</h2>
      <div  style = {{display:showForm? "block" : "none"}}
          className='d-flex w-90 vh-0 justify-content align-items-center bg-light' >
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a Gym Plan</h1>
        <form>
          <div className='mb-2'>
          <label htmlFor="title">Title:</label>
          <input type="text" title='title' className='formcontrol' placeholder="Enter a title" onChange={e => setValues({...values, title: e.target.value})}></input>
        </div>
        <div className='mb-2'>
        <label htmlFor="price">Price:</label>
          <input type="number" price='price' className='formcontrol' placeholder="Enter a price" onChange={e => setValues({...values, price: e.target.value})}></input>
        </div>
        <div className='mb-3'> 
        <label htmlFor="feature">Feature:</label>
          <input type="text" feature='feature' className='formcontrol' placeholder="Enter a feature" onChange={e => setValues({...values, feature: e.target.value})}></input>
        </div>
        <button className='btn btn-success'>Submit</button>
        {/* <Link to="/" className='btn btn-primary ms-3'>Back</Link> */}
      </form>
    </div>
  </div>
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
        <div className={style.gymPlansDescription}></div>
      </div>
  );
};

export default GymPlanDashboard;
