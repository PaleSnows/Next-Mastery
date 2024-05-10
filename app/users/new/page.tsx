"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const NewUser = () => {
  const router = useRouter()
  return (
    <button onClick={()=>{router.push('/')}} className=''>Create</button>
  )
}

export default NewUser