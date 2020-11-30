import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";

const Card = ({ pic, name, prof, timeStart, timeEnd, text, className, classContent }) => {
  return (
    <div className={classNames(styles.card, className)}>
      <img src={pic} alt="pic" />
      <div className={classNames(styles.content, classContent)}>
        <h2 className={styles.name}>{name}</h2>

        <p className={styles.prof}>{prof}</p>
				
        <div className={styles.time}>
          <p>
            {timeStart} - {timeEnd}
          </p>
        </div>

        <p className={styles.text} >{text}</p>
      </div>
    </div>
  );
};

export default Card;
