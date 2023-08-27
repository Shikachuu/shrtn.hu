import type { Metadata } from "next"
import { Hero } from "./components/Hero"

export const metadata: Metadata = {
  title: "shrtn",
  description: "Batteries included nothing special url shortener!",
}

export default function Home() {
  return (
    <Hero />
  )
}
