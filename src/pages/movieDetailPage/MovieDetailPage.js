
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SignInGG from '../../components/signInWithGG/SignInGG'
import { useParams } from 'react-router-dom'
import DetailMovie from '../../components/detailMovie/DetailMovie'
import { Container } from '@mui/material'

export default function MovieDetailPage() {
    const { id } = useParams()
    console.log(id)
    const [flag, setFlag] = useState(true)
    return (
        <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
            <Header flag={flag} setFlag={setFlag} />
            <DetailMovie />
            {/* <SignInGG/> */}
            <Footer />
        </Container>
    )
}
