import React from 'react'
import styles from '/styles/Experience.module.scss'

export default function Experience({experiences}) {
    return (
        <div className={styles.sectionCard}>
            <h3 className={styles.title}>Experience</h3>
            {experiences.map((experience, index) => <div key={`experience.${index}`} className={styles.sectionText}>
                <div className={styles.sectionHeader}>
                    <div>
                        <div className={styles.company}>{experience.company}</div>
                        <div className={styles.role}>{experience.title}</div>
                    </div>
                    <div className={styles.time}>
                        <div>{experience.location}</div>
                        <div>{[experience.startDate, '-', experience.endDate ? experience.endDate : 'Present']}</div>
                    </div>
                </div>
                <div className={styles.description}>{experience.abstract}</div>
                <ul className={styles.sublist}>
                    {experience.responsibilities.map((text, index) => <li key={index}>{text}</li>)}
                </ul>
            </div>)}
        </div>
    )
}
