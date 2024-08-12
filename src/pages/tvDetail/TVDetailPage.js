import { Container } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import DetailTV from '../../components/detailTV/DeatailTV'
import ReviewMovies from '../../components/reviewMovies/ReviewMovies'
import ReviewTV from '../../components/reviewTV/ReviewTV'

export default function TVDetailPage() {
    const { tv_id } = useParams()
    const [flag, setFlag] = useState(true)
  return (
    <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
    <Header flag={flag} setFlag={setFlag} />
    <Main children={[<DetailTV tv_id={tv_id} />]}/>
    <Footer />
</Container>
  )
}
