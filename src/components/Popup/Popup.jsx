import React from "react";
import styles from "./Popup.module.scss";
import { motion } from "framer-motion";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className={styles.popupOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className={styles.popup}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>הטופס נשלח בהצלחה!</h2>
        <p>ניצור איתך קשר בהקדם האפשרי.</p>
        <p>בקר באתר המלא שלנו</p>
        <button className={styles.visitButton} onClick={() => window.location.href = "https://www.planet-pixel.co.il/"}>לכו לאתר</button>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
