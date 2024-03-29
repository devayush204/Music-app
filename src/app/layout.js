import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-gradient-to-l from-violet-900 to-slate-900 p-4  " >
        <div className=' '>
        <Sidebar />
        {children}
        </div>
        </body>
    </html>
  )
}
