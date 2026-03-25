"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./brandingProject.module.scss"; 

const BrandingProject = ({ project }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  // כל התמונות יחד (שימושי לקרוסלה במובייל)
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

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  // --- Render Logic ---
  if (isMobile) {
    // ==========================================
    //                 MOBILE VIEW
    // ==========================================
    return (
      <div className={styles.brandingProjectContainerMobile}>
        {/* תוכן הטקסט */}
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

        {/* קרוסלת התמונות */}
        <div className={styles.carouselContainer}>
          <AnimatePresence initial={false} custom={direction}>
             <motion.div
                key={page}
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
                    sizes="(max-width: 900px) 90vw"
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
                            onClick={() => {
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
    // ==========================================
    //                DESKTOP VIEW
    // ==========================================
    return (
      <div className={styles.desktopBrandingContainer}>
        
        {/* חלק עליון: חלוקה של 50/50 - טקסט ותמונה מרכזית */}
        <div className={styles.desktopTopSection}>
          
          {/* צד הטקסט */}
          <motion.div 
            className={styles.desktopTextContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          {/* צד התמונה המרכזית (project.image) */}
          <motion.div 
            className={styles.desktopMainImageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={project.image}
              alt={`${project.title} - Main Image`}
              fill
              style={{ objectFit: "cover" }} // או contain, תלוי בעיצוב שלך
              className={styles.mainImage}
              quality={95}
              sizes="50vw"
            />
          </motion.div>
        </div>

        {/* חלק תחתון: גריד של שאר התמונות (project.imageGallery) */}
        {project.imageGallery && project.imageGallery.length > 0 && (
          <div className={styles.desktopGalleryGrid}>
            {project.imageGallery.map((imgSrc, index) => (
              <motion.div
                key={index}
                className={styles.galleryImageWrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }} // Stagger אפקט
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} - Gallery Image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.galleryImage}
                  quality={90}
                  sizes="(max-width: 1200px) 33vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        )}
        
      </div>
    );
  }
};

export default BrandingProject;