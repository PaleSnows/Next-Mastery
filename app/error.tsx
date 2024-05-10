"use client"
import React from 'react'

interface Props{
    error:Error
    reset:()=>void
}

const ErroPage = ({error,reset}:Props) => {
    console.log("Error",error);
    
  return (
    <>
    <div>An unexpected error has occured</div>
    <button onClick={()=>reset()}>Retry</button>
    </>
  )
}

export default ErroPage