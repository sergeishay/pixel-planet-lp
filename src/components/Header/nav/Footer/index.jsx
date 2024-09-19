import styles from './style.module.scss';
import Magnetic from "../../../../common/Magnetic";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <div className={styles.social}>

    <Magnetic>
      <div className={styles.el}>
        <Link
         href="https://www.instagram.com/pixel_planet_digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
         target="_blank"
         >
          <Image
            src="/images/instagram.svg"
            width={20}
            height={20}
            alt="logo"
          />
        </Link>
        <div className={styles.indicator}></div>
      </div>
    </Magnetic>
    <Magnetic>
      <div className={styles.el}>
        <Link href="https://wa.me/+972549093350" target="_blank">
          <Image
            src="/images/whatsapp.svg"
            width={20}
            height={20}
            alt="logo"
          />
        </Link>
        <div className={styles.indicator}></div>
      </div>
    </Magnetic>
    <Magnetic>
      <div className={styles.el}>
        <Link
         href="https://www.facebook.com/profile.php?id=61564515264992"
         target="_blank"
         >
          <Image
            src="/images/facebook.svg"
            width={20}
            height={20}
            alt="logo"
          />
        </Link>
        <div className={styles.indicator}></div>
      </div>
    </Magnetic>
  </div>
  )
}
