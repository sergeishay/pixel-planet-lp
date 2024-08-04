import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "sura-final.png",
  },
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "nova-final.png",
  },
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "unicorn-final.png",
  },
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "manchilla-final.png",
  },
];

const slider2 = [
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "ysbatim-final.png",
  },
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "bedroom-final.png",
  },
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "game-final.png",
  },
  {
    color: "rgba(255, 255, 255, 0.25)",
    src: "hello-final.png",
  },
];

export default function SlideImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div className={styles.sliderBody}>
      <h2 className={styles.title}>עוד שותפים למסע בפלנטה</h2>
      <div ref={container} className={styles.slidingImages}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => {
            return (
              <div
                key={index}
                className={styles.project}
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`/images/${project.src}`}
                    quality={100}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => {
            return (
              <div
                key={index}
                className={styles.project}
                style={{ backgroundColor: project.color }}
              >
                <div key={index} className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`/images/${project.src}`}
                    quality={100}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
