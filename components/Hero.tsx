import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 text-center">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          Decentralized Crowdfunding for Stellar Innovators
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Boundless helps early-stage founders in the Stellar community validate their ideas and secure seed funding.
        </p>
        <Button size="lg" asChild>
          <a href="#waitlist">Join the Waitlist</a>
        </Button>
      </div>
    </section>
  )
}

