import './globals.css';
import type { Metadata } from 'next'

import {Nunito, Reggae_One} from "next/font/google";
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/Client_Only';
import RegisterModal from './components/Modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';




export const metadata: Metadata = {
  title: 'Air-Bnb',
  description: 'AirBnb clone app ',
  
}

const font = Nunito({
  subsets:['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
           <ToasterProvider/>
           <RegisterModal/>
           <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
