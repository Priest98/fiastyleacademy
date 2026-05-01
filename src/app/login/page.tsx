'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="max-w-md mx-auto py-24 px-4">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
        <p className="text-neutral-500 text-sm mb-8 font-light">Enter your credentials to access your student account.</p>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-md text-sm mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/5"
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-black text-white rounded-md font-medium hover:bg-neutral-800 transition-all disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-neutral-500 font-light">
          Don't have an account? <Link href="/signup" className="text-black font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
