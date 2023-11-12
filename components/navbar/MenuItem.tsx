import React, { useState } from 'react'
import Modal from '../Modals/Modal'
interface MenuItemsProps{
    label:string,
    onClick:()=>void
}


export default function MenuItem({label,onClick}:MenuItemsProps) {

    const [show , setShow] = useState(true)

  return (
    <div className='hover:bg-slate-100 h-full w-full text-center flex items-center justify-center ' onClick={onClick}>
    {label}
    </div>
   
   )
}
