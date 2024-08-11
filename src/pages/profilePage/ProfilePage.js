import { Container } from '@mui/material'
import React, { useState } from 'react'
import Profile from '../../components/profile/Profile'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Main from '../../components/main/Main'

export default function ProfilePage() {
    const [flag, setFlag] = useState(false)
  return (
    <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
        <Header flag={flag} setFlag={setFlag}/>
        <Main children={<Profile/>}/>
        <Footer/>
    </Container>
  )
}
