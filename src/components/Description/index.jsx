import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import Link from "next/link";
export default function Description() {
  const phrase =
    "ברוכים הבאים ל-Planet Pixel - המקום בו חלומות דיגיטליים הופכים למציאות.אנו צוות מומחים דיגיטליים המתמחים בעיצוב ופיתוח אתרים, ומאמינים בלהפוך עסקים למותגים מובילים. אנו מציעים פתרון כולל לכל סוגי הפרויקטים, מהקטנים ועד הגדולים ביותר, עם דגש על טכנולוגיות מתקדמות וחוויית משתמש יוצאת דופן.הצטרפו אלינו למסע של צמיחה דיגיטלית והפכו את העסק שלכם לכוכב זוהר בשמי האינטרנט.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div id="about" ref={description} className={styles.description}>
      <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
        סטודיו עיצוב ופיתוח <br/> מתל אביב ועד הירח
      </motion.p>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <Link href="#contact" >
        <Rounded className={styles.button}>
          <p>אני רוצה פרטים</p>
        </Rounded>
        </Link>
      </div>
    </div>
  );
}
