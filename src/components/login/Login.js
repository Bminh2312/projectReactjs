import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../login/login.css'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithPopup } from 'firebase/auth'
import { getUser } from '../../redux/userSlice';
import { auth, provider } from '../../config/gmailCofig'
import { Box, Typography } from '@mui/material'
import { FacebookAuthProvider } from "firebase/auth";
import { authenticate } from '../../config/gmailCofig'


const Login = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    // const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()

    const onButtonClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch(getUser(data.user))
            if (data.user.email !== undefined) {
                navigate('/movie')
            }
        }).catch((error) => {
            // Clear the popup reference on error
            console.error("Error during sign-in:", error);

        });
    }

    const onButtonClickHome = () => {
        navigate('/movie')
    }




    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, justifyContent: 'start', alignItems: 'center', fontSize: '300%' }}>
                    <i className="fa-solid fa-sun"></i>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Sunrise
                </Typography>
                <div className='login'>Login</div>
                <div className={'inputContainer'}>
                    {/* <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} /> */}
                    <button class="button-85" role="button" onClick={onButtonClick}>Login with gmail</button>
                </div>
                <div className={'inputContainer'}>
                    <button class="button-85" role="button" onClick={onButtonClickHome}>Watch Movie</button>
                </div>

            </div>
        </div>
    )
}

export default Login