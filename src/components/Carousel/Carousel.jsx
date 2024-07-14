"use client";
import React, { useState } from "react";
import styles from "./carousel.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Carousel = () => {
  // image index state
  const [activeIndex, setActiveIndex] = useState(0);

  // transition direction state
  const [transitionDirection, setTransitionDirection] = useState("next");

  // function to handle next button click
  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === 2 ? prevIndex : prevIndex + 1
    );
  };

  // function to handle previous button click
  const handlePrevious = () => {
    setTransitionDirection("previous");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  // array for titles and descriptions
  const texts = [
    {
      title: "hs-law",
      description: "עיצוב ופיתוח אתר תדמית מרשים עבור משרד עורכי דין המתמחה בדיני עבודה ודיני חברות. האתר משדר אמינות ומקצועיות, ומאפשר ללקוחות פוטנציאליים לקבל את כל המידע הנחוץ להם בצורה נוחה וברורה.",
      service: "עיצוב ופיתוח אתר תדמית",
      liveLink: "https://hs-law.co.il/"
    }    
    ,
    {
      title: "cotton-club",
      description: "עיצוב ופיתוח דף נחיתה עבור COTTON CLUB, חלל אורבני ואלגנטי מבית 'הנסיך'. המקום נולד מתוך הרצון לייצר מקום עכשווי לאירועים, תכנים, תרבות, בילויים ואוכל. האתר מציג את כל המידע הדרוש לאירועים מיוחדים בצורה אטרקטיבית ומזמינה.",
      service: "עיצוב ופיתוח דף נחיתה",
      liveLink: "https://cotton-club.co.il"
    }    
    ,
    {
      title: "hoobank",
      description: "עיצוב ופיתוח דף נחיתה מודרני ואינטואיטיבי לבנק Hoobank, המספק שירותים פיננסיים מתקדמים ללקוחותיו. האתר מציג את השירותים השונים של הבנק בצורה ברורה ונוחה לשימוש, ומשדר חדשנות וביטחון.",
      service: "עיצוב ופיתוח דף נחיתה",
      liveLink: "https://bank-demo.sergei-lp.com/"
    }    
    ,
  ];

  // defining text animation
  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // defining stagger text effect
  const textContainerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div id="projects"  className={styles.carouselContainer}>
      <div className={styles.topCarousel}>
        <motion.div
          className={styles.contentContainer}
          key={activeIndex}
          variants={textContainerVariant}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.titleContainer}>
            <motion.h1 variants={textVariants}>
              {texts[activeIndex].title}
            </motion.h1>
          </div>
          <div className={styles.descriptionContainer}>
            <motion.p variants={textVariants}>
              {texts[activeIndex].description}
            </motion.p>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.buttonContainer}>
            <Link href={texts[activeIndex].liveLink} target="_blank" className={styles.LiveSite}>אתר לייב</Link>
          </div>


        </motion.div>
        <div className={styles.imageWrapper}>
          <div className={styles.imagesContainer}>
            <motion.div
              className={styles.firstContainer}
              animate={{
                opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
                x:
                  activeIndex === 0 ? "0" : activeIndex === 1 ? "96px" : "96px",
                scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2,
              }}
              transition={{
                duration: 0.5, // Animation duration in seconds
                delay: 0, // Delay before the animation starts in seconds
                ease: "easeInOut", // Easing function for the animation
              }}
            >
              <Image
                className={styles.first}
                alt="first image"
                src="/images/haison-carusel.jpg"
                width={700}
                height={700}
                quality={100}
              />
            </motion.div>
            <motion.div
              className={styles.secondContainer}
              animate={{
                opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
                x:
                  activeIndex === 0
                    ? "-116px"
                    : activeIndex === 1
                    ? "0"
                    : "116px",
                scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: "easeInOut",
              }}
            >
              <Image
                className={styles.second}
                alt="second image"
                src="/images/cotton-carusel.jpg"
                width={700}
                height={700}
              ></Image>
            </motion.div>
            <motion.div
              className={styles.thirdContainer}
              animate={{
                opacity:
                  activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
                x:
                  activeIndex === 0
                    ? "-192px"
                    : activeIndex === 1
                    ? "-96px"
                    : "0",
                scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1,
              }}
              transition={{
                duration: 0.5, // Animation duration in seconds
                delay: 0, // Delay before the animation starts in seconds
                ease: "easeInOut", // Easing function for the animation
              }}
            >
              <Image
                className={styles.third}
                alt="third image"
                src="/images/bank-carusel.jpg"
                width={700}
                height={700}
              ></Image>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.bottomCarousel}>
        <div className={styles.controls}>
          <button
            className={
              activeIndex !== 0
                ? `${styles.previousContainer}`
                : `${styles.disabled}`
            }
            onClick={handlePrevious}
          >
            <Image
              src={
                activeIndex !== 0
                  ? "/images/previous-enabled.svg"
                  : "/images/previous-disabled.svg"
              }
              alt="previous icon"
              className={styles.previous}
              width={24}
              height={24}
            ></Image>
          </button>
          <button
            className={
              activeIndex !== 2
                ? `${styles.nextContainer}`
                : `${styles.disabled}`
            }
            onClick={handleNext}
          >
            <Image
              src={
                activeIndex !== 2
                  ? "/images/next-enabled.svg"
                  : "/images/next-disabled.svg"
              }
              alt="next icon"
              className={styles.next}
              width={24}
              height={24}
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
