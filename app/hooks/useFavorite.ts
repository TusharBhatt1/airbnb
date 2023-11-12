import { SafeUser } from "@/types"
import axios from "axios"
import {useRouter} from "next/navigation"
import useLoginModal from "./useLoginHook"
import React, { useCallback, useMemo } from "react"
import toast from "react-hot-toast"
import { TbError404 } from "react-icons/tb"

interface IUserProps{
    listingId:string,
    currentUser?:SafeUser | null
}


const useFavorite=({
listingId,
currentUser
}:IUserProps)=>{

const router= useRouter()
const loginModal= useLoginModal()

const hasFavorited= useMemo(()=>{

const list= currentUser?.favoriteIds || []
return list.includes(listingId)
},[currentUser,listingId])


const toggleFavorite = useCallback(async(e:React.MouseEvent<HTMLDivElement>)=>{

e.stopPropagation()

 if(!currentUser) {
    return loginModal.onOpen()
 }

 try{
    let request

    if(hasFavorited){
    request=()=> axios.delete(`/api/favorites/${listingId}`)
    }

    else{
        request=()=>axios.post(`/api/favorites/${listingId}`)
    }

    await request()
    router.refresh()
    toast.success("Success")
}
catch(error){
   toast.error("Something Went Wrong")
    }


},[currentUser,
hasFavorited,
listingId,
loginModal,
router])

return {
hasFavorited,
toggleFavorite
}

}

export default useFavorite