import Link from 'next/link'
import { Twitter, Linkedin, Github, DiscIcon as Discord } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">Boundless</Link>
          <p className="text-sm mt-2">© 2023 Boundless. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://x.com/boundless_fi" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/company/boundlessfi/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/Benjtalkshow/boundless" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://discord.gg/juUmBmwC3s" target="_blank" rel="noopener noreferrer">
            <Discord className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

