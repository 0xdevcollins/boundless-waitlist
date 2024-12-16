'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import debounce from 'lodash/debounce'
import { useToast } from '@/hooks/use-toast'
export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const debouncedSubmit = useCallback(
    debounce(async (email: string) => {
      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong')
        }

        toast({
          title: "Success!",
          description: "You've been added to our waitlist.",
          className: "bg-blue-500 text-white",
        })

        setEmail('')
        setError('')
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          })
        } else {
          toast({
            title: "Error",
            description: "An unknown error occurred",
            variant: "destructive",
          })
        }
      } finally {
        setIsLoading(false)
      }
    }, 500),
    [toast]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setError('')

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    await debouncedSubmit(email)
  }

  return (
    <section id="waitlist" className="py-20 px-4 md:px-6 lg:px-8 bg-green-50">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
        <p className="mb-8 text-gray-600">Be the first to know when Boundless launches and get early access to our platform.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full ${error ? 'border-red-500' : ''}`}
              disabled={isLoading}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1 text-left">{error}</p>
            )}
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>
      </div>
    </section>
  )
}

