// components/Services.js
import React from "react";
import Image from "next/image";
import styles from "./Services.module.scss";

const servicesData = [
  {
    icon: "/images/planet.png",
    title: "מיתוג וסושיאל",
    description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.",
    buttonText: "בוא נתחיל",
  },

  {
    icon: "/images/alian.png",
    title: "עיצוב אתרים",
    description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.",
    buttonText: "בוא נתחיל",
  },
  {
    icon: "/images/rocket.png",
    title: "פיתוח",
    description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.",
    buttonText: "בוא נתחיל",
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.title}>איך אנחנו יכולים לעזור לכם?</h2>
      <div className={styles.cards}>
        {servicesData.map((service, index) => (
          <div data-scroll data-scroll-speed={0.01*(index+1)} className={styles.card} key={index}>
            <div className={styles.icon}>
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
              />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <button className={styles.button}>{service.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
