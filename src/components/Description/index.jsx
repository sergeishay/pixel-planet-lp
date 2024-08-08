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
        <span className={styles.pTag}>
          ברוכים הבאים ל- Pixel Planet המקום בו חלומות דיגיטליים הופכים למציאות.
        </span>
        <p className={styles.textDescription}>
          {/* <br /> */}
          עם עיצובי UX/UI חדשניים, אינטגרציות מתקדמות וטכנולוגיות פיתוח חדישות, אנחנו כאן כדי להפוך את העסק שלכם לכוכב זוהר בגלקסיה דיגיטלית. אנחנו לא רק מעצבים ומפתחים אתרים ואפליקציות – אנחנו מספקים פתרונות כוללים לכל סוגי הפרויקטים, מהקטנים ועד הגדולים ביותר.
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
