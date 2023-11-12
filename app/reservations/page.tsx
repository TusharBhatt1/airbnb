import { EmptyState } from "@/components/EmptyState"
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import ReservationsClient from "./ReservationsClient"


export default async function page() {

 const currentUser= await getCurrentUser()

 if(!currentUser) return (
 <EmptyState title="Please Login first"/>
 )

 const reservations= await getReservations({
    authorId:currentUser.id
 })

 if(reservations.length===0){ 
    return(
    <EmptyState
    title="No reservations yet"/>
 )}
  return (
    <div>
        <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}/>
    </div>
  )
}
