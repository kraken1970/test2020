import React from "react";
import styles from "./FormVisual.module.scss";

const FormVisual = ({ price, discount, dateDiscount, oldPrice }) => {
  return (
    <div className={styles.FormVisual}>
      <p className={styles.subTitle}>Labore qui et animi.</p>
      <div className={styles.priceBlock}>
        <div className={styles.price}>
          <h2 className={styles.numeric}>{price} ₽</h2>
          <p>per month</p>
        </div>

        <div className={styles.discountBlock}>
          <h2>-{discount}%</h2>
          <p>until {dateDiscount}</p>
        </div>
      </div>

			<p className={styles.discountText} >installment plan without discount</p>

			<p className={styles.oldPrice}>
			{oldPrice} ₽/month
			</p>
    </div>
  );
};

export default FormVisual;
