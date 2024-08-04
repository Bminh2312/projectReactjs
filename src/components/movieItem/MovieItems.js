import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Link, styled, Typography } from '@mui/material'
import React from 'react'


const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0.5),
    color: 'white',
    backgroundColor: '#e4d804'

}));

export default function MovieItems(props) {
    const { item, key, path } = props
    const imgSrc = path + '/' + item.backdrop_path

    const date = item.release_date;
    const year = date.split('-')[0];

    return (
        <>
            <Grid item key={key} xl={3} lg={4} md={6} xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/" underline='none' >
                    <Card sx={{ maxWidth: 345, background: '#485460', color: 'white', height: "52vh" }}>
                        <Box sx={{ overflow: 'hidden' }}>
                            <CardMedia
                                sx={{ height: 300, '&:hover': { transform: 'scale(1.2)' }, transition: '1s' }}
                                image={imgSrc}
                                title="green iguana"
                            />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ color: '#ffc048', marginBottom: '10px' }}>
                                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-evenly' }}>
                                    <p style={{ width: '60%', fontSize: "90%" }}>{item.title}</p>
                                    <p style={{ width: '40%', textAlign: 'end' }}>{year}</p>
                                </Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ color: '#ffc048' }}>
                                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-evenly' }}>
                                    <p style={{ width: '50%', fontSize: "90%" }}><i class="fa-regular fa-eye" style={{ margin: '5px' }}></i>{item.popularity}</p>
                                    <p style={{ width: '50%', fontSize: "90%", textAlign: 'end' }}><i class="fa-regular fa-thumbs-up" style={{ margin: '5px' }}></i>{item.vote_count}</p>
                                </Box>

                            </Typography>
                        </CardContent>
                        <CardActions>
                        <StyledButton>Watch movie</StyledButton>
                        </CardActions>
                    </Card>
                </Link>

            </Grid>

        </>
    )
}
