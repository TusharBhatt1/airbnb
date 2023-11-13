"use client"
import React from 'react'
import Modal from './Modal'
import useIntroModal from '@/app/hooks/useIntroHook'
import Image from 'next/image'

export default function IntroModal() {

    const introModal = useIntroModal()

    const body=(
        <div className='text-center flex flex-col justify-center items-center'>
            <Image
            height={150}
            width={150}
            src={"/images/Me.png"}
            alt='Tushar Bhatt'/>
        Full Stack Renting Application created by 
        <span className='font-extrabold text-xl'> Tushar Bhatt</span>

        <Image
            height={350}
            width={350}
            src={"/images/tech-stacks.png"}
            alt='Tushar Bhatt'/>

        </div>
    )


  return (
    <Modal
    title="CREATOR"
    isOpen={introModal.isOpen}
    onClose={()=>introModal.onClose()}
    actionLabel='Proceed'
    body={body}
    onSubmit={()=>introModal.onClose()}
    />
  )
}
