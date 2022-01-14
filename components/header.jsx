import React from 'react'
import styles from "/styles/Home.module.scss"
import Contact from './contact'

export default function Header({fullName, title, linkedin, location, phone}) {
    return (
        <div className={styles.header}>
            <div className={styles.nameTitle}>
                <p className={styles.name}>{fullName}</p>
                <p className={styles.title}>{title}</p>
            </div>
            <Contact linkedin={linkedin} location={location} phone={phone} />
        </div>
    )
}
