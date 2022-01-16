import React from 'react'
import styles from '/styles/Home.module.scss'
import Image from 'next/image'
import { phoneFormat } from '/util/formats'

export default function Contact({details}) {
    return (
        <div className={styles.contactDetails}>
            {details.map(detail => <p key={detail.name} className="contact"><Image src={detail.icon} width="12pt" height="12pt" alt={detail.name} /> {detail.value}</p>)}
        </div>
    )
}
