import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoMovie } from '../../redux/videoMovieSlice';
import { fetchVideoTV } from '../../redux/videoTVSlice';

export default function VideoTV(props) {
  const { tv_id } = props
  const { item, status, path } = useSelector(state => state.videoTV)
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'start') {
      dispatch(fetchVideoTV(tv_id))
    }
  }, [])
  return (
    <Container maxWidth='xl' sx={{ textAlign: 'center' }}>
      {
        item.results &&
        <iframe style={{ marginBottom: '10px', width:'100%', maxWidth:"1000px", aspectRatio: "16 / 9" }}  src={`https://www.youtube.com/embed/${item.results[0].key}?si=Kg_INfUtXHOuzy4y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen`}></iframe>
      }

    </Container>
  )
}
