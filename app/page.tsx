import { EmptyState } from '@/components/EmptyState'
import Image from 'next/image'
import getListing, { IListingParams } from './actions/getListings'
import ListingCard from '@/components/listings/ListingCard'
import getCurrentUser from './actions/getCurrentUser'


interface HomeProps{
  searchParams : IListingParams
}
export default async function Home({
  searchParams
}:HomeProps) {

  const listings= await getListing(searchParams)
  const currentUser = await getCurrentUser()

  if(listings && listings.length===0)
  {
    return ( <EmptyState
    showReset/>
    )
  }
  return (
    <div className="
     p-5 mt-20 
     grid 
     sm:grid-cols-1 
     md:grid-cols-3
     lg:grid-cols-4
     xl:grid-cols-6
     gap-10" > 
    {listings && listings.map((listing:any)=>(
     <ListingCard
     currentUser={currentUser}
     key={listing.id}
     data={listing}
    />
    ))}

    
    </div>
  )
}
