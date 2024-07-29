// components/Projects.js
"use client";
import React from "react";
import styles from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const projects = [

  {
    title: "COTTON CLUB",
    description:
      "עיצוב ופיתוח דף נחיתה עבור COTTON CLUB, חלל אורבני ואלגנטי מבית 'הנסיך'. המקום נולד מתוך הרצון לייצר מקום עכשווי לאירועים, תכנים, תרבות, בילויים ואוכל. האתר מציג את כל המידע הדרוש לאירועים מיוחדים בצורה אטרקטיבית ומזמינה.",
    service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://cotton-club.co.il",
    image: "/images/cotton-carusel.webp",
  },
  {
    title: "HOOBANK",
    description:
      "עיצוב ופיתוח דף נחיתה מודרני ואינטואיטיבי לבנק Hoobank, המספק שירותים פיננסיים מתקדמים ללקוחותיו. האתר מציג את השירותים השונים של הבנק בצורה נגישה תוך כדי חווית משתמש נוחה ופשוטה.",
    service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://bank-demo.sergei-lp.com/",
    image: "/images/bank-carusel.webp",
  },  {
    title: "HS-LAW",
    description:
      "עיצוב ופיתוח אתר תדמית לחיימסון סודאי. משרד עו״ד המוביל בישראל לענייני המגזר המושבי, החקלאי והמנהלי. פיתוח שפה עיצובית רחבה המבוססת על ערכים של מקצועיות, הישגיות וחדשנות.",
    service: "עיצוב ופיתוח אתר תדמית",
    liveLink: "https://hs-law.co.il/",
    image: "/images/haison-carusel.webp",
  },
];

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    y: 0,
    opacity: 1,
    duration: 1.1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const imgItem = {
  offscreen: {
    y: 200,
    x: -200,
    rotate: 40,
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    y: 0,
    x: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 3.8,
      ease: "circOut",
    },
  },
};
const cardVariants = {
  offscreenCard: {
    y: 200,
    rotate: -30
  },
  onscreenCard: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1.8
    }
  }
};



const Carousel = () => {
  return (
    <div id="projects" className={styles.projectsContainer}>
      <h2 className={styles.title}>מהנוצצים שלנו</h2>
      {projects.map((project, index) => (
        <div
          className={`${styles.project} ${
            index % 2 === 0 ? styles.reverse : ""
          }`}
          key={index}
        >
          <motion.div
            variants={imgItem}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className={styles.imageContainer}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={600}
              className={`${styles.projectImage}`}
            />
          </motion.div>
          <motion.div
            // variants={container}
            initial="offscreenCard"
            whileInView="onscreenCard"
            viewport={{ once: true, amount: 0 }}
            className={styles.contentContainer}
          >
            <motion.h3 variants={cardVariants} className={`${styles.projectTitle}`}>
              {project.title}
            </motion.h3>
            <motion.p variants={cardVariants} className={styles.description}>
              {project.description}
            </motion.p>
            <motion.p variants={cardVariants} className={styles.serviceTitle}>
              שירות
            </motion.p>
            <motion.div variants={cardVariants} className={styles.divider}></motion.div>
            <motion.p variants={cardVariants} className={styles.service}>
              {project.service}
            </motion.p>
            <motion.div variants={cardVariants} className={styles.buttonContainer}>
              <Link
                href={project.liveLink}
                target="_blank"
                className={styles.liveSite}
              >
                אתר לייב
              </Link>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
