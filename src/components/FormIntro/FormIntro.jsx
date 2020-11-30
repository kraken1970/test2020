import React from "react";
import styles from "./FormIntro.module.scss";

const FormIntro = ({ startDate, remaind }) => {
  return (
    <div className={styles.FormIntro}>
      <div className={styles.dataWrapper}>
        <h2>START:</h2> <span className={styles.data}>{startDate}</span>
      </div>
      <div className={styles.dataWrapper}>
        <h2>Remained:</h2> <span className={styles.data}>{remaind} seat</span>
      </div>

      <p className={styles.text} >
        Use the cross-platform SAS bandwidth, then you can calculate the mobile bandwidth!
      </p>
    </div>
  );
};

export default FormIntro;
