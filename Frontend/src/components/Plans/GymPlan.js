import React from 'react'
import style from './GymPlan.module.css'
import CheckIcon from '../../assets/images/HomepageImages/checkIcon.png'

const GymPlan = ({ title, price, plans }) => {

  return (
    <>
      <div className={style.gymPlanCard}>
        <h3 className={style.gymPlanType}>{title}</h3>
        <p className={style.membership}>Membership</p>
        <h3 className={style.gymPlanPrice}>$<span className={style.price}>{price}</span> Per Month</h3>
        <div className={style.check}>
          {plans.map((plan, i) => (
            <div className={style.descriptionArray} key={i}>
              <img className={style.checkIcon} src={CheckIcon} alt='check' />
              <p className={style.descriptionText}>{plan.feature[i]}</p>
            </div>
          ))}
        </div>
        <div class={style.buttonSubscribe}>
          <button className={style.gymPlanButton}>Subscribe</button>
        </div>
      </div>
    </>
  )
}


export default GymPlan
