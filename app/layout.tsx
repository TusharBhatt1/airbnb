import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Modal from '@/components/Modals/Modal'
import RegisterModal from '@/components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from '@/components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from '@/components/Modals/RentModal'
import Search from '@/components/navbar/Search'
import SearchModal from '@/components/Modals/SearchModal'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIRBNB',
  description: "AIRBNB CLONE",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser= await getCurrentUser() //GET USER DETAILS
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <SearchModal/>
        <RentModal/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser={currentUser}/>
        <div className='py-20'>
        {children}
        </div>
    

        </body>

    </html>
  )
}
