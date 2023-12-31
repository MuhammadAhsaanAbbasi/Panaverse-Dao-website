import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import './globals.css'
import Navhead from "@/components/Header/header"
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Panaverse Dao',
  description: 'Panaverse Dao Officail website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="./assests/favicon.ico" />
    </head>
      <body className={inter.className}>
      <Navhead/>
        {children}
        <Analytics />
        <Footer/>
        </body>
    </html>
  )
}
