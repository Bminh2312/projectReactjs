import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material'
import MovieItems from '../movieItem/MovieItems';
import Loading from '../loading/Loading';
import { fetchSearchMovie } from '../../redux/searchMovieSlice';

export default function MovieSearch(props) {
    const { search } = props;
    console.log(search)
    const [page, setPage] = useState(1);
    const [rowsToShow, setRowsToShow] = useState(2);
    const { items, total, status, path } = useSelector(state => state.searchMovie)
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        setRowsToShow(prev => prev + 2);
    };

    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchSearchMovie({ search: search, page: page }));
            setRowsToShow(2)
        }

    }, [page, search])

    if (status === 'loading') {
        return <Loading />


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
                >{search}</Typography>
            </Box>
            <Grid container sx={{ marginTop: "10px", textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} rowSpacing={2} >
                {items && items.results && items.results.slice(0, rowsToShow * 4).map((item, index) => (
                    <MovieItems item={item} key={index} path={path} />
                ))}
            </Grid>
            {rowsToShow * 4 < (items && items.results && items.results.length) && (
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px' }}>
                    <Button variant="contained" sx={{
                        backgroundColor: '#e4d804', // Button background color
                        '&:hover': {
                            backgroundColor: '#c0b800', // Color on hover (optional)
                        },
                        margin: "0 auto",

                        '&:hover': {
                            color: '#e4d804',
                        },
                    }} onClick={handleLoadMore}>Load More</Button>
                </Box>
            )}
            {total !== 0 ? <></> : <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '10px' }}>
                <Pagination total={total} page={page} setPage={setPage} />
            </Box>
            }

        </Box>
    )
}
