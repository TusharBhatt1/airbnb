"use client"
import { useCountries } from '@/app/hooks/useCountries'
import Heading from '@/components/Heading'
import { SafeUser } from '@/types'
import React from 'react'
import Image from 'next/image'
import HeartButton from '@/components/HeartButton'

interface ListingHeadProps{
    title:string,
    locationValue:string,
    imageSrc: string,
    id:string,
    currentUser?: SafeUser | null
}

export default function ListingHead({
    title , locationValue, id, imageSrc, currentUser
}:ListingHeadProps) {

  const {getByValue} = useCountries()
  const location = getByValue(locationValue)
  return (
   <>
   <Heading
   title={title}
   subtitle={`${location?.region}, ${location?.label}`}
   />
   <div
   className="
   w-full
   h-[50vh]
   overflow-hidden
   rounded-xl
   relative">
     <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
        className='absolute top-3 right-3'>
          <HeartButton
          listingId={id}
          currentUser={currentUser}
          />
        </div>
   </div>
   
   </>
  )
}
