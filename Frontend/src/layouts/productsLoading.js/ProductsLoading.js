// Importing necessary components and styles from React and CSS module
import React from "react";
import style from "./ProductsLoading.module.css";

// Functional component for rendering a loading placeholder for products
export default function ProductsLoading() {
  return (
    <>
      {/* Placeholder card for product loading */}
      <div className={style.placeholderCard}>
        {/* Background placeholder */}
        <div className={style.placeholderBg}>
          {/* Image placeholder */}
          <div className={style.imagePlaceHolder}></div>
        </div>
        {/* Details placeholder */}
        <div className={style.placeholderDetails}>
          {/* Name placeholder */}
          <div className={style.namePlaceHolder}></div>
          {/* Price and Category placeholders */}
          <div className={style.PriceCatPlaceHolder}>
            {/* Price placeholder */}
            <div className={style.pricePlaceHolder}></div>
            {/* Category placeholder */}
            <div className={style.catPlaceHolder}></div>
          </div>
        </div>
      </div>
      {/* Repeat the above placeholder structure multiple times */}

      <div className={style.placeholderCard}>
        <div className={style.placeholderBg}>
          <div className={style.imagePlaceHolder}></div>
        </div>
        <div className={style.placeholderDetails}>
          <div className={style.namePlaceHolder}></div>
          <div className={style.PriceCatPlaceHolder}>
            <div className={style.pricePlaceHolder}></div>
            <div className={style.catPlaceHolder}></div>
          </div>
        </div>
      </div>
      <div className={style.placeholderCard}>
        <div className={style.placeholderBg}>
          <div className={style.imagePlaceHolder}></div>
        </div>
        <div className={style.placeholderDetails}>
          <div className={style.namePlaceHolder}></div>
          <div className={style.PriceCatPlaceHolder}>
            <div className={style.pricePlaceHolder}></div>
            <div className={style.catPlaceHolder}></div>
          </div>
        </div>
      </div>
      <div className={style.placeholderCard}>
        <div className={style.placeholderBg}>
          <div className={style.imagePlaceHolder}></div>
        </div>
        <div className={style.placeholderDetails}>
          <div className={style.namePlaceHolder}></div>
          <div className={style.PriceCatPlaceHolder}>
            <div className={style.pricePlaceHolder}></div>
            <div className={style.catPlaceHolder}></div>
          </div>
        </div>
      </div>
      <div className={style.placeholderCard}>
        <div className={style.placeholderBg}>
          <div className={style.imagePlaceHolder}></div>
        </div>
        <div className={style.placeholderDetails}>
          <div className={style.namePlaceHolder}></div>
          <div className={style.PriceCatPlaceHolder}>
            <div className={style.pricePlaceHolder}></div>
            <div className={style.catPlaceHolder}></div>
          </div>
        </div>
      </div>

    </>
  );
}
