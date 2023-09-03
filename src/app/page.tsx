import type { Metadata } from "next"
import { Hero } from "./_components/Hero"

export const runtime = "edge"

export const metadata: Metadata = {
  title: "shrtn.hu",
  description: "Batteries included nothing special url shortener!",
}

export default function Home () {
  return (
    <Hero />
  )
}
