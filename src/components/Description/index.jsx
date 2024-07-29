import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import Link from "next/link";
export default function Description() {
  const phrase = "";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div id="about" ref={description} className={styles.description}>
      <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
      בית תוכנה ועיצוב מהחלל
      </motion.p>
      <div className={styles.body}>
        <p className={styles.textDescription}>
        <p className={styles.pTag}>
          ברוכים הבאים ל- Pixel Planet המקום בו חלומות דיגיטליים הופכים למציאות.
        </p>
          עם עיצובי UX/UI פורצי דרך, אינטגרציות מתקדמות וטכנולוגיות חדשניות,
          אנחנו מובילים אתכם לצמיחה דיגיטלית באמצעות פתרונות כוללים לכל סוגי
          הפרוייקטים, מהקטנים ועד הגדולים ביותר ומספקים לכם חוויית משתמש יוצאת
          דופן. אנחנו מאמינים בלהפוך עסקים למותגים ,מזמינים אתכם להצטרף אלינו
          למסע בין כוכבים.
        </p>
        <Link href="#contact">
          <Rounded className={styles.button}>
            <p>אני רוצה פרטים</p>
          </Rounded>
        </Link>
      </div>
    </div>
  );
}
