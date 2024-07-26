// components/Form.js
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.scss";
import { validateForm } from "../../helpers/formValidation";
import Popup from "../Popup/Popup";

const Form = ({ isFooter }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: isFooter ? "web development" : "", // Default value for the select field
  });

  const [errors, setErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsPopupOpen(true);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <form
        className={isFooter ? styles.form2 : styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.inputDiv}>
          <input
            type="text"
            name="name"
            placeholder="שם מלא"
            value={formData.name}
            onChange={handleChange}
            className={isFooter ? styles.input2 : styles.input}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.inputDiv}>
          <input
            type="text"
            name="phone"
            placeholder="טלפון"
            value={formData.phone}
            onChange={handleChange}
            className={isFooter ? styles.input2 : styles.input}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>
        <div className={styles.inputDiv}>
          <input
            type="email"
            name="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={handleChange}
            className={isFooter ? styles.input2 : styles.input}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        {isFooter && (
          <div className={styles.inputDiv}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="web development">פיתוח אתרים</option>
              <option value="design">עיצוב</option>
              <option value="marketing">מיתוג וסושיאל</option>
            </select>
            {errors.service && (
              <span className={styles.error}>{errors.service}</span>
            )}
          </div>
        )}

        <button
          type="submit"
          className={isFooter ? styles.button2 : styles.button}
        >
          דברו איתי
        </button>
      </form>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Form;
