import React, { useState } from 'react'
import TVSearch from '../../components/TV/TVSearch'
import { Container } from '@mui/material'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'

export default function TVSearchPage() {
    const { name } = useParams()
    const [flag, setFlag] = useState(true)
    const [searchInput, setSearchInput] = useState(true)
    return (
        <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag} setSearchInput={searchInput}/>
            <Main children={<TVSearch name={name}/>}/>
            <Footer />
        </Container>
    )
}
