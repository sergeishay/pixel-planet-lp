"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import Rounded from "../../common/RoundedButton";
import Form from "../../components/Form/Form"
import { motion } from "framer-motion";
import StarsCanvas from "../../common/Stars/Stars";
export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <Image
        className={styles.panda}
        src="/images/panda.webp"
        fill={true}
        alt="background"
      />
      {/* <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div> */}
      <div className={styles.mainContainer}>
        <div data-scroll data-scroll-speed={0.2} className={styles.mainTitle}>
          <p>
            זה הזמן להטיס
            <br />
            את העסק שלך לחלל
          </p>
        </div>
        {/* <div data-scroll data-scroll-speed={0.1} className={styles.description}>
          <p>Designer & Developer</p>
        </div> */}
        <div className={styles.buttonContainer}>
          <Rounded className={styles.moreButton}>
            <p>דברו איתנו</p>
          </Rounded>

        </div>
        <div className={styles.bottomForm}>
          <Form />
        </div>
      </div>

      <StarsCanvas />
    </motion.main>
  );
}
