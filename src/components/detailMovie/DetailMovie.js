import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchDetailMovie } from '../../redux/movieDetailSlice';
import { Box, CircularProgress, Container, Grid, Paper, styled, Typography } from '@mui/material';
import Loading from '../loading/Loading';
import Video from '../video/Video';





export default function DetailMovie() {
    const { movie_id } = useParams()
    const { item, status, path } = useSelector(state => state.detailMovies)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchDetailMovie(movie_id))
        }
    }, [])
    const urlImg = path + "/" + item.backdrop_path

    if (status === 'loading') {
        return <Loading />


    }

    return (
        <Container maxWidth="xxl" sx={{ mt: 5, height: 'auto' }}>
            {item &&
                <Grid container spacing={2} sx={{ color: "white" }}>
                    <Grid item xl={4} md={6} xs={12} >
                        <img src={urlImg} style={{ objectFit: "fill", width:'100%' }} />
                    </Grid>
                    <Grid item xl={8} md={6} xs={12} >
                        <Grid container spacing={2}>
                            <Grid item xl={12}>
                                <Typography variant='h3' sx={{ display: "inline-block"}}>
                                    {item.title}:
                                </Typography>
                                <Typography variant='h3' sx={{ display: "inline-block",  }} >
                                    {item.tagline}
                                </Typography>
                            </Grid>
                            <Grid item xl={12}>
                                <Typography variant='h5' sx={{ display: "inline-block" }}>Type: </Typography>
                                {item.genres && item.genres.map((type) => (
                                    <Typography variant='h6' sx={{ display: "inline-block",  marginLeft: '5px' }}>{type.name},</Typography>
                                ))}

                            </Grid>
                            <Grid item xl={12}>
                                <Typography variant='h6' >
                                    <i class="fa-regular fa-clock"></i> {item.runtime} mins
                                </Typography>
                            </Grid>
                            <Grid item xl={12}>
                                <Typography variant='h6' >
                                    Description: {item.overview}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
            <Box>
                <Typography variant='h2' sx={{ mt:5, color:'white' }} >
                    Trailer:
                </Typography>
            </Box>

            <Video movie_id={movie_id}></Video>
        </Container>
    )
}
