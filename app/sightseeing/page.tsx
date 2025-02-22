"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import styles from "./sightseeing.module.css"

export default function Sightseeing() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("dark-mode") === "true") {
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("dark-mode", (!darkMode).toString())
  }

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ""}`}>
      <header className={styles.header}>
        <h1>Travellatvia</h1>
        <nav>
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
          <Button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
        </nav>
      </header>

      <main className={styles.main}>
        <h2>Sightseeing in Latvia</h2>
        <div className={styles.infoSection}>
          <p>
            Latvia offers a wealth of sightseeing opportunities, from its charming medieval Old Town in Riga to its
            stunning natural landscapes. Here are some must-see attractions:
          </p>
          <ul>
            <li>Riga Old Town (UNESCO World Heritage site)</li>
            <li>Rundāle Palace</li>
            <li>Gauja National Park</li>
            <li>Turaida Castle</li>
            <li>Jūrmala Beach</li>
            <li>Latvian Ethnographic Open Air Museum</li>
          </ul>
          <p>
            Each of these locations offers a unique glimpse into Latvia's rich history and natural beauty. Whether
            you're interested in architecture, nature, or cultural experiences, Latvia has something for everyone.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Traveling Forum. All rights reserved.</p>
      </footer>
    </div>
  )
}

