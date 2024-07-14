import React from "react";
import Image from "next/image";
import styles from "./Clients.module.scss";

const clients = [
  {
    image: "/images/ysbatim.svg",
    title: 'ysbatim'
  },
  {
    image: "/images/suramare.svg",
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
    image: "/images/cotton.svg",
    title: 'cotton'
  },
  {
    image: "/images/rahav.svg",
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
              width={150}
              height={70}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
