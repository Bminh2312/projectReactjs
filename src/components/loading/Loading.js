import { CircularProgress, Container } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <Container maxWidth="xxl" sx={{ background: '#1e272e', paddingLeft: '0 !important', paddingRight: '0 !important', display:"flex" }}>
      <CircularProgress sx={{ margin: '0 auto', justifyContent: "center" }}></CircularProgress>
    </Container>


  )
}
