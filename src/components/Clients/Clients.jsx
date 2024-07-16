import React from "react";
import Image from "next/image";
import styles from "./Clients.module.scss";

const clients = [
  {
    image: "/images/ysbatim.png",
    title: 'ysbatim'
  },
  {
    image: "/images/suramare.png",
    title: 'suramare'
  },
  {
    image: "/images/amitim.svg",
    title: 'amitim'
  },
  {
    image: "/images/bestie.svg",
    title: 'bestie'
  },
  {
    image: "/images/cotton-logo.png",
    title: 'cotton'
  },
  {
    image: "/images/rahav3.png",
    title: 'rahav'
  },
];

const Clients = () => {
  return (
    <div id="clients" className={styles.clients}>
      <h2 className={styles.title}>לקוחות שלנו </h2>
      <div className={styles.mainDiv}>
        {clients.map((client, index) => (
          <div key={index} className={styles.client}>
            <Image
              src={client.image}
              alt={client.title}
              layout="responsive"
              width={100}
              height={50}
              className={styles.image}
              style={{objectFit: "contain"}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
