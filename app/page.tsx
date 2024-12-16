"use client"

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AboutUs from '@/components/AboutUs'
// import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AboutUs />
        {/* <Team /> */}
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

