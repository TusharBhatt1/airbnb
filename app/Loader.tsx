"use client"

import { PuffLoader } from "react-spinners"

import React from 'react'

export default function Loader() {
  return (
    <div className="
    h-[70vh]
    flex justify-center items-center
    ">
        <PuffLoader
        size={18}/>
    </div>
  )
}
