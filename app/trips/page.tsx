import { getRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex'
import React from 'react'
import getReservations from '../actions/getReservations'
import getCurrentUser from '../actions/getCurrentUser'
import { EmptyState } from '@/components/EmptyState'
import TripsClient from './TripsClient'

export default async function page() {

const currentUser = await getCurrentUser()

if(!currentUser) return (
<EmptyState
title='Unauthorized'
subtitle='Please Login'/>)

const reservations= await getReservations({userId:currentUser.id})
  
if(reservations.length===0) return (
    <div>
    <EmptyState
    title='No trips'
    subtitle='Looks like you have not reserved any trip'/>
    </div>
)
return (
    <TripsClient
    reservations={reservations}
    currentUser={currentUser}/>
  )
}
