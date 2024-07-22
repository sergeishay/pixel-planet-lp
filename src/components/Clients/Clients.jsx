import React from "react";
import Image from "next/image";
import styles from "./Clients.module.scss";
import { motion } from "framer-motion";

const clients = [
  {
    image: "/images/ysbatim2.png",
    title: "ysbatim",
  },
  {
    image: "/images/suramare.png",
    title: "suramare",
  },
  {
    image: "/images/amitim.svg",
    title: "amitim",
  },
  {
    image: "/images/bestie.svg",
    title: "bestie",
  },
  {
    image: "/images/cotton-logo.png",
    title: "cotton",
  },
  {
    image: "/images/rahav4.png",
    title: "rahav",
  },
];
const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    y: 0,
    opacity: 1,
    duration: 1.1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const Clients = () => {
  return (
    <div id="clients" className={styles.clients}>
      <h2 className={styles.title}>הכוכבים שלנו</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className={styles.mainDiv}
      >
        {clients.map((client, index) => (
          <motion.div variants={item} key={index} className={styles.client}>
            <Image
              src={client.image}
              alt={client.title}
              layout="responsive"
              width={100}
              height={50}
              className={styles.image}
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Clients;
