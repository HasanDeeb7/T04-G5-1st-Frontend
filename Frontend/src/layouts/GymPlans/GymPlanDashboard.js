
import GymPlan from "../../components/Plans/GymPlan";
import React, { useState, useEffect } from "react";
import { fetchGymPlans } from "../../db/gymPlansData";
import style from "../../layouts/GymPlans/GymPlanDashboard.module.css"; 
import axios from "axios";

function GymPlanDashboard(){
  const [plans, setPlans] = useState([]);
  const [showForm,setShowForm] = useState(false);
  const [newTitle ,setNewTitle] = useState('')
  const [newPrice , setNewPrice] = useState('')
  const[newFeature , setNewFeature] = useState('')
  const[isLoading , setIsLoading] = useState(true)

const CreateGym = async () => {
  const formData = new FormData();
  formData.append("title" ,newTitle);
  formData.append("price" ,newPrice);
  formData.append("feature" ,newFeature);
  try{
    const response = await axios.post(`${process.env.REACT_APP_PATH}gymPlan/add` , formData,{
      headers:{
        'Content-Type' : "added"
      },
      
    });
    if (response.data.message === "Gym plan added"){
    setPlans((prevPlans)=> [...prevPlans , response.data.data]);
    setNewTitle("");
    setNewPrice("");
    setNewFeature("");
    }
    else{
      console.error(response.data.message)
      alert("Failed to add gym Plan");
    }
    
  }catch(error){
    console.error('Failed to add gym Plan' ,error);
  }
  
};

useEffect(()=>{
  async function fetchData(){ 
    try{
      const response = await fetchGymPlans();
      console.log('Fetched data' , response.data.data) 
      if (response){
        setPlans(response.data.data);
      }
    } catch (error) {
      console.log(error)
    }
  }
fetchData();
    },[]);
  async function fetchData() {
    try {
      const response = await fetchGymPlans();
      if (response) {
        // console.log(response);
        setPlans(response.data.data);
        // setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      // setIsLoading(false);
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
            {isLoading ? <p>Loading....</p>:
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
          <input type="text" title='title' className='formcontrol' placeholder="Enter a title" onChange={(e) => setNewTitle(e.target.value)}></input>
        </div>
        <div className={style.elements}>
        <label htmlFor="price">Price:</label>
          <input type="number" price='price' className='formcontrol' placeholder="Enter a price" onChange={(e) => setNewPrice(e.target.value)}></input>
        </div>
        <div className={style.element}> 
        <label htmlFor="feature">Feature:</label>
          <input type="text" feature='feature' className='formcontrol' placeholder="Enter a feature" onChange={(e) => setNewFeature(e.target.value)}></input>
        </div>
        <button className={style.myButton} onClick={CreateGym}>Add</button>
      </form>
    </div>
  </div>
      </div>
  );
};

export default GymPlanDashboard;
