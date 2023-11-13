
import { EmptyState } from "@/components/EmptyState";


import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavorites();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
    
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
 
    );
  }

  return (
  
      <FavoritesClient
        //@ts-ignore
        listings={listings}
        currentUser={currentUser}
      />

  );
}
 
export default ListingPage;
