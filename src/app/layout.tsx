"use client"

import "./globals.css"

import { Inter } from "next/font/google"
import React, { useState } from "react"
import { Toaster } from "sonner"
import { twMerge } from "tailwind-merge"
import { DarkModeSwitch } from "./_components/DarkModeSwitch"

const inter = Inter({ subsets: ["latin"] })

type RootLayoutProps = React.PropsWithChildren<{}>

export default function RootLayout ({ children }: RootLayoutProps) {
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
        <footer className="bg-d-background dark:bg-background transition ease-linear">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="https://github.com/Shikachuu/shrtn.hu" className="text-d-text dark:text-text">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6 text-d-text dark:text-text"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  {/* eslint-disable-next-line max-len*/}
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-d-text dark:text-text">
                shrtn.hu is built by <a href="https://github.com/Shikachuu">Máté</a> with a lot of ☕using
                <a href="https://github.com/Shikachuu/shrtn.hu/blob/main/LICENSE">The Unlicense</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
