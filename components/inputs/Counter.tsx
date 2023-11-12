"use client"
import { useCallback } from "react"
interface CounterProps{
    title:string,
    subtitle:string,
    value:number,
    onChange:(value:number)=>void
}
export default function Counter({
    title,
    subtitle,
    value,
    onChange
}:CounterProps) {

    const onAdd= useCallback(()=>{
        onChange(value+1)
    },[onChange, value])

    const onReduce= useCallback(()=>{
        if(value===1) return 
        onChange(value-1)
       
    },[onChange, value])


  return (
    <div className="flex  items-center justify-between">
       <div className="flex flex-row justify-between w-full items-center">
         <div className="font-medium">
            {title}
            <div className="text-neutral-500">
         {subtitle}
        </div>
        </div>
        
        <div>
            <div className="flex flex-row items-center gap-4">
                <div  
                className="
                flex justify-center items-center
                border-2 hover:cursor-pointer p-1 w-8 h-8 rounded-full"
                onClick={onReduce}>
                   -
                </div>
                {value}
                <div 
                 className="
                 flex justify-center items-center
                 border-2  hover:cursor-pointer p-1 w-8 h-8 rounded-full"
                onClick={onAdd}>
                   +
                </div>

            </div>
        </div>
       </div>
    </div>
  )
}
