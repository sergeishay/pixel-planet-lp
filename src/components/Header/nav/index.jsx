import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link'; // Ensure this is the correct import path
import Curve from './Curve';
import Footer from './Footer';
import Image from 'next/image';

const navItems = [
  {
    title: "מי אנחנו",
    href: "/#about",
  },
  {
    title: "פרויקטים",
    href: "/#projects",
  },
  {
    title: "צרו קשר",
    href: "/#contact",
  },
];

export default function Nav({ isActive, setIsActive }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
    >
      <div className={styles.closeButton} onClick={handleClose}>
        <Image src="/images/close.svg" width={15} height={15} alt="close" />
      </div>
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          <div className={styles.header}>
            <p>תפריט </p>
          </div>
          {navItems.map((data, index) => (
            <Link 
              key={index} 
              data={{ ...data, index }} 
              isActive={selectedIndicator === data.href} 
              setSelectedIndicator={setSelectedIndicator}
              onClick={handleClose} // Pass the handleClose function to each Link
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
