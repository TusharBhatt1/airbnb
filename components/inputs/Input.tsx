"use client"
import React from 'react'
import {FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiRupee } from 'react-icons/bi'
interface InputProps{
    id:string,
    label:string,
    type?:string,
    disabled?:boolean,
    formatPrice?:boolean,
    required:boolean,
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors
}
export default function Input({
 id , label , type, disabled, 
 formatPrice, required , register,errors 
}:InputProps) {
  return (
    <div >
     {formatPrice && (
       <BiRupee
       size={24}
       className="text-neutral-700"/> 
     )}

     <label className={`
     text-slate-400
     ${errors[id] ? "text-red-500" : "text-slate-400"}`}>
        {label}
     </label>
     
     <input
     id={id}
     disabled={disabled}
     {...register(id,{required})}
     placeholder=' '
     className={`
     border-2
     rounded-md
     mt-4
     w-full p-2 
     ${formatPrice ? "pl-9" : "pl-4"}
     ${errors[id] ? "border-rose-500" : "border-neutral-300"}
     ${errors[id] ? "focus:border-rose-500" : "border-black"}
     `}
    />

     

    
    </div>
  )
}
