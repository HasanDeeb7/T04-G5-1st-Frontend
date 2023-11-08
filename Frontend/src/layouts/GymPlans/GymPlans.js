import style from '../../components/Plans/GymPlan.module.css'
import GymPlan from '../../components/Plans/GymPlan'
import React from 'react';
import { useFetch } from '../../hooks/useFetch';


const GymPlans = () => {
  const {data , isPending , error}  = useFetch("gymPlans/read")

  return (
    <div className={style.gymPlans}>
          <h2 className={style.gymPlanDescriptionTitle}>Our Membership Tiers</h2>
      <div className={style.gymPlan}>
        <div className={style.gymPlansDescription}>
          {data && data.map((plan,index) => {
            
           return <GymPlan key={index}
            {...plan}/>
          })
        }  
    </div>
    </div>
    </div>
  );
};

export default GymPlans;