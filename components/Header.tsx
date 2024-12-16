import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Boundless</Link>
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="#about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
