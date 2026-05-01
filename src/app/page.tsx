import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl">
        The Future of <span className="italic text-neutral-400">Fashion Education</span> is Digital.
      </h1>
      <p className="text-xl text-neutral-600 mb-12 max-w-2xl font-light">
        Join the world's most advanced platform for digital fashion design, 3D garment construction, and creative entrepreneurship.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/signup" 
          className="px-8 py-4 bg-black text-white rounded-md text-lg font-medium hover:bg-neutral-800 transition-all"
        >
          Get Started
        </Link>
        <Link 
          href="/login" 
          className="px-8 py-4 border border-neutral-200 rounded-md text-lg font-medium hover:bg-neutral-50 transition-all"
        >
          Sign In
        </Link>
      </div>

      <div className="mt-32 grid md:grid-cols-3 gap-12 text-left max-w-5xl w-full">
        <Feature 
          title="3D Design" 
          description="Master CLO3D and Marvelous Designer with our expert-led curriculum."
        />
        <Feature 
          title="Global Network" 
          description="Connect with designers and fashion houses from Paris to Tokyo."
        />
        <Feature 
          title="NFT Integration" 
          description="Learn to monetize your digital creations through blockchain technology."
        />
      </div>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-100 bg-neutral-50/50">
      <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">{title}</h3>
      <p className="text-neutral-500 font-light leading-relaxed">{description}</p>
    </div>
  );
}
