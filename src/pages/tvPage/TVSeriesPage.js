import React, { useState } from 'react'
import Main from '../../components/main/Main'
import Header from '../../components/header/Header'
import { Container } from '@mui/material'
import Footer from '../../components/footer/Footer'
import TVAiringToday from '../../components/TV/TVAiringToday'
import TVOnTheAir from '../../components/TV/TVOnTheAir'
import TVPopular from '../../components/TV/TVPopular'

export default function TVSeriesPage() {
    const [flag, setFlag] = useState(false)
    
  return (
    <Container maxWidth='xxl' sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
      <Header flag={flag} setFlag={setFlag} />
      <Main children={[<TVAiringToday type='Airing Today'/>,<TVPopular type='Popular'/>,<TVOnTheAir type='On The Air'/>]} />
      <Footer />
    </Container>
  )
}
