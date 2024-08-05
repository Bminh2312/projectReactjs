import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesNowPlay } from '../../redux/movieNowPlaySlice';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material'
import MovieItems from '../movieItem/MovieItems';
import Loading from '../loading/Loading';

export default function MovieNowPlay() {
    const [page, setPage] = useState(1);
    const [rowsToShow, setRowsToShow] = useState(2);
    const { items, total, status, path } = useSelector(state => state.nowPlayMovies)
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        setRowsToShow(prev => prev + 2);
    };

    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchMoviesNowPlay(page));
            setRowsToShow(2)
        }

    }, [page])

    if (status === 'loading') {
        return <Loading/>
 
        
    }



    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ mt: 5, mb: 5, textAlign: 'start' }}>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{ textTransform: 'uppercase', color: "#e4d804", fontSize: "70%" }}
                >ONLINE STREAMING</Typography>

                <Typography
                    variant="h2"

                    sx={{ color: "#fff" }}
                >Now play Movies</Typography>
            </Box>
            <Grid sx={{ marginTop: "10px",textAlign:'center' , justifyContent: 'center', alignItems: 'center' }} container rowSpacing={2} >
                {items && items.results && items.results.slice(0, rowsToShow * 4).map((item, index) => (
                    <MovieItems item={item} key={index} path={path} />
                ))}
            </Grid>
            {rowsToShow * 4 < (items && items.results && items.results.length) && (
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px' }}>
                    <Button variant="contained" onClick={handleLoadMore}>Load More</Button>
                </Box>
            )}
            {total !== 0 ? <></> : <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '10px' }}>
                <Pagination total={total} page={page} setPage={setPage} />
            </Box>
            }

        </Box>
    )
}
