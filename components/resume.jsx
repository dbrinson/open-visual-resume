import React, { forwardRef } from 'react'
import styles from '/styles/Resume.module.scss'
import Experience from '/components/experience'
import Header from '/components/header'
import Skill from '/components/skill'

const Resume = forwardRef(({profile, draft}, ref) => {
    const {pronouns, fullName, title, linkedin, location, phone, subprofile} = profile;

    return (
        <main className={styles.main} ref={ref}>
            <Header pronouns={pronouns} fullName={fullName} title={title} linkedin={linkedin} location={location} phone={phone} />
            <div className={styles.contentRight}>
                <Skill skills={subprofile[draft].skills} />
                <Experience experiences={subprofile[draft].experience} />
            </div>
        </main>
    )
});
export default Resume;
