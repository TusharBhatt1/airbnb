import getCurrentUser from "@/app/actions/getCurrentUser"
import prisma from "@/app/libs/prismadb"
import {NextResponse} from "next/server"

interface RouteProps{
    reservationId?:string
}
export async function DELETE(
   request:Request,
   {params}:{params:RouteProps}
    )
{

const currentUser=await getCurrentUser()

if(!currentUser) return NextResponse.error()

const {reservationId} =params

if(!reservationId)  throw new Error("Invalid ID")

const reservation = await prisma.reservation.deleteMany({
    where:{
        id:reservationId,
        OR:[
          {userId:currentUser.id}, //creator of the account
          {listing:{userId:currentUser.id}} //creator of the listing(property)
        ]
    }
})
return NextResponse.json(reservation)

}