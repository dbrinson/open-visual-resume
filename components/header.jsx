import React from 'react'
import styles from "/styles/Header.module.scss"
import Contact from './contact'

export default function Header({pronouns, fullName, title, contactDetails}) {
    return (
        <div className={styles.header}>
            <div className={styles.nameTitle}>
                <p><span className={styles.name}>{fullName}</span> <span className={styles.pronouns}> ({pronouns})</span></p>
                <p className={styles.title}>{title}</p>
            </div>
            <Contact details={contactDetails} />
        </div>
    )
}
