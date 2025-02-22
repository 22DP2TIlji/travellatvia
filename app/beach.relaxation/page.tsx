"use client"
import Link from "next/link"
import styles from "./beach-relaxation.module.css"

export default function BeachRelaxation() {
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
        <h2>Beach Relaxation in Latvia</h2>
        <div className={styles.infoSection}>
          <p>
            Latvia boasts nearly 500 kilometers of sandy coastline along the Baltic Sea, offering plenty of
            opportunities for beach relaxation. Here are some of the best beaches to visit:
          </p>
          <ul>
            <li>Jūrmala Beach - The most famous beach resort in Latvia</li>
            <li>Liepāja Beach - Known for its white sand and blue flag status</li>
            <li>Ventspils Beach - Family-friendly with various activities</li>
            <li>Pāvilosta Beach - Perfect for water sports enthusiasts</li>
            <li>Cape Kolka - Where you can watch the sunset over two seas</li>
          </ul>
          <p>
            Remember to check local regulations and water conditions before swimming. Many beaches offer amenities like
            cafes, changing rooms, and water sport rentals during the summer season.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Traveling Forum. All rights reserved.</p>
      </footer>
    </div>
  )
}

