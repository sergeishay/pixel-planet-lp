"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import Rounded from "../../common/RoundedButton";
import Form from "../../components/Form/Form";
import StarsCanvas from "../../common/Stars/Stars";
import Link from "next/link";

// Define entry animation variants for the title and description
const titleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const descriptionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3  // adding a little delay for a staggered effect
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <motion.main initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.desktopImage}>
        <Image
          className={styles.panda}
          src="/images/pandaNew.jpg"
          fill={true}
          alt="background"
          quality={100}
        />
      </div>
      <div className={styles.mobileImage}>
        <Image
          src="/images/mobile-hero4.jpg"
          fill={true}
          alt="background for mobile"
          quality={100}
        />
      </div>
      <div className={styles.mainContainer}>
        {/* Outer container with scroll transform */}
        <motion.div style={{ y: y1 }} className={styles.mainTitle}>
          {/* Inner element for entry animation */}
          <motion.div 
            variants={titleVariants} 
            initial="initial" 
            animate="animate"
          >
            <p>
              {""}בונים אתרים {""}
              <br className={styles.mobil} />
              שיזניקו  
              <br /> את העסק שלכם לירח
            </p>
          </motion.div>
        </motion.div>
        <motion.div style={{ y: y2 }} className={styles.description}>
          <motion.div
            variants={descriptionVariants}
            initial="initial"
            animate="animate"
          >
            <p>
              {" "}
              פיתוח ועיצוב אתרים, אפליקציות, מיתוג וסושיאל מדיה - <br />
              כל מה שהעסק שלך צריך כדי להמריא להצלחה דיגיטלית!
            </p>
          </motion.div>
        </motion.div>
        <div className={styles.buttonContainer}>
          <Link href="#contact">
            <Rounded className={styles.moreButton}>
              <p className={styles.pTagButton} style={{ textDecoration: "none" }}>
                שגרו אלינו
              </p>
            </Rounded>
          </Link>
        </div>
        <div className={styles.bottomForm}>
          <div className={styles.rightDiv}>
            <p className={styles.smallTitlte}>לפרטים נוספים</p>
            <p className={styles.bigTitle}>דברו איתנו</p>
          </div>
          <Form isFooter={false} />
          <div className={styles.leftDiv}></div>
        </div>
      </div>
      <StarsCanvas />
    </motion.main>
  );
}
