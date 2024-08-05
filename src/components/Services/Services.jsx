import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./Services.module.scss";

const servicesData = [
  {
    background: "/images/planet_background.png",
    title: "מיתוג וסושיאל",
    description: "ב-Pixel Planet, אנו מבינים שמיתוג חזק הוא המפתח להצלחה. אנו יוצרים תדמית מרהיבה שמותאמת אישית לצרכים שלך, כזו שתכבוש את הלבבות ברשתות החברתיות ותפיץ את המסר שלך בצורה רחבה ומדויקת. בעזרת עיצוב מקצועי ואסטרטגיות מתקדמות, אנו מבטיחים שהמותג שלך יזכה לחשיפה מרבית ויהפוך למוביל בתחומו.",
    buttonText: "בוא נתחיל",
  },
  {
    background: "/images/alian_background.png",
    title: "פיתוח ועיצוב אתרים",
    description: "אנו מביאים את האתר שלך לקדמת הבמה עם עיצוב ופיתוח מתקדמים. בעזרת שילוב של אסתטיקה ייחודית וחוויית משתמש מעולה, אנו יוצרים אתרים שמותאמים בדיוק לצרכים שלך. בין אם מדובר בוורדפרס או בקוד מותאם אישית, אנו דואגים שהאתר שלך יבלוט וישאיר רושם בלתי נשכח על המבקרים.",
    buttonText: "בוא נתחיל",
  },
  {
    background: "/images/rocket_background.png",
    title: "אפיון ופיתוח אפלקציות",
    description: "אנחנו מביאים את האפליקציות שלך לקדמת הבמה עם React Native ו-Flutter. צוות המומחים שלנו מתמחה באפיון מקצה לקצה, הכנת Road Map ו-User Story, ובחירת סט הטכנולוגיות המתאים ביותר לכל עסק. אנו דואגים לפיתוח מהיר ואיכותי, תוך שמירה על עלויות נמוכות, כדי להעניק לך פתרון מיטבי שיתאים בדיוק לצרכים שלך.",
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
