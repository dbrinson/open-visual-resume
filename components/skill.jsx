import React from 'react'
import styles from '/styles/Home.module.scss'

export default function Skill({skills}) {
    console.log({skills})
    if (!skills) {
        return <></>
    }
    return (
        <div className={styles.skillPane}>
            {Object.keys(skills).map((skill) => <>
                <div className={styles.skillName}>{skill}</div>
                <>
                    {Object.keys(skills[skill]).map(subskill => <div className={styles.skill}>
                        <div>{subskill}</div><div>{skills[skill][subskill]}</div>
                    </div>)}
                </>
            </>)}
        </div>
    )
}
