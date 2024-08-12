
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import DetailMovie from '../../components/detailMovie/DetailMovie'
import { Container } from '@mui/material'
import Main from '../../components/main/Main'
import ReviewMovies from '../../components/reviewMovies/ReviewMovies'

export default function MovieDetailPage() {
    const { movie_id } = useParams()
    const [flag, setFlag] = useState(true)
    return (
        <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag}/>
            <Main children={[<DetailMovie movie_id={movie_id}/>,<ReviewMovies movie_id={movie_id}/>]}/>
            <Footer />
        </Container>
    )
}
