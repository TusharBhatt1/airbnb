"use client"
import { SafeUser } from "@/types"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import useFavorite from "@/app/hooks/useFavorite"

interface HeartButtonProps{
    listingId  : string
    currentUser?: SafeUser | null

}

export default function HeartButton({
    listingId , 
    currentUser,

}:HeartButtonProps) {
   
 const {hasFavorited, toggleFavorite} = useFavorite({
    listingId,currentUser
 }    
 )

  return (
    <div
    onClick={toggleFavorite}
    className="cursor-pointer"
    >
    
    <AiOutlineHeart
    size={28}
    className="
    fill-red-200
    absolute
    -top-[2px]
    -right-[2px]"
    />
    <AiFillHeart
    size={24}
    className={`${hasFavorited ? "fill-red-500"
    :"fill-neutral-500"}`}/>


    </div>
  )
}
