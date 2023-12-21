import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EFF6FC]`}>
        <div className='flex w-full h-[100vh] justify-between items-center gap-6 p-6'>
         <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
