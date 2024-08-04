import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import MovieUpComing from '../movies/MovieUpComing'

export default function Main() {
  return (
    <Container maxWidth="xl">
      <Box sx={{mt:5, mb: 5 , textAlign:'start'}}>
      <Typography
        variant="h6"
        noWrap
        sx={{textTransform:'uppercase', color:"#e4d804",fontSize:"70%"}}
        >ONLINE STREAMING</Typography>

        <Typography
        variant="h2"
        
        sx={{ color:"#fff"}}
        >Upcoming Movies</Typography>
      </Box>
      <MovieUpComing />
    </Container>
  )
}
