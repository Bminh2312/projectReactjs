import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import MovieUpComing from '../movies/MovieUpComing'
import MovieNowPlay from '../movies/MovieNowPlay'

export default function Main({children}) {
  return (
    <Container maxWidth="xl" >
      {children}
    </Container>
  )
}
