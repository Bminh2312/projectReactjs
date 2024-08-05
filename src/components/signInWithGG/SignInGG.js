import { Button, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../../config/gmailCofig'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0.5),
    color:  'white',
    backgroundColor:  'orange',
    width:'30%',
    height:'5vh',
    margin: "0 auto",
    borderRadius:"40%",
    '&:hover': {
        color: '#e4d804',
    },
}));
export default function SignInGG() {
    const[value,setValue]= useState('')
    
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",JSON.stringify(data.user))
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
  return (
    <div style={{textAlign:'center'}}>
        <StyledButton onClick={handleClick}>Sign in</StyledButton>
    </div>
  )
}
