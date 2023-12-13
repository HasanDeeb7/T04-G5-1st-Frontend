// GymPlan.js - File where the GymPlan component is defined

import React from 'react'
import style from './GymPlan.module.css'
import CheckIcon from '../../assets/images/HomepageImages/checkIcon.png'

// GymPlan Component Definition
const GymPlan = ({ title, price, plans }) => {
  return (
    <>
      {/* GymPlan Card Container */}
      <div className={style.gymPlanCard}>
        {/* GymPlan Title */}
        <h3 className={style.gymPlanType}>{title}</h3>

        {/* Membership Type */}
        <p className={style.membership}>Membership</p>

        {/* GymPlan Price */}
        <h3 className={style.gymPlanPrice}>
          $<span className={style.price}>{price}</span> Per Month
        </h3>

        {/* Check Icon and Features */}
        <div className={style.check}>
          {/* Mapping through each feature in plans */}
          {plans.map((feature, i) => (
            <div className={style.descriptionArray} key={i}>
              <img className={style.checkIcon} src={CheckIcon} alt='check' />
              <p className={style.descriptionText}>{feature}</p>
            </div>
          ))}
        </div>

        {/* Subscribe Button */}
        <div className={style.buttonSubscribe}>
          <button className={style.gymPlanButton}>
            Subscribe
          </button>
        </div>
      </div>
    </>
  )
}

export default GymPlan;
