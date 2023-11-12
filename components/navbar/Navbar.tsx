import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import UserMenu from './UserMenu'
import { SafeUser } from '@/types'
import Categories from './Categories'

interface NavbarProps{
  currentUser?: SafeUser | null
}
export default function Navbar({currentUser}:NavbarProps) {
 
  return (   
    <div className='flex flex-col  bg-white'>
    <div className=' fixed font-bold bg-white w-full z- '>
    <div className='flex shadow-md p-2 items-center justify-between'>
    <Link href="/">  
    <Image 
    alt="AIRBNB" 
    src="/images/logo.png" 
    height={50}
     width={100}/>
    </Link> 

    <Search/>
    <UserMenu currentUser={currentUser} />

    </div>
    <Categories/>
   
    </div>
    </div>
  )
}
