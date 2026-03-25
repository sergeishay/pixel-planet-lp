import React from "react";
import Image from "next/image";
import styles from "./Clients.module.scss";

const clients = [
  { image: "/images/clients-logos/logo-amitim.png", title: "amitim" },
  { image: "/images/clients-logos/logo-bestie.png", title: "bestie" },
  { image: "/images/clients-logos/logo-cotton.png", title: "cotton" },
  { image: "/images/clients-logos/logo-localport.png", title: "localport" },
  { image: "/images/clients-logos/logo-vop.png", title: "vop" },
  { image: "/images/clients-logos/logo-ysbatim.png", title: "ysbatim" },
  { image: "/images/clients-logos/logo-galacticads.png", title: "galacticads" },
  { image: "/images/clients-logos/logo-ranrahav.png", title: "rahav" },
  { image: "/images/clients-logos/logo-sketchpad.png", title: "sketchpad" },
  { image: "/images/clients-logos/logo-portal.png", title: "portal" },
  { image: "/images/clients-logos/logo-whiteglow.png", title: "whiteglow" },
  { image: "/images/clients-logos/logo-sura.png", title: "sura" },
  { image: "/images/clients-logos/logo-costello.png", title: "costello" },
];

const Clients = () => {
  return (
    <div id="clients" className={styles.clients}>
      <h2 className={styles.title}>הכוכבים שלנו</h2>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* אנחנו מכפילים את המערך כדי ליצור לולאה אינסופית חלקה */}
          {clients.concat(clients).map((client, index) => (
            <div key={index} className={styles.client}>
              <Image
                src={client.image}
                alt={client.title}
                width={120} // טיפה יותר גדול כדי שייראה טוב
                height={60}
                className={styles.image}
                style={{ objectFit: "contain" }}
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;