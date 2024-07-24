import styles from "./style.module.scss";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Image from "next/image";
import Link from "next/link";
import Form from "../Form/Form";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      id="contact"
      style={{ y }}
      ref={container}
      className={styles.contact}
    >
      <div className={styles.body}>
        <div className={styles.topSection}>
          <div className={styles.rightSection}>
            <Image
              src="/images/stars.png"
              width={123.25}
              height={123.25}
              alt="stars"
              className={styles.stars}
            />
            <p className={styles.bigTitle}>
              דברו
              <br /> איתנו
            </p>
            <Link href="mailto:info@pixel-planet.co.il">
              <p className={styles.smallTitlte}>info@pixel-planet.co.il</p>
            </Link>
            <Link href="tel:0549093350">
              <p className={styles.smallTitlte}>0549093350</p>
            </Link>
            <p className={styles.smallTitlte}>תל אביב, ישראל</p>
          </div>
          <div className={styles.leftSection}>
            <p>השאירו פרטים ונחזור אליכם בהקדם</p>
            <Form isFooter={true} />
          </div>
        </div>
        <div className={styles.nav}>
          <Image
            className={styles.logoFooter}
            src="/images/logo.svg"
            alt="logo"
            width="300"
            height="100"
          />
          <p className={styles.smallTitlte}>Your Vision, Our Space</p>
          <div className={styles.social}>
            <Magnetic>
              <div className={styles.el}>
                <Link
                  href="https://www.instagram.com/pixel_planet_digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <Image
                    src="/images/instagram.svg"
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </Link>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <Link href="https://wa.me/+972549093350" target="_blank">
                  <Image
                    src="/images/whatsapp.svg"
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </Link>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </div>
          <Link href="/accessibility">
            <p className={styles.smallTitlte}>הצהרת נגישות</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
