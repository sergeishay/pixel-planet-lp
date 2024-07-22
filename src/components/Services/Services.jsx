import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./Services.module.scss";

const servicesData = [
  {
    background: "/images/planet_background.png",
    title: "מיתוג וסושיאל",
    description: "בפלאנט פיקסל, אנחנו מבינים שמיתוג חזק הוא המפתח להצלחה. נבנה עבורך תדמית מרהיבה שתכבוש את הלבבות ברשתות החברתיות ותפיץ את הבשורה שלך לכל עבר, כמו מטאור בשמי האינטרנט.",
    buttonText: "בוא נתחיל",
  },
  {
    background: "/images/alian_background.png",
    title: "פיתוח ועיצוב אתרים",
    description: "בעזרת העיצוב הייחודי של פלאנט פיקסל, נגרום לאתר שלך להתבלט ולהשאיר רושם. אנו משלבים אסתטיקה מתקדמת עם חווית משתמש מושלמת כדי לוודא שהמבקרים באתר שלך ירגישו שהם נוחתים על כוכב חדש ומרהיב.",
    buttonText: "בוא נתחיל",
  },
  {
    background: "/images/rocket_background.png",
    title: "אפיון ופיתוח אפלקציות",
    description: "בפלאנט פיקסל, אנחנו לוקחים את העסק שלך לחלל עם פיתוח אתרים מתקדמים. הצוות שלנו יוצר אתרים חכמים, מהירים ומותאמים אישית כדי להבטיח שהאתר שלך יבריק כמו כוכב בשמי האינטרנט.",
    buttonText: "בוא נתחיל",
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.title}>השירותים שלנו</h2>
      <div className={styles.cards}>
        {servicesData.map((service, index) => (
          <Card key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ service, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: index * 0.2 },
      });
    } else {
      controls.start({ y: 50, opacity: 0 });
    }
  }, [controls, isInView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className={styles.card}
      style={{ backgroundImage: `url(${service.background})` }}
    >
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      {/* <button className={styles.button}>{service.buttonText}</button> */}
    </motion.div>
  );
};

export default Services;
