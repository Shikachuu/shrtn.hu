"use client"

import { useState } from "react"
import { GenerateCommandBox } from "./GenerateCommandBox"

export function Hero() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary dark:text-d-primary tracking-wide uppercase">shrtn.hu</h2>
          <p className="mt-1 text-4xl font-extrabold text-text dark:text-d-text sm:text-5xl sm:tracking-tight lg:text-6xl">
            Shrtn your links!
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-accent dark:text-d-accent">
            This is no special features, the only purpose of this is the sudden urge to write React code ¯\_(ツ)_/¯
          </p>
          <button
            className="bg-primary dark:bg-d-primary text-text dark:text-d-text p-4 mt-10 rounded-lg"
            onClick={() => setModalOpen(true)}
          >
            Press me
          </button>
          {isModalOpen && <GenerateCommandBox closeModal={() => setModalOpen(false)} />}
        </div>
      </div>
    </main>
  )
}