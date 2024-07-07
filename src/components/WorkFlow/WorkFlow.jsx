// components/WorkFlow.js
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './WorkFlow.module.scss';

const steps = [
  {
    title: 'מחקר',
    points: ['ננחות התחילתיות,מחקר שוק', 'ננחות התחילתיות,מחקר שוק', 'ננחות התחילתיות,מחקר שוק'],
  },
  {
    title: 'עיצוב Ui/UX',
    points: ['ננחות התחילתיות,מחקר שוק', 'ננחות התחילתיות,מחקר שוק', 'ננחות התחילתיות,מחקר שוק'],
  },
  {
    title: 'פיתוח',
    points: ['ננחות התחילתיות,מחקר שוק', 'ננחות התחילתיות,מחקר שוק', 'ננחות התחילתיות,מחקר שוק'],
  },
];

const WorkFlow = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const { top, height } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = window.scrollY + windowHeight;
      const elementScroll = top + window.scrollY;

      if (totalScroll >= elementScroll && totalScroll <= elementScroll + height + windowHeight) {
        const scrollProgress = ((totalScroll - elementScroll) / (height + windowHeight)) * 100;
        setProgress(Math.min(Math.max(scrollProgress, 0), 100));
      } else if (totalScroll < elementScroll) {
        setProgress(0);
      } else if (totalScroll > elementScroll + height + windowHeight) {
        setProgress(100);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.workflow} ref={ref}>
      <h2 className={styles.title}>מה אנחנו עושים?</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: progress > 0 ? 1 : 0, y: progress > 0 ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            key={index}
          >
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <div className={styles.divider}></div>
            <ul className={styles.list}>
              {step.points.map((point, idx) => (
                <li key={idx} className={styles.listItem}>
                  ✦ {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      {/* <div className={styles['progress-bar-container']}>
        <motion.div
          className={styles['progress-bar']}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
        />
      </div> */}
    </div>
  );
};

export default WorkFlow;
