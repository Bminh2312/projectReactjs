import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import Loading from '../loading/Loading';
import Video from '../video/Video';
import { fetchDetailTV } from '../../redux/tvDetailSlice';





export default function DetailTV(props) {
    const { tv_id } = props
    const { item, status, path } = useSelector(state => state.detailTV)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchDetailTV(tv_id))
        }
    }, [])
    const urlImg = path + "/" + item.backdrop_path

    if (status === 'loading') {
        return <Loading />


    }

    return (
        <Container maxWidth="xxl" sx={{ mt: 5, height: 'auto' }}>
            {item &&
                <Grid container spacing={2} sx={{ color: "#e4d804" }}>
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
                                <Typography variant='h6' width={'70%'} >
                                    Description: {item.overview}
                                </Typography>
                            </Grid>
                            <Grid item xl={12}>
                                <Typography variant='h6' width={'70%'} >
                                    Vote: {item.vote_average}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
            <Box sx={{ border: '2px solid black', width: '100%', mt: 5, mb: 5, boxShadow: '0px 3px 0px 0px rgba(143, 143, 143, 0.14)' }}></Box>
            <Box>
                <Typography variant='h3' sx={{ m:10, color:'#e4d804' }} >
                    Trailer:
                </Typography>
            </Box>
            <Video movie_id={tv_id}></Video>
            <Box>
                <Typography variant='h3' sx={{ m:10, color:'#e4d804' }} >
                    Reviewer:
                </Typography>
            </Box>


        </Container>
    )
}
