import { Nunito } from 'next/font/google'

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'


import Navbar from './components/Navbar/Navbar';
import LoginModal from './components/Modal/LoginModal';
import RegisterModal from './components/Modal/RegisterModal';
import RentModal from './components/Modal/RentModal';
import ClientOnly from '@/app/components/Client_Only';
import getCurrentUser from './actions/getCurrentuser';
import SearchModal from './components/Modal/SearchModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}