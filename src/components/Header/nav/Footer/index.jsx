import styles from './style.module.scss';
import Magnetic from "../../../../common/Magnetic";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <div className={styles.social}>
    <Magnetic>
      <div className={styles.el}>
        <Link href="tel:0549093350">
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
    <Magnetic>
      <div className={styles.el}>
        <Link href="tel:0549093350">
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
        <Link href="tel:0549093350">
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
        <Link href="tel:0549093350">
          <Image
            src="/images/github.svg"
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
