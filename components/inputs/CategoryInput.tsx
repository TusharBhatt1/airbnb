"use client"
import React from 'react'
import { IconType } from 'react-icons'

interface CategoryInputProps{
    onClick:(value:string)=>void,
    selected?:boolean
    label:string,
    icon:IconType,

}

export default function CategoryInput({
onClick, selected, label , icon:Icon
}:CategoryInputProps)
 {
  return (
    <div
    className={`
    text-sm
    flex justify-start items-center
    p-4
    w-[100px]
    flex-col
    rounded-sm
    border-2
    hover:border-black
    transition
    ${selected && "border-black"}`}
   
    onClick={()=>onClick(label)}>
       <Icon className='flex-1 flex justify-end flex-end' size={18}/>
       <p className='flex-1 text-start'>{label}</p> 
    </div>
  )
}
