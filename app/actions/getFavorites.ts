import prisma from "@/app/libs/prismadb"
import getCurrentUser from "./getCurrentUser"
import toast from "react-hot-toast"

export default async function GetFavorites() {
    
  
    try{
    
    const currentUser= await getCurrentUser()

    if(!currentUser) return toast.error("Login first")

    const favorites = await prisma.listing.findMany({
        where:{
            id:{
                in:[...(currentUser.favoriteIds || [])]
            }
        }
    })

    const safeFavorites= favorites.map((favorite)=>({
        ...favorite,
        createdAt:favorite.createdAt.toISOString()
    }))

    return safeFavorites

    }

    catch(error:any){
        
        throw new Error(error)
    }


}