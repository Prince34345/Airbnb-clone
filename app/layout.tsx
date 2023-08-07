import './globals.css';
import type { Metadata } from 'next'

import {Nunito, Reggae_One} from "next/font/google";
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/Client_Only';
import RegisterModal from './components/Modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/Modal/LoginModal';
import { getCurrentUser } from './actions/getCurrentuser';




export const metadata: Metadata = {
  title: 'Air-Bnb',
  description: 'AirBnb clone app ',
  
}

const font = Nunito({
  subsets:['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser() ;

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
           <ToasterProvider/>
           <LoginModal/>
           <RegisterModal/>
           <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
