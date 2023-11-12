"use client"
import { title } from 'process'
import React from 'react'


interface HeadingProps{
    title:string,
    subtitle?:string,
    center?:boolean

}
const Heading:React.FC<HeadingProps>=(
    {title , subtitle , center}
)=> {
  return (
    <div className={center ? "text-center mt-4" : "text-start mt-4"}>
    <h1 className='font-bold'>{title}</h1>
    <h3 className='text-sm text-neutral-500'>{subtitle}</h3>
    </div>
  )
}

export default Heading