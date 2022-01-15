import React from 'react'
import styles from '/styles/Experience.module.scss'

export default function Education({educations}) {
    return (
        <div className={styles.sectionCard}>
            <h3 className={styles.title}>Education</h3>
            {educations.map((education, index) => <div key={`education.${index}`} className={styles.sectionText}>
                <div className={styles.sectionHeader}>
                    <div>
                        <div className={styles.company}>{[education.certification, education.major].join(', ')}</div>
                        <div className={styles.role}>{education.name}</div>
                    </div>
                    <div className={styles.time}>{[education.startDate ? education.startDate+'-' : '', education.endDate ? education.endDate : 'Present']}</div>
                </div>
            </div>)}
        </div>
    )
}
