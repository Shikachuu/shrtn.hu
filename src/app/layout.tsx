"use client"

import { twMerge } from "tailwind-merge"
import "./globals.css"
import { Inter } from "next/font/google"
import { useState } from "react"
import { DarkModeSwitch } from "./components/DarkModeSwitch"

const inter = Inter({ subsets: ["latin"] })

type RootLayoutProps = React.PropsWithChildren<{}>

export default function RootLayout({ children }: RootLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <html lang="en">
      <body className={twMerge(inter.className, isDarkMode ? "dark" : "light")}>
        <div className="bg-background dark:bg-d-background transition ease-linear">
          <span className="z-50">
            <DarkModeSwitch onSwitch={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
          </span>
          {children}
        </div>
      </body>
    </html>
  )
}
