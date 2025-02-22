"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Home() {
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
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}
      >
        <header className="flex justify-between items-center p-4 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 shadow-md">
          <h1 className="text-3xl font-bold text-teal-700 dark:text-teal-300">Travellatvia</h1>
          <nav className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/signup">Signup</Link>
            </Button>
            <Button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
          </nav>
        </header>

        <main className="container mx-auto mt-8">
          <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 shadow-lg">
            <div className="relative w-full h-[50vh] overflow-hidden">
              <Image
                src="https://images.delfi.lv/media-api-image-cropper/v1/5c984b00-7588-11ed-8614-f9abfe79d39f.jpg?w=1600&h=900&r=16:9"
                alt="Latvia landscape"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-bold text-center mb-6 text-teal-700 dark:text-teal-300">Explore Latvia</h2>

              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button
                  asChild
                  className="text-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  variant="outline"
                >
                  <Link href="/sightseeing">Sightseeing</Link>
                </Button>
                <Button
                  asChild
                  className="text-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  variant="outline"
                >
                  <Link href="/restaurants">Food Tours</Link>
                </Button>
                <Button
                  asChild
                  className="text-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  variant="outline"
                >
                  <Link href="/cultural-experiences">Cultural Experiences</Link>
                </Button>
                <Button
                  asChild
                  className="text-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  variant="outline"
                >
                  <Link href="/beach-relaxation">Beach Relaxation</Link>
                </Button>
                <Button
                  asChild
                  className="text-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  variant="outline"
                >
                  <Link href="/camping">Camping</Link>
                </Button>
              </section>
            </div>
          </div>
        </main>

        <aside className="mt-8 p-4 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-lg shadow-md">
          <div id="homeInfo" className="aside-content active">
            <p className="dark:text-gray-300">
              Welcome to the Traveling Forum! Here you can find all the information you need for your next trip.
            </p>
          </div>
        </aside>

        <footer className="mt-8 p-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Traveling Forum. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

