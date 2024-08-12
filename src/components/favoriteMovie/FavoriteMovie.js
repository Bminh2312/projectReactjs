import { Image } from '@mui/icons-material';
import { Box, Button, Container, Modal, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovie, removeMovie } from '../../redux/favoriteMovieSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import SignInGG from '../signInWithGG/SignInGG';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getTV, removeTV } from '../../redux/favoriteTVSlice';

const CustomTabList = styled(TabList)(({ theme }) => ({
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: '20px',
    alignItems:'center',
    justifyContent:'center',
    color:'white'
}));




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




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function FavoriteMovie() {
    const [open, setOpen] = React.useState(false);
    const { favoriteItems } = useSelector(state => state.favoriteMovie)
    const { favoriteTVItems } = useSelector(state => state.favoriteTV);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handle_removeMovie = (title, img) => {
        console.log(title)
        dispatch(removeMovie({ title: title, img: img }))
    }

    const handle_removeTV = (title, img) => {
        console.log(title)
        dispatch(removeTV({ title: title, img: img }))
    }


    const handle_navMovie = (id) => {
        if (user !== undefined && user !== null) {
            let movieLink = `/movieDetailPage/${id}`;
            navigate(movieLink);
        } else {
            handleOpen();
        }
    }

    const handle_navTV = (id) => {
        if (user !== undefined && user !== null) {
            let tvLink = `/TVDetailPage/${id}`;
            navigate(tvLink);
        } else {
            handleOpen();
        }
    }

    
    useEffect(() => {
        dispatch(getMovie())
        dispatch(getTV()) 
    }, [])
    return (
        <>
            <Tabs>
                <CustomTabList>
                    <Tab style={{margin:'0 auto', padding:'5px'}}><h3>Movie</h3></Tab>
                    <Tab style={{margin:'0 auto',padding:'5px'}}><h3>TV Series</h3></Tab>
                </CustomTabList>
                <TabPanel>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align='start'>Img</StyledTableCell>
                                    <StyledTableCell align="start">Title</StyledTableCell>
                                    <StyledTableCell align="start">Option</StyledTableCell>
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
                                            <Button onClick={() => { handle_navMovie(item.id) }} sx={{
                                                color: 'white',
                                                backgroundColor: '#e4d804', // Button background color
                                                '&:hover': {
                                                    backgroundColor: '#c0b800', // Color on hover (optional)
                                                },
                                                margin: "0 5px",

                                                '&:hover': {
                                                    color: '#e4d804',
                                                },

                                            }}>
                                                {/* <Navigate to={}>Watch</Navigate> */}
                                                Watch
                                            </Button>
                                            <Button onClick={() => { handle_removeMovie(item.title, item.img) }} sx={{
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
                </TabPanel>
                <TabPanel>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align='start'>Img</StyledTableCell>
                                    <StyledTableCell align="start">Title</StyledTableCell>
                                    <StyledTableCell align="start">Option</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {favoriteTVItems && favoriteTVItems.map((item, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            <img src={item.img} />

                                        </StyledTableCell>
                                        <StyledTableCell align="start">{item.title}</StyledTableCell>
                                        <StyledTableCell align="start">
                                            <Button onClick={() => { handle_navTV(item.id) }} sx={{
                                                color: 'white',
                                                backgroundColor: '#e4d804', // Button background color
                                                '&:hover': {
                                                    backgroundColor: '#c0b800', // Color on hover (optional)
                                                },
                                                margin: "0 5px",

                                                '&:hover': {
                                                    color: '#e4d804',
                                                },

                                            }}>
                                                {/* <Navigate to={}>Watch</Navigate> */}
                                                Watch
                                            </Button>
                                            <Button onClick={() => handle_removeTV(item.title, item.img) } sx={{
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
                </TabPanel>
            </Tabs>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                            Login with gmail
                        </Typography>
                        <SignInGG setOpen={setOpen} />
                    </Box>
                </Modal>
            </div>

        </>
    )
}
