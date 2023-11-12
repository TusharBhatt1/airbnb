"use client"
"use client"
import React, { useState } from 'react'
import axios from 'axios'
import {AiFillGithub} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import{ FieldValues,SubmitHandler,useForm } from "react-hook-form"
import useRegisterModal from '@/app/hooks/useRegisterHook'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import toast from 'react-hot-toast'
import Button from '../Button'
import {signIn} from "next-auth/react"
import LoginModal from './LoginModal'
import useLoginModal from '@/app/hooks/useLoginHook'

export default function RegisterModal() {

    const registerModal= useRegisterModal()
    const loginModal= useLoginModal()
    const [isLoading , setIsLoading] = useState(false)

    const {
        register,
        handleSubmit, 
        formState:{
        errors
    }} = useForm<FieldValues>({
        defaultValues:{
          name:"", email:"", password:""  
        }
    })

    const onSubmit :SubmitHandler<FieldValues>=(data)=>{

        setIsLoading(true)

        axios.post("/api/register",data)
        .then(()=>{
          toast.success("Registered, kindly login now.")
          registerModal.onClose()
          loginModal.onOpen()
        })
        .catch((error)=>{
          toast.error("Something Went Wrong")
        })
        .finally(()=>setIsLoading(false))

        loginModal.onOpen()

    }

    const bodyContent = (
      <div className='flex flex-col gap-4'>
        <Heading 
        title="Welcome to AIRBNB"
        subtitle='Create an account'
        center
        />
         <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
       
        <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />


      </div>
    )

    const footerContent=(
      <div className='flex flex-wrap gap-7' >
   
      <div className='flex justify-around w-full'>
        <p className='cursor-pointer'>Already have an account ?</p>
        <p className='cursor-pointer underline'
        onClick={()=>{
          registerModal.onClose()
          loginModal.onOpen()
        }}>
          Login
        </p>
        
        </div>
      {/* <Button
      disabled={isLoading}
      label="Continue with Google"
      icon={FcGoogle}
      onClick={()=>{signIn("google")}}

      />
      <Button
      disabled={isLoading}
      label="Continue with GitHub"
      icon={AiFillGithub}
      onClick={()=>signIn("github")}
      /> */}
       
      </div>

      
    )


    return (
      <>
      <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
   
    />
  
    </>
    );
}
