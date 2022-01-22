import React from 'react'
import styles from '/styles/Skills.module.scss'
import Meter from './meter'

export default function Skill({skills}) {
    if (!skills) {
        return <></>
    }
    return (
        <div className={styles.skillPane}>
            {skills.map((skill) => <div key={skill.treeName}>
                <div className={styles.skillName}>{skill.treeName}</div>
                <div className={styles.skillRatings}>
                    {skill.branches.sort((a, b) => b.mastery - a.mastery).map(subskill => 
                        <div className={styles.skill} key={subskill.skillName}>
                            <div>{subskill.skillName}</div>
                            <Meter progress={subskill.mastery} />
                        </div>
                    )}
                </div>
            </div>)}
        </div>
    )
}
