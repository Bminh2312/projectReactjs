import { Box, Card, CardContent, CardMedia, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'


export default function MovieItems(props) {
    const { item, key, path } = props
    const imgSrc = path + '/' + item.backdrop_path

    const date = item.release_date;
    const year = date.split('-')[0];

    return (
        <>
            <Grid key={key} xl={3} lg={4} md={6} xs={12} sx={{ padding: "15px" }}>
                <Link to="/" underline='none' >
                    <Card sx={{ maxWidth: 345, background: '#485460', color: 'white', height: "50vh" }}>
                        <Box sx={{overflow:'hidden'}}>
                        <CardMedia
                            sx={{ height: 300, '&:hover': {transform:'scale(1.2)'},transition:'1s' }}
                            image={imgSrc}
                            title="green iguana"
                        />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ color: '#ffc048', marginBottom: '10px' }}>
                                <Box sx={{ width: "100%", display: 'flex' }}>
                                    <p style={{ width: '70%', fontSize: "90%", display: 'inline-block', marginRight: '20px' }}>{item.title}</p>
                                    <p style={{ width: '30%', textAlign: 'end', display: 'inline-block', justifyContent: 'center' }}>{year}</p>
                                </Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{color: '#ffc048'}}>
                                <Box sx={{ width: "100%", display: 'flex' }}>
                                    <p style={{ width: '30%', fontSize: "90%", display: 'inline-block', marginRight: '20px' }}><i class="fa-regular fa-thumbs-up"></i>{item.popularity}</p>

                                </Box>
                            
                            </Typography>
                        </CardContent>

                    </Card>
                </Link>

            </Grid>

        </>
    )
}
