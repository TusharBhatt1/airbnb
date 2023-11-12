import React from 'react'
import getFavorites from '../actions/getFavorites'
import getCurrentUser from '../actions/getCurrentUser'
import { EmptyState } from '@/components/EmptyState'
import FavoritesClient from './FavoritesClient'
export default async function Favorites() {

    const listings = await getFavorites()
    const currentUser=await getCurrentUser()

    if(listings.length===0){ 
        return(
       <EmptyState
       title='Seems like no added favorites'
       subtitle='No favorites'
       />
    )
    }

    return (
        <div className='px-4'>
        <FavoritesClient
        listings={listings}
        currentUser={currentUser}
        />
        </div>
    )

  
}
