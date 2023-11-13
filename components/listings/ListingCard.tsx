"use client"
import { SafeListing, SafeReservation, SafeUser } from '@/types'
import { Listing, Reservation } from '@prisma/client'
import React, { useCallback, useMemo } from 'react'
import {useRouter} from "next/navigation"
import { useCountries } from '@/app/hooks/useCountries'
import {format} from "date-fns"
import Image from "next/image"
import HeartButton from '../HeartButton'
import Button from '../Button'

interface ListingCardProps{
currentUser?:SafeUser | null
key:number | string
data:SafeListing
reservation?:SafeReservation
actionLabel?:string
onAction?:(id:string)=>void
disabled?:boolean
actionId?:string

}
export default function ListingCard({
currentUser,
actionLabel,
key, 
data,
reservation,
disabled,
actionId="",
onAction
}:ListingCardProps) {

    const router = useRouter()
    const {getByValue} = useCountries()

    const location = getByValue(data.locationValue)

    const handleCancel = useCallback(
        (e:React.MouseEvent<HTMLButtonElement>)=>{
         e.stopPropagation()

     if(disabled) {
        return
     }
     onAction?.(actionId)
     },[onAction,actionId,disabled])

    const price= useMemo(()=>{
     
        if(reservation) return reservation.totalPrice

        return data.price
    },[reservation, data.price])
   
      
    const reservationDate= useMemo(()=>{
        if(!reservation) return null

        const startDate = new Date(reservation.startDate)
        const endDate = new Date(reservation.endDate)

        return `${format(startDate, "PP")}-${format(endDate,"PP")}`

    },[reservation])

  return (

    <div
    onClick={()=>router.push(`/listings/${data.id}`)}
    className='
    group
    flex justify-between
    flex-col 
    cursor-pointer w-40
    rounded-xl
    my-4
    md:my-0'
    >
    <div 
    className='flex  
    justify-center items-center  
   
    flex-col gap-8 w-full'>
    <div
    className='
    aspect-square
    w-full 
    overflow-hidden
    relative
    rounded-xl'>
    <Image
     fill
     src={data.imageSrc}
     alt={data.id}
     className='
     object-cover
     transition
     h-full w-full
     group-hover:scale-110'
     />

     <div className="absolute top-3 right-3">
        <HeartButton
        listingId={data.id}
        currentUser={currentUser}
        />
     </div>
     <div>
     </div>
    </div>
    </div>
    <div className='flex flex-col gap-1 font-bold'>
    <span>{location?.region},{location?.label}</span> 
    <span className='text-neutral-500 text-xs'>{reservationDate || data.category}</span>
    <span>$ {data.price} <span>
        {!reservation && "night"}</span>
    </span>

     </div>
     {onAction && actionLabel &&(
        <Button
        disabled={disabled}
        small
        label={actionLabel}
        onClick={handleCancel}/>
     )}
    </div>
   
  )
}
