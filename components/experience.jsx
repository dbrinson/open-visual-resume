import React from 'react'
import styles from '/styles/Experience.module.scss'

export default function Experience({experiences}) {
    return (
        <div className={styles.experienceSection}>
            <h3 className={styles.title}>Experience</h3>
            {experiences.map((experience, index) => <div key={`experience.${index}`} className={styles.experience}>
                <div className={styles.experienceHeader}>
                    <div>
                        <div className={styles.company}>{experience.company}</div>
                        <div className={styles.role}>{experience.title}</div>
                    </div>
                    <div className={styles.time}>{[experience.startDate, '-', experience.endDate ? experience.endDate : 'Present']}</div>
                </div>
                <ul className={styles.experienceResponsibility}>
                    {experience.responsibilities.map((text, index) => <li key={index}>{text}</li>)}
                </ul>
            </div>)}
        </div>
    )
}
