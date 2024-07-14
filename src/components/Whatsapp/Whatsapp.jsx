import React from 'react'
import Link from 'next/link'
import styles from './whatsapp.module.scss'
import Image from 'next/image'

const Whatsapp = () => {
  return (
    <div className={styles.whatsappButton}>
      <Link href="https://wa.me/+972549093350" target="_blank">
        <Image src="/images/whatsappButton.svg" alt="WhatsApp" width={24} height={24} />
      </Link>
    </div>
  )
}

export default Whatsapp
