import React from 'react'
import styles from '/styles/Skills.module.scss'
import Meter from './meter'

export default function Skill({skills}) {
    if (!skills) {
        return <></>
    }
    return (
        <div className={styles.skillPane}>
            {Object.keys(skills).map((skill) => <div key={skill}>
                <div className={styles.skillName}>{skill}</div>
                <div className={styles.skillRatings}>
                    {Object.keys(skills[skill]).map(subskill => 
                        <div className={styles.skill} key={subskill}>
                            <div>{subskill}</div>
                            <Meter progress={skills[skill][subskill]} />
                        </div>
                    )}
                </div>
            </div>)}
        </div>
    )
}
