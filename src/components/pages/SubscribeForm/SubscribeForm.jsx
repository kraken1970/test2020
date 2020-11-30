import React, { useState } from "react";
import FormIntro from "../../FormIntro/FormIntro";
import FormVisual from "../../FormVisual/FormVisual";
import Header from "../../Header/Header";
import styles from "./SubscribeForm.module.scss";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
  };

  return (
    <section className={styles.SubscribeForm}>
      <Header />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.intro} id="intro">
          <FormIntro startDate="october 29" remaind="15" />
        </div>
        <div className={styles.visual} id="visual">
          <FormVisual
            price="4 900"
            discount="40"
            dateDiscount="28 december"
            oldPrice="5000"
          />
        </div>
        <div className={styles.inputs} id="inputs">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={emailChange}
            className={styles.input}
          />

          <input
            type="tel"
            placeholder="Your phone"
            value={phone}
            onChange={phoneChange}
            className={styles.input}
          />

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={nameChange}
            className={styles.input}
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.button}
          >
            SUBSCRIBE
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubscribeForm;
