"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import styles from "./restaurants.module.css"

export default function Restaurants() {
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
        <h2>Restaurants in Latvia</h2>
        <div className={styles.infoSection}>
          <p>
            Latvian cuisine is a delightful mix of traditional Baltic flavors and modern European influences. Here are
            some top restaurants to try in Latvia:
          </p>
          <ul>
            <li>3 Pavāru Restorāns (Riga) - Modern Latvian cuisine</li>
            <li>Vincents (Riga) - Fine dining experience</li>
            <li>Kolonāde (Riga) - Seasonal local ingredients</li>
            <li>Jāņoga (Jūrmala) - Seafood specialties</li>
            <li>Oskars (Cēsis) - Traditional Latvian dishes</li>
          </ul>
          <p>
            Don't miss trying local specialties like grey peas with bacon, smoked fish, and Latvian black bread. Many
            restaurants also offer excellent craft beers and local spirits to complement your meal.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Traveling Forum. All rights reserved.</p>
      </footer>
    </div>
  )
}

