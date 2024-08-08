import { Button, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../config/gmailCofig'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/userSlice';

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0.5),
    color: 'white',
    backgroundColor: '#e4d804', // Button background color
    '&:hover': {
        backgroundColor: '#c0b800', // Color on hover (optional)
    },
    margin: "0 auto",

    '&:hover': {
        color: '#e4d804',
    },
}));
export default function SignInGG(props) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const { setOpen } = props
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch(getUser(data.user))
            setOpen(false)
        }).catch((error) => {
            // Clear the popup reference on error
            authPopup = null;
            console.error("Error during sign-in:", error);
        });
    }

    useEffect(() => {
        setValue(JSON.parse(localStorage.getItem("user")))
    })
    return (
        <div style={{ textAlign: 'center' }}>
            <StyledButton onClick={handleClick}><i class="fa-solid fa-envelope" style={{ margin: "5px" }}></i>Sign in</StyledButton>
        </div>
    )
}
