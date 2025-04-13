// components/BrandingProject/BrandingProject.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Keep for mobile carousel
import styles from "./brandingProject.module.scss"; // Styles for THIS component (mainly mobile)
import mainStyles from "./projects.module.scss"; // Import main styles for desktop structure classes

const BrandingProject = ({ project }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]); // For mobile carousel animation direction

  const allImages = [project.image, ...(project.imageGallery || [])];

  // --- Mobile Check ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- Mobile Carousel Logic ---
  const paginate = (newDirection) => {
    const newIndex = (currentImageIndex + newDirection + allImages.length) % allImages.length;
    setCurrentImageIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

   // Variants for carousel image transition (keep from previous)
   const variants = {
    enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  // --- Render Logic ---
  if (isMobile) {
    // --- Mobile Carousel View ---
    // Use the existing mobile carousel JSX structure from your previous 'BrandingProject.js' attempt.
    // Ensure it uses styles from 'brandingProject.module.scss'.
    return (
      <div className={styles.brandingProjectContainerMobile}>
        {/* Content First on Mobile */}
        <div className={styles.contentContainerMobile}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.serviceTitle}>שירות</p>
            <div className={styles.divider}></div>
            <p className={styles.service}>{project.service}</p>
            {project.liveLink && project.liveLink !== "#" && (
                <div className={styles.buttonContainer}>
                <Link href={project.liveLink} target="_blank" className={styles.liveSite}>
                    אתר לייב
                </Link>
                </div>
            )}
        </div>

        {/* Carousel Image */}
        <div className={styles.carouselContainer}>
          <AnimatePresence initial={false} custom={direction}>
             <motion.div
                key={page} // Use page state which includes index and direction
                className={styles.imageWrapper}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) { paginate(1); } else if (swipe > 10000) { paginate(-1); }
                }}
             >
                 <Image
                    src={allImages[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    quality={90}
                    priority={currentImageIndex === 0}
                    sizes="(max-width: 900px) 90vw" // Mobile size
                 />
             </motion.div>
          </AnimatePresence>
           {allImages.length > 1 && (
             <>
                 <button onClick={() => paginate(-1)} className={`${styles.carouselButton} ${styles.prev}`}> &#10095; </button>
                 <button onClick={() => paginate(1)} className={`${styles.carouselButton} ${styles.next}`}> &#10094; </button>
                 <div className={styles.dotsContainer}>
                    {allImages.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                            onClick={() => { /* Optional: Direct dot navigation */
                                const newDirection = index > currentImageIndex ? 1 : -1;
                                setCurrentImageIndex(index);
                                setPage([index, newDirection]);
                            }}
                         />
                    ))}
                 </div>
             </>
           )}
        </div>
      </div>
    );
  } else {
    // --- Desktop Sticky Content / Scrolling Images View ---
    // We now use classes from the main projects.module.scss for the structure
    return (
      <div className={mainStyles.brandingProjectContainer}>
        {/* Left: Image Area */}
        <div className={mainStyles.imageAreaWrapper}>
          {allImages.map((imgSrc, index) => (
            // Each image gets its own sticky wrapper
            <motion.div
                key={imgSrc + index} // Combine src and index for unique key
                className={mainStyles.imageStickyWrapper}
                initial={{ opacity: 0.5, scale: 0.9 }} // Subtle entry for image wrappers
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3, once: true }} // Trigger when 30% visible
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={imgSrc}
                alt={`${project.title} - Image ${index + 1}`}
                fill // Use fill + objectFit in SCSS for responsiveness
                className={mainStyles.brandingImage} // Apply class for object-fit
                quality={95}
                priority={index < 2} // Prioritize first couple of images
                sizes="50vw" // Adjust based on your flex basis %
              />
            </motion.div>
          ))}
        </div>

        {/* Right: Sticky Content */}
        <div className={mainStyles.stickyContentContainer}>
          {/* You can add entry animation to the content block too */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }} // Animate on load as it's sticky
             transition={{ duration: 0.5, delay: 0.3 }}
           >
                <h3 className={mainStyles.projectTitle}>{project.title}</h3>
                <p className={mainStyles.description}>{project.description}</p>
                <p className={mainStyles.serviceTitle}>שירות</p>
                <div className={mainStyles.divider}></div>
                <p className={mainStyles.service}>{project.service}</p>
                {project.liveLink && project.liveLink !== "#" && (
                    <div className={mainStyles.buttonContainer}>
                    <Link href={project.liveLink} target="_blank" className={mainStyles.liveSite}>
                        אתר לייב
                    </Link>
                    </div>
                )}
            </motion.div>
        </div>
      </div>
    );
  }
};

export default BrandingProject;