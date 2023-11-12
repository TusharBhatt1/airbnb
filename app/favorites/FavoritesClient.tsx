import Heading from "@/components/Heading"
import ListingCard from "@/components/listings/ListingCard"
import { SafeListing, SafeUser } from "@/types"

interface FavoriteClientProps{
   listings: SafeListing[],
   currentUser?: SafeUser | null 
}

export default function FavoriteClient({
  listings,
  currentUser
}:FavoriteClientProps) {
  return (
    <>
    <Heading
    title="Favorites"
    subtitle="List of places you have favorited!"
    />
    <div className="
    mt-10
    grid grid-col-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-8
    ">
      {
        listings.map((listing)=>(
          <ListingCard
          key={listing.id}
          currentUser={currentUser}
          data={listing}

          />
        ))
      }

    </div>
    </>
  )
}
