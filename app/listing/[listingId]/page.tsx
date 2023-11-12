import React from 'react'
import getListingById from '@/app/actions/getListingById'
import { EmptyState } from '@/components/EmptyState'
import getCurrentUser from '@/app/actions/getCurrentUser'
import ListingIndividual from './ListingIndividual'
import getReservations from '@/app/actions/getReservations'

interface IParams{
    listingId?:string
}

export default async function ListingPage({params}:{params:IParams}) {

  const listing = await getListingById(params)
  const currentUser= await  getCurrentUser()
  const reservations= await getReservations(params)

  if(!listing) return <EmptyState/>

  return (
    <div className='p-4'>
      <ListingIndividual
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
      />
    </div>
  )
}
