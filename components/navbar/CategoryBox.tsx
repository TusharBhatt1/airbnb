"use client"

import {useRouter, useSearchParams} from "next/navigation"
import { useCallback } from 'react'
import { IconType } from 'react-icons'
import qs from "query-string"

interface CategoryBoxProps{
    label:string,
    icon:IconType,
    selected:boolean
}
export default function CategoryBox({
    label,
    icon :Icon,
    selected }:CategoryBoxProps) {


const router= useRouter()
const params= useSearchParams()

const handleClick=useCallback(()=>{

let currentQuery= {}

if(params) {
  currentQuery = qs.parse(params.toString())
}
const updatedQuery:any={
  ...currentQuery,
  category:label
}
if(params?.get("category")===label) {
  delete(updatedQuery.category)
}
const url= qs.stringifyUrl({
  url:"/",
  query:updatedQuery
}, { skipNull:true })

router.push(url)

},[label,params,router])


  return (
    <div 
    onClick={handleClick} 
    className={`
    flex 
    text-neutral-700
    items-center
    justify-center
    hover:cursor-pointer
    p-1
    border-b-2
   ${!selected && "hover:border-slate-400"}  
 
    ${selected ? "border-black text-black":"border-transparent"}`}>
      
       <p>  
        {label} 
       </p>
       <Icon size={22}/>

    </div>
  )
}
