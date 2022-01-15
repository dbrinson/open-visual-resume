import React from 'react'
import styles from '/styles/Experience.module.scss'

export default function Summary({summaryText}) {
    if (!summaryText) return <></>
    return (
        <div className={styles.sectionCard}>
            <h3 className={styles.title}>Summary</h3>
            <div style={{textIndent: '1rem'}} className={styles.sectionText}>
                {summaryText}
            </div>
        </div>
    )
}
