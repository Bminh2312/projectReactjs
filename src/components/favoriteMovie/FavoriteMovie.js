import { Image } from '@mui/icons-material';
import { Box, Button, Container, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovie, removeMovie } from '../../redux/favoriteMovieSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

//   useEffect(()=>{

//   },[])



export default function FavoriteMovie() {
    const { favoriteItems } = useSelector(state => state.favoriteMovie)
    const dispatch = useDispatch();
    const handle_remove = (title,img)=>{
        dispatch(removeMovie({ title: title, img: img }))
    }

    useEffect(()=>{
        dispatch(getMovie()) 
    },[])
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align='start'>Img</StyledTableCell>
                        <StyledTableCell align="start">Title</StyledTableCell>
                        <StyledTableCell align="start">Option</StyledTableCell>
                        {/* <StyledTableCell align="right">Year</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Delete</StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {favoriteItems && favoriteItems.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                <img src={item.img} />

                            </StyledTableCell>
                            <StyledTableCell align="start">{item.title}</StyledTableCell>
                            <StyledTableCell align="start">
                                <Button onClick={()=>{handle_remove(item.title,item.img)}} sx={{
                                    color: 'white',
                                    backgroundColor: '#e4d804', // Button background color
                                    '&:hover': {
                                        backgroundColor: '#c0b800', // Color on hover (optional)
                                    },
                                    margin: "0 auto",

                                    '&:hover': {
                                        color: '#e4d804',
                                    },
                                   
                                }}>
                                    Remove
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
