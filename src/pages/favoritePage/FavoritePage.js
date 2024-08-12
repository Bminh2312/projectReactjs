import { Container } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import FavoriteMovie from '../../components/favoriteMovie/FavoriteMovie'


export default function FavoritePage() {
    const [flag, setFlag] = useState(false)
    const [searchInput, setSearchInput] = useState(true)
  return (
    <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag} searchInput={searchInput} />
            <Main children={[<FavoriteMovie/>]}/>
            <Footer />
        </Container>
  )
}
