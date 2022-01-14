import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.scss'
import Experience from '/components/experience'
import Header from '/components/header'
import profiles from '/info/profile.json'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

export default function Home() {
  const router = useRouter();
  const componentRef = useRef();
  const {profile, draft} = router.query;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log(profiles, profiles[profile]);
  if (!profiles[profile]) {
    return <></>
  }
  const {fullName, title, linkedin, location, phone, subprofile} = profiles[profile];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} ref={componentRef}>
        <Header fullName={fullName} title={title} linkedin={linkedin} location={location} phone={phone} />
        <Experience experiences={subprofile[draft].experience} />
      </main>

      <footer className={styles.footer}>
          <button onClick={handlePrint}>Print this out!</button>
      </footer>
    </div>
  )
}