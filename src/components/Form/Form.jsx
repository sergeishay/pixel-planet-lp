// components/Form.js
import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

import styles from './Form.module.scss';
import { validateForm } from '../../helpers/formValidation';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
            formData, 
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange} 
        className={styles.input} 
      />
      {errors.name && <span className={styles.error}>{errors.name}</span>}
      <input 
        type="text" 
        name="phone" 
        placeholder="Phone" 
        value={formData.phone} 
        onChange={handleChange} 
        className={styles.input} 
      />
      {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
        className={styles.input} 
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default Form;
