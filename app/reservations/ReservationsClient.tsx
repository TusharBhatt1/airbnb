"use client"
import { SafeReservation, SafeUser } from "@/types"
import {useRouter} from "next/navigation"
import Heading from "@/components/Heading"
import { useCallback, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import ListingCard from "@/components/listings/ListingCard"

interface ReservationsClientProps{
    reservations:SafeReservation[],
    currentUser:SafeUser | null
}

export default function ReservationsClient({
    reservations,
    currentUser
}:ReservationsClientProps) {

    const router = useRouter()
    const [deletingId , setDeletigId] = useState("")

    const onCancel =useCallback((id:string)=>{
        setDeletigId(id)

        axios.delete(`/api/reservations/${deletingId}`)
        .then(()=>{
            toast.success("Reservation Cancelled")
            router.refresh()
        })
        .catch(()=>{
             toast.error("Try again")
        })
        .finally(()=>{
            setDeletigId("")
        })
    },[router])

return (
<div className="px-7">
    <Heading
    title="Reservations"
    subtitle="Bookings on your properties"
    />
    <div
    className="
    mt-10
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-5">
   
   {
    reservations.map((reservation)=>(
        <ListingCard
        key={reservation.id}
        data={reservation.listing}
        reservation={reservation}
        actionId={reservation.id}
        onAction={onCancel}
        disabled={deletingId==reservation.id}
        actionLabel="Cancel Guest reservation"
        currentUser={currentUser}/>
    ))
   }
    </div>
</div>
  )
}
