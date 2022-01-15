import React from 'react'
import styles from '/styles/Home.module.scss'
import Image from 'next/image'
import { phoneFormat } from '/util/formats'

export default function Contact({location, linkedin, phone}) {
    return (
        <div className={styles.contactDetails}>
            <p className="location"><Image src="/location-black-34.png" width="12pt" height="12pt" /> {location}</p>
            <p className="linkedin"><Image src="/in-black-34.png" width="12pt" height="12pt" /> {linkedin}</p>
            <p className="phone"><Image src="/phone-black-34.png" width="12pt" height="12pt" /> {phoneFormat(phone)}</p>
        </div>
    )
}
