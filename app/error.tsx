"use client"

interface ErrorStateProps{
    error:Error
}
import { EmptyState } from '@/components/EmptyState'
import React, { useEffect } from 'react'

export default function ErrorState({
    error
}:ErrorStateProps) {

   useEffect(()=>{
   console.log(error)
    },[error])

  return (
    <div>
    <EmptyState
    title='Uh Ohh'
    subtitle='Something Went Wrong'/>
    </div>
  )
}
