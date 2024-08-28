import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenresMovie } from '../../redux/movieGenresSlice';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Paging from '../paging/Paging';
import Loading from '../loading/Loading';
import MovieItems from '../movieItem/MovieItems';
import { fetchGenresTv } from '../../redux/TvGenresSlice';
import TVItem from '../tvtem/TVItem';

export default function TVGenres(props) {
    const {genrestv,tv_id } = props
    const years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]
    const [page, setPage] = useState(1);
    const [rowsToShow, setRowsToShow] = useState(2);
    const { items, total, status, path } = useSelector(state => state.genresTv)
    const [year, setYear] = React.useState(2024);
    

    const handleChange = (event) => {
        setYear(event.target.value);
    };
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        setRowsToShow(prev => prev + 2);
    };


    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchGenresTv({ page: page, genres: tv_id, year: year }));
            setRowsToShow(2)
        }
    }, [page,year,tv_id])

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
                >
                    {genrestv}
                </Typography>
            </Box>
            <Box sx={{ mt: 5, mb: 5, textAlign: 'start' }}>
                <FormControl   sx={{width:'20%',margin:'5px'}}>
                    <InputLabel sx={{color:'#e4d804'}} id="demo-simple-select-label">Year</InputLabel>
                    <Select sx={{color:'#e4d804'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="Year"
                        onChange={handleChange}
                    >
                        {years &&years.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                        
                    </Select>
                </FormControl>
            </Box>
            <Grid sx={{ marginTop: "10px" }} container rowSpacing={2} columnSpacing={{ sm: 2, md: 2, xl: 0, lg: 1 }}>
                {items && items.results && items.results.slice(0, rowsToShow * 4).map((item, index) => (
                    <TVItem item={item} key={index} path={path} />
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

            {total === 0 ? <></> : <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '10px' }}>
                <Paging total={total} page={page} setPage={setPage} />
            </Box>
            }

        </Box>
    )
}
