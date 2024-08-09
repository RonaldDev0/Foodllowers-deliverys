import { Providers } from './providers'
import { NavBarr, SoundAlert, AlertStartWork } from '@/components'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Foodllowers-Deliverys',
  description: 'Foodllowers-Deliverys',
  manifest: 'manifest.json'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='es' className='dark'>
      <body className='h-screen flex flex-col items-center absolute top-0 z-[-2] w-screen dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
        <Providers>
          <NavBarr />
          {/* <AlertStartWork /> */}
          {children}
          <SoundAlert />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
