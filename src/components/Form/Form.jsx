import React, { useState, useEffect } from "react";
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
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    utm_ad: "",
    matchtype: "",
    device: "",
    GeoLoc: "",
    placement: "",
    network: "",
    campaign_id: "",
    adset_id: "",
    ad_id: "",
    gad_source: "",
    gclid: "",
  });

  const [errors, setErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Extract UTM parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get("utm_source") || "";
    const utm_medium = urlParams.get("utm_medium") || "";
    const utm_campaign = urlParams.get("utm_campaign") || "";
    const utm_term = urlParams.get("utm_term") || "";
    const utm_content = urlParams.get("utm_content") || "";
    const utm_ad = urlParams.get("utm_ad") || "";
    const matchtype = urlParams.get("matchtype") || "";
    const device = urlParams.get("device") || "";
    const GeoLoc = urlParams.get("GeoLoc") || "";
    const placement = urlParams.get("placement") || "";
    const network = urlParams.get("network") || "";
    const campaign_id = urlParams.get("campaign_id") || "";
    const adset_id = urlParams.get("adset_id") || "";
    const ad_id = urlParams.get("ad_id") || "";
    const gad_source = urlParams.get("gad_source") || "";
    const gclid = urlParams.get("gclid") || "";

    // Update formData with UTM parameters
    setFormData((prevData) => ({
      ...prevData,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      utm_ad,
      matchtype,
      device,
      GeoLoc,
      placement,
      network,
      campaign_id,
      adset_id,
      ad_id,
      gad_source,
      gclid,
    }));
  }, []);

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

            // Push event to dataLayer
            if (window.dataLayer) {
              window.dataLayer.push({
                event: "lead_created",
                message: "Lead created successfully",
              });
            }

            // Send data to webhook
            fetch(
              "https://hook.eu1.make.com/2wpe7rf7u7atk49aagw9tyqwjr4g85s9",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log("Webhook success:", data);
              })
              .catch((error) => {
                console.error("Webhook error:", error);
              });

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
              <option value="web development"> עיצוב ופיתוח אתרים</option>
              <option value="design">עיצוב ויפיתוח דף נחיתה</option>
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
          שגרו אלינו
        </button>
      </form>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Form;
