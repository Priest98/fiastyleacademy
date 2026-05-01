import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-12 border-b pb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-neutral-500 font-light mt-2">Welcome back, {user.email}</p>
        </div>
        <form action="/auth/signout" method="post">
          <button 
            type="submit"
            className="px-6 py-2 border border-neutral-200 rounded-md text-sm font-medium hover:bg-neutral-50 transition-all"
          >
            Sign Out
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <DashboardCard 
          title="Active Courses" 
          value="4" 
          subtitle="2 nearing completion"
        />
        <DashboardCard 
          title="Projects" 
          value="12" 
          subtitle="8 public, 4 private"
        />
        <DashboardCard 
          title="Points" 
          value="1,240" 
          subtitle="Top 5% of students"
        />
      </div>

      <div className="mt-12 bg-neutral-50 rounded-2xl p-12 text-center border border-dashed border-neutral-200">
        <h3 className="text-lg font-bold mb-2">No upcoming classes today</h3>
        <p className="text-neutral-500 font-light text-sm max-w-sm mx-auto">
          You're all caught up on your live sessions. Use this time to work on your 3D design portfolio.
        </p>
      </div>
    </div>
  )
}

function DashboardCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="p-8 rounded-xl bg-white border border-neutral-100 shadow-sm">
      <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-4">{title}</h4>
      <div className="text-4xl font-bold mb-2 tracking-tighter">{value}</div>
      <p className="text-xs text-neutral-500 font-light">{subtitle}</p>
    </div>
  )
}
