// components/WorkFlow.js
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className={styles.workflow} ref={ref}>
      <h2 className={styles.title}>מה אנחנו עושים?</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <motion.div
                className={`${styles.line} ${styles.vertical}`}
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              />
            )}
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
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
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
