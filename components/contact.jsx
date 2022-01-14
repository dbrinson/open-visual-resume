import React from 'react'
import styles from '/styles/Home.module.scss'

export default function Contact({location, linkedin, phone}) {
    return (
        <div className={styles.contactDetails}>
            <p className="location">{location}</p>
            <p className="linkedin">{linkedin}</p>
            <p className="phone">{phone}</p>
        </div>
    )
}
