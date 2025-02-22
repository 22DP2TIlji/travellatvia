"use client"
import Link from "next/link";
import styles from "./cultural.experiences.module.css";

export default function CulturalExperiences() {
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
        <h2>Cultural Experiences in Latvia</h2>
        <div className={styles.infoSection}>
          <p>
            Latvia offers a rich tapestry of cultural experiences, blending ancient traditions with modern artistic
            expressions. Here are some cultural activities to explore:
          </p>
          <ul>
            <li>Attend the Latvian Song and Dance Festival (held every five years)</li>
            <li>Visit the Latvian National Museum of Art in Riga</li>
            <li>Experience a traditional Latvian sauna ritual</li>
            <li>Explore the Art Nouveau architecture in Riga</li>
            <li>Participate in seasonal folk festivals like Jāņi (Midsummer)</li>
            <li>Watch a performance at the Latvian National Opera and Ballet</li>
          </ul>
          <p>
            These experiences will give you a deeper understanding of Latvia's cultural heritage and contemporary
            artistic scene.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Traveling Forum. All rights reserved.</p>
      </footer>
    </div>
  )
}

