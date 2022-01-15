import React from 'react'
import styles from '/styles/Meter.module.scss'

export default function Meter({progress}) {
    return (
        <div class={styles.meter}>
            <div className={styles.progress} style={{width: (progress*100+"%")}}>x</div>
        </div>
    )
}
