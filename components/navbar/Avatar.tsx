import React from 'react'
import Image from 'next/image'

interface AvatarProps{
  src? : string | undefined | null
}
export default function Avatar({src}:AvatarProps) {

  return (
    <div>
        <Image 
        className='rounded-full  cursor-pointer'
        src= {src || "/images/placeholder.jpg"}
        width={20}
        height={20}
        alt="user"/>
    </div>
  )
}
