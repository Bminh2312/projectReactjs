import { Container } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import MoviesGenres from '../../components/movies/MoviesGenres'
import Main from '../../components/main/Main'

export default function MovieGenresPage() {
  const [flag, setFlag] = useState(true)
  const {genresMovie,movie_id,genrestv,tv_id} = useParams()
  return (
    <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag} />
            <Main children={<MoviesGenres  movie_id={movie_id} genresMovie={genresMovie} genrestv={genrestv} tv_id={tv_id}/>}/>
            <Footer />
        </Container>
  )
}
