import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

export default function Index({ data, isActive, setSelectedIndicator, onClick }) {
  const { title, href, index } = data;

  const handleClick = () => {
    setSelectedIndicator(href);
    if (onClick) onClick(); // Call the handleClose function if it is passed
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href} onClick={handleClick}>
        {title}
      </Link>
    </motion.div>
  );
}
