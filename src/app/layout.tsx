import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { useRouter } from 'next/router'
import React from 'react'
import TetrisLoader from './components/loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'backbones.id',
  description: 'Grow your business with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
     <body className={inter.className}>{children}</body>
    </html>
  )
}
