"use client"
import Link from "next/link"
import styles from "./camping.module.css"

export default function Camping() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Travellatvia</h1>
        <nav>
          <Link href="/">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link href="#" id="aboutLink">
            <i className="fas fa-info-circle"></i> About
          </Link>
          <Link href="#" id="contactLink">
            <i className="fas fa-envelope"></i> Contact
          </Link>
          <button id="dark-mode-toggle">Dark Mode</button>
        </nav>
      </header>

      <main className={styles.main}>
        <h2>Camping in Latvia</h2>
        <div className={styles.infoSection}>
          <p>
            Latvia's diverse landscapes and numerous national parks make it an excellent destination for camping
            enthusiasts. Here are some popular camping areas:
          </p>
          <ul>
            <li>Gauja National Park - Latvia's largest and oldest national park</li>
            <li>Slītere National Park - Coastal forests and dunes</li>
            <li>Ķemeri National Park - Wetlands and sulphur springs</li>
            <li>Abava Valley - Scenic river valley with hiking trails</li>
            <li>Lake Engure Nature Park - Great for birdwatching</li>
          </ul>
          <p>
            Remember to follow Leave No Trace principles and check local regulations before camping. Many areas offer
            both established campsites with facilities and opportunities for wild camping.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Traveling Forum. All rights reserved.</p>
      </footer>
    </div>
  )
}

