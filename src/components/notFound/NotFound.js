import { Container } from '@mui/material'
import React from 'react'

export default function NotFound() {
  return (
    <Container maxWidth="xxl" sx={{textAlign:'center'}}>
      <h1 style={{fontSize:'500'}}>404</h1>
      <h2>Not Found</h2>
    </Container>
  )
}
