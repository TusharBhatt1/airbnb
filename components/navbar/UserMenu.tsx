"use client"
import React, { useCallback, useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import Avatar from './Avatar'
import MenuItem from './MenuItem'
import useRegisterModal from '@/app/hooks/useRegisterHook'
import useLoginModal from '@/app/hooks/useLoginHook'
import {User} from "@prisma/client"
import {signOut} from "next-auth/react"
import { SafeUser } from '@/types'
import useRentModal from '@/app/hooks/useRentHook'
import { useRouter } from 'next/navigation'


interface UserMenuProps{
  currentUser?: SafeUser | null
}
export default function UserMenu({currentUser}:UserMenuProps) {
     
  const registerModal=useRegisterModal()
  const loginModal= useLoginModal()
  const rentModal = useRentModal()
  const router= useRouter()

  const onAirbnbHome= useCallback(()=>{
   
    if(!currentUser) 
    {
      return loginModal.onOpen()
    }

    rentModal.onOpen()

   

  },[currentUser,loginModal,rentModal])


  const [ isOpen, setIsOpen]= useState(false)
  return (
    <div className='flex p-1 z-10 rounded-full items-center justify-center text-sm  gap-5'>
    <button  onClick={onAirbnbHome} className='p-1 rounded-full border-2 border-blue-800'>Airbnb Your Home</button>
    <div className='flex '>
    <div 
    onClick={()=>setIsOpen(!isOpen)}
    className='flex p-2 shadow-md cursor-pointer  rounded-full justify-center items-center gap-10 md:gap-5'>
        <AiOutlineMenu />
        <Avatar src={currentUser?.image}/>
    </div>
   {isOpen && (
    <div className={`absolute text-sm bg-white w-[120px] mt-9 border-b-2 right-4 border-slate-100 ${currentUser ? "h-70" : "h-20"} w-[130px] text-center text-xs`} >
    <div className="flex cursor-pointer gap-5  w-full flex-col justify-center items-center  p-2 h-full">
     { currentUser ? (
       <>
       <MenuItem label="My Trips" 
       onClick={()=>router.push("/trips")} />
       <MenuItem  
       label="My Favorites"
       onClick={()=>{
        router.push("/favorites")
       }}/>
       <MenuItem  
       label="My Reservations"
       onClick={()=>router.push("/reservations")}/>
       <MenuItem  
       label="My Properties"
       onClick={()=>{
        router.push("/properties")
       }}/>
       <MenuItem  
       label="AirBnb Home"
       onClick={onAirbnbHome}/>
       <MenuItem  
       label="Logout"
        onClick={()=>signOut()}/>
        </>
     ) : (
        <>
        <MenuItem label="Login" 
        onClick={loginModal.onOpen} />
        <MenuItem  
        label="Sign UP"
         onClick={registerModal.onOpen}/>
         </>
     )}
     </div>
</div>
   )} 

    </div>
    <div>
       
    </div>
    </div>
  )
}
