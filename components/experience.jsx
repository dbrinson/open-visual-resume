import React from 'react'
import styles from '/styles/Home.module.scss'

export default function Experience({experiences}) {
    return (
        <div className={styles.experienceSection}>
            <h3 className={styles.title}>Experience</h3>
            {experiences.map((experience, index) => <div key={`experience.${index}`} className={styles.experience}>
                <div className={styles.experienceHeader}>
                    <div>
                        <div>{experience.company}</div>
                        <div>{experience.title}</div>
                    </div>
                    <div>{[experience.startDate, '-', experience.endDate ? experience.endDate : 'Present']}</div>
                </div>
            </div>)}
        </div>
    )
}
