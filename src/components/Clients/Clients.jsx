import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Clients.module.scss";

const clients = [
  {
    image: "/images/ysbatim3.png",
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
  {
    image: "/images/local-port.svg",
    title: "rahav",
  },
  {
    image: "/images/vop.svg",
    title: "rahav",
  },
];

const Clients = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = containerRef.current.querySelectorAll(
              `.${styles.client}`
            );
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add(styles.fadeIn);
              }, index * 300); // Delay each item by 300ms
            });
            observer.unobserve(entry.target); // Stop observing after the initial trigger
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="clients" className={styles.clients}>
      <h2 className={styles.title}>הכוכבים שלנו</h2>
      <div ref={containerRef} className={styles.mainDiv}>
        {clients.map((client, index) => (
          <div key={index} className={styles.client}>
            <Image
              src={client.image}
              alt={client.title}
              width={100}
              height={50}
              className={styles.image}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
