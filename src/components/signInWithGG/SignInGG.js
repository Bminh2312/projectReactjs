import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../../config/gmailCofig'
export default function SignInGG() {
    const[value,setValue]= useState('')
    
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
  return (
    <div>
        <Button onClick={handleClick}>Sign in</Button>
    </div>
  )
}
