import { Container } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'

export default function HomePage() {
    const [flag, setFlag] = useState(false)
  return (
    <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag} />
            <Main children={[]}/>
            <Footer />
        </Container>
  )
}
