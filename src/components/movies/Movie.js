import React, { useEffect, useState } from 'react'

import MovieItems from '../movieItem/MovieItems'
import { Box, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesUpComing } from '../../redux/movieSlice'
import Pagination from '../paging/Paging'


export default function Movie() {
    
    const [page,setPage] = useState(1);
    const { items, total, status, error, path } = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchMoviesUpComing(page));
          }

    }, [page])


    return (
        <Box sx={{ width: '100%' }}>
            <Grid sx={{ marginTop: "10px" }} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
                {
                    items && items.results && items.results.map((item, index) => (
                        <MovieItems item={item} key={index} path={path} />
                    ))
                }
               <Pagination total={total} page={page} setPage={setPage}/>
            </Grid>
        </Box>
    )
}
