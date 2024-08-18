import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./Services.module.scss";

const servicesData = [
  {
    background: "/images/planet_background.png",
    title: "מיתוג וסושיאל",
    description: "ב-Pixel Planet, אנו מבינים שמיתוג חזק הוא המפתח להצלחה. אנו יוצרים שפה עיצובית מרהיבה שמותאמת אישית לצרכים שלך, כזו שתכבוש את הלבבות ברשתות החברתיות ותפיץ את המסר שלך בצורה רחבה ומדויקת.",
    buttonText: "בוא נתחיל",
  },
  {
    background: "/images/alian_background.png",
    title: "פיתוח ועיצוב אתרים",
    description: "בעזרת שילוב של יצירתיות, אסתטיקה ייחודית וחוויית משתמש מעולה, אנו יוצרים אתרים שמותאמים בדיוק לצרכים שלך. דואגים שהאתר שלך יבלוט וישאיר רושם בלתי נשכח על המבקרים, בו הם ירגישו שהם נוחתים על כוכב חדש ומרהיב.",
    buttonText: "בוא נתחיל",
  },
  {
    background: "/images/rocket_background.png",
    title: "אפיון ופיתוח אפלקציות",
    description: "צוות המומחים שלנו מתמחה באפיון מקצה לקצה, הכולל מחקר משתמשים, Road Map ו-User Story. אנחנו מטיסים את העסק שלך לחלל עם פיתוח אפליקציות מתקדמות ומקצועיות.",
    buttonText: "בוא נתחיל",
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.title}>גלקסיה של פתרונות</h2>
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
