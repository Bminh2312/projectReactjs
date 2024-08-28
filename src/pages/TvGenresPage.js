import { Container } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import TVGenres from '../components/TV/TVGenres'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
export default function TvGenresPage() {
  const [flag, setFlag] = useState(true)
  const {genrestv,tv_id} = useParams()
  return (
    <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag} />
            <Main children={<TVGenres  genrestv={genrestv} tv_id={tv_id}/>}/>
            <Footer />
        </Container>
  )
}
