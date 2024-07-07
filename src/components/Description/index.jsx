import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';


export default function Description() {

    const phrase = "ברוכים הבאים ל-Planet Pixel - המקום בו חלומות הופכים לתוצרים דיגיטליים. אנחנו צוות של אסטרונאוטים דיגיטליים, מעצבים ומפתחים ואנחנו מאמינים בלהפוך עסקים למותגים ביום יום אנו לובשים את חליפת החלל שלנו וטסים לגלקסיה בין כל הכוכבים על מנת...... אנחנו מזמינים אתכם להצטרף למסע משותף של צמיחה דיגיטלית.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>אז מי אנחנו?</motion.p>
            <div className={styles.body}>

                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
