"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import Rounded from "../../common/RoundedButton";
import Form from "../../components/Form/Form";
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
      <div className={styles.desktopImage}>
        <Image
          className={styles.panda}
          src="/images/panda.webp"
          fill={true}
          alt="background"
        />
      </div>
      <div className={styles.mobileImage}>
        <Image
          src="/images/mobile-hero.jpg"
          fill={true}
          alt="background for mobile"
        />
      </div>
      <div className={styles.mainContainer}>
        <div data-scroll data-scroll-speed={0.1} className={styles.mainTitle}>
          <p>
            זה הזמן להטיס
            <br />
            את העסק שלך לחלל
          </p>
        <div data-scroll data-scroll-speed={0.04} className={styles.description}>
          <p>פיתוח ועיצוב אתרים שגורמים לפנדות לטוס לחלל</p>
        </div>
        </div>

        <div className={styles.buttonContainer}>
          <Rounded className={styles.moreButton}>
            <p>דברו איתנו</p>
          </Rounded>
        </div>
        <div className={styles.bottomForm}>
          <div className={styles.rightDiv}>
            <p className={styles.smallTitlte}>לפרטים נוספים</p>
            <p className={styles.bigTitle}>דברו איתנו</p>
          </div>
          <Form />
          <div className={styles.leftDiv}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33 16.0696C33 20.5174 31.4217 24.3196 28.2652 27.4761C25.1087 30.6326 21.2826 32.2109 16.787 32.2109C14.1087 32.2109 11.5022 31.5413 8.96739 30.2022L0 33L2.86957 24.3913C1.33913 21.8087 0.573913 19.0348 0.573913 16.0696C0.573913 11.6217 2.15217 7.83152 5.3087 4.69891C8.46522 1.5663 12.2913 0 16.787 0C21.2826 0 25.1087 1.5663 28.2652 4.69891C31.4217 7.83152 33 11.6217 33 16.0696ZM16.787 2.51087C13.0087 2.51087 9.79239 3.83804 7.13804 6.49239C4.4837 9.14674 3.15652 12.3391 3.15652 16.0696C3.15652 19.0348 4.01739 21.6891 5.73913 24.0326L4.01739 29.0543L9.32609 27.4043C11.6696 28.887 14.1565 29.6283 16.787 29.6283C20.5652 29.6283 23.7815 28.3011 26.4359 25.6467C29.0902 22.9924 30.4174 19.8 30.4174 16.0696C30.4174 12.3391 29.0902 9.14674 26.4359 6.49239C23.7815 3.83804 20.5652 2.51087 16.787 2.51087ZM24.9652 19.8C24.9174 19.7522 24.6783 19.5848 24.2478 19.2978C24.1043 19.25 23.65 19.0467 22.8848 18.688C22.1196 18.3293 21.6652 18.1261 21.5217 18.0783C21.0913 17.9348 20.7804 17.9826 20.5891 18.2217C20.5413 18.3652 20.4337 18.5446 20.2663 18.7598C20.0989 18.975 19.9196 19.1902 19.7283 19.4054C19.537 19.6207 19.4174 19.7522 19.3696 19.8C19.1783 20.087 18.8913 20.1109 18.5087 19.8717C16.8826 19.0587 15.8065 18.413 15.2804 17.9348C14.9457 17.6 14.6228 17.2413 14.312 16.8587C14.0011 16.4761 13.7141 16.1174 13.4511 15.7826C13.188 15.4478 13.0565 15.2565 13.0565 15.2087C12.913 14.8739 12.9848 14.6109 13.2717 14.4196C13.463 14.1326 13.6543 13.8935 13.8457 13.7022L14.2761 13.0565C14.3717 12.8174 14.3478 12.5783 14.2043 12.3391C14.013 11.7174 13.6065 10.737 12.9848 9.39783C12.8413 8.96739 12.5543 8.75217 12.1239 8.75217H11.3348C10.9043 8.75217 10.5457 8.91957 10.2587 9.25435C9.35 10.163 8.89565 11.2391 8.89565 12.4826C8.89565 13.6304 9.42174 14.9935 10.4739 16.5717L10.6174 16.787C10.713 16.9304 10.8207 17.0859 10.9402 17.2533C11.0598 17.4207 11.2272 17.6359 11.4424 17.8989C11.6576 18.162 11.8728 18.413 12.088 18.6522C12.3033 18.8913 12.5543 19.1663 12.8413 19.4772C13.1283 19.788 13.4391 20.087 13.7739 20.3739C14.1087 20.6609 14.4554 20.9359 14.8141 21.1989C15.1728 21.462 15.5674 21.7011 15.9978 21.9163C16.4283 22.1315 16.8587 22.3348 17.2891 22.5261C18.0543 22.813 18.712 23.0522 19.262 23.2435C19.812 23.4348 20.2424 23.5543 20.5533 23.6022C20.8641 23.65 21.0913 23.6739 21.2348 23.6739C21.3783 23.6739 21.5457 23.65 21.737 23.6022C21.9283 23.5543 22.0478 23.5304 22.0957 23.5304C22.5261 23.4826 23.0402 23.2674 23.638 22.8848C24.2359 22.5022 24.6065 22.0957 24.75 21.6652C25.1326 20.6609 25.2043 20.0391 24.9652 19.8Z"
                fill="white"
              />
            </svg>
            <p className={styles.smallTitlte}>גם ב-whatsapp</p>

          </div>
        </div>
      </div>
      <StarsCanvas />
    </motion.main>
  );
}
