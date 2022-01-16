import React, { forwardRef } from 'react'
import styles from '/styles/Resume.module.scss'
import Experience from '/components/experience'
import Header from '/components/header'
import Skill from '/components/skill'
import Summary from './summary'
import Education from './education'

const Resume = forwardRef(({profile, draft}, ref) => {
    const {pronouns, fullName, title, contactDetails, subprofile} = profile;

    return (
        <main className={styles.main} ref={ref}>
            <Header pronouns={pronouns} fullName={fullName} title={title} contactDetails={contactDetails} />
            <div className={styles.contentRight}>
                <Skill skills={subprofile[draft].skills} />
                <div className={styles.mainContent}>
                    <Summary summaryText={subprofile[draft].abstract} />
                    <Experience experiences={subprofile[draft].experience} />
                    <Education educations={subprofile[draft].education} />
                    {profile.note ? <div className={styles.note}>{profile.note}</div> : <></>}
                </div>
            </div>
        </main>
    )
});
export default Resume;
