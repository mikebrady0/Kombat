import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kombat - Martial Arts Gym & Coach Finder",
  description: "Find and book martial arts gyms and coaches near you",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="bg-black text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Kombat
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gyms" className="hover:text-gray-300">
                  Gyms
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="hover:text-gray-300">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="hover:text-gray-300">
                  Bookings
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4 flex-grow">{children}</main>
        <footer className="bg-black text-white p-4 mt-8">
          <div className="container mx-auto text-center">&copy; 2023 Kombat. All rights reserved.</div>
        </footer>
      </body>
    </html>
  )
}

