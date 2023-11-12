import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import { EmptyState } from '@/components/EmptyState'
import PropertiesClient from './PropertiesClient'
import getListings from '../actions/getListings'

export default async function page() {

const currentUser = await getCurrentUser()

if(!currentUser) return (
<EmptyState
title='Unauthorized'
subtitle='Please Login'/>)

const listings= await getListings({
  userId:currentUser.id
})

if(listings.length===0) return (
    <div>
    <EmptyState
    title='No Properties Found'/>
    </div>
)
return (
  <PropertiesClient
  listings={listings}
  currentUser={currentUser}
/>
  )
}
