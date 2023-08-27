"use client"

import "./globals.css"

import { Inter } from "next/font/google"
import { useState } from "react"
import { Toaster } from "sonner"
import { twMerge } from "tailwind-merge"
import { DarkModeSwitch } from "./_components/DarkModeSwitch"

const inter = Inter({ subsets: ["latin"] })

type RootLayoutProps = React.PropsWithChildren<{}>

export default function RootLayout({ children }: RootLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <html lang="en">
      <body className={twMerge(inter.className, isDarkMode ? "dark" : "light")}>
        <div className="absolute">
          <Toaster position="bottom-center" theme={isDarkMode ? "dark" : "light"} />
        </div>
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
