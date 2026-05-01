import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Fashion Institute",
  description: "Advanced Platform for Fashion Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight">
              DIGITAL FASHION <span className="text-neutral-400">INSTITUTE</span>
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link href="/dashboard" className="hover:text-neutral-500 transition-colors">Dashboard</Link>
              <Link href="/login" className="hover:text-neutral-500 transition-colors">Login</Link>
              <Link href="/signup" className="px-4 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors">Sign Up</Link>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <footer className="border-t py-12 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-neutral-500">
            &copy; 2026 Digital Fashion Institute. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
