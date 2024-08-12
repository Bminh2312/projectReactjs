import { Container } from '@mui/material'
import React, { useState } from 'react'
import Main from '../../components/main/Main'
import MovieSearch from '../../components/movies/MovieSearch'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

export default function MovieSearchPage() {
    const { name } = useParams()
    const [flag, setFlag] = useState(true)
    const [searchInput, setSearchInput] = useState(true)
    return (
        <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag} searchInput={searchInput}/>
            <Main children={<MovieSearch name={name}/>}/>
            <Footer />
        </Container>
    )
}
