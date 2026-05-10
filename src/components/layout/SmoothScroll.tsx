import { ReactLenis } from '@studio-freight/react-lenis'
import { ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.05, 
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    }}>
      {children}
    </ReactLenis>
  )
}
