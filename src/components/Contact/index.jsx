import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Link from "next/link";
import Form from "../Form/Form";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.topSection}>
          <div className={styles.rightSection}>
            <p className={styles.bigTitle}>
              דברו
              <br /> איתנו
            </p>
            <Link href="mailto:pixelplanet@gmail.com">
              <p className={styles.smallTitlte}>pixelplanet@gmail.com</p>
            </Link>
            <Link href="tel:0549093350">
              <p className={styles.smallTitlte}>0549093350</p>
            </Link>
            <p className={styles.smallTitlte}>תל אביב, ישראל</p>
          </div>
          <div className={styles.leftSection}>
            <Form isFooter={true} />
          </div>
        </div>
        <div className={styles.nav}>
          <Image className={styles.logoFooter} src="/images/logo.svg" alt="logo" width="300" height="100" />
          <p className={styles.smallTitlte}>change everything on web</p>
          <div className={styles.social}>
            <Magnetic>
              <div className={styles.el}>
                <Link href="tel:0549093350">
                  <Image
                    src="/images/facebook.svg"
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
                <Link href="tel:0549093350">
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
                <Link href="tel:0549093350">
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
            <Magnetic>
              <div className={styles.el}>
                <Link href="tel:0549093350">
                  <Image
                    src="/images/github.svg"
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
              <p className={styles.smallTitlte}>Accessibility statement</p>
            </Link>
        </div>
      </div>
    </motion.div>
  );
}
