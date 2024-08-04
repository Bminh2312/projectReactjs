import React, { useEffect, useState } from 'react'

import MovieItems from '../movieItem/MovieItems'
import { Box, Button, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesUpComing } from '../../redux/movieSlice'
import Pagination from '../paging/Paging'


export default function Movie() {

    const [page, setPage] = useState(1);
    const [rowsToShow, setRowsToShow] = useState(2);
    const { items, total, status, path } = useSelector(state => state.movies)
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        setRowsToShow(prev => prev + 2); 
    };

    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchMoviesUpComing(page));
            setRowsToShow(2)
        }

    }, [page])


    return (
        <Box sx={{ width: '100%' }}>
            <Grid sx={{ marginTop: "10px" }} container rowSpacing={2} columnSpacing={{  sm: 2, md: 2, xl: 0, lg: 1}}>
                {items && items.results && items.results.slice(0, rowsToShow * 4).map((item, index) => (
                    <MovieItems item={item} key={index} path={path} />
                ))}
            </Grid>
            {rowsToShow * 4 < (items && items.results && items.results.length) && (
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px' }}>
                    <Button variant="contained" onClick={handleLoadMore}>Load More</Button>
                </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '10px' }}>
                <Pagination total={total} page={page} setPage={setPage} />
            </Box>

        </Box>
    )
}
