import { Box, Button, Modal, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie, getMovie } from '../../redux/favoriteMovieSlice';
import { useNavigate } from 'react-router-dom';
import SignInGG from '../signInWithGG/SignInGG';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getTV, removeTV } from '../../redux/favoriteTVSlice';

const CustomTabList = styled(TabList)(({ theme }) => ({
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
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
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ResponsiveImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: 'auto',
    },
}));

export default function FavoriteMovie() {
    const [open, setOpen] = React.useState(false);
    const { favoriteItems } = useSelector(state => state.favoriteMovie);
    const { favoriteTVItems } = useSelector(state => state.favoriteTV);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handle_removeMovie = (title, img) => {
        dispatch(removeMovie({ title, img }));
    };

    const handle_removeTV = (title, img) => {
        dispatch(removeTV({ title, img }));
    };

    const handle_navMovie = (id) => {
        if (user) {
            navigate(`/movieDetailPage/${id}`);
        } else {
            handleOpen();
        }
    };

    const handle_navTV = (id) => {
        if (user) {
            navigate(`/TVDetailPage/${id}`);
        } else {
            handleOpen();
        }
    };

    useEffect(() => {
        dispatch(getMovie());
        dispatch(getTV());
    }, [dispatch]);

    return (
        <>
            <Tabs>
                <CustomTabList>
                    <Tab sx={{ margin: '0 auto', padding: '5px' }}>
                        <Typography variant="h6">Movie</Typography>
                    </Tab>
                    <Tab sx={{ margin: '0 auto', padding: '5px' }}>
                        <Typography variant="h6">TV Series</Typography>
                    </Tab>
                </CustomTabList>
                <TabPanel>
                    <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
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
                                            <ResponsiveImage src={item.img} alt={item.title} />
                                        </StyledTableCell>
                                        <StyledTableCell align="start">{item.title}</StyledTableCell>
                                        <StyledTableCell align="start">
                                            <Button onClick={() => handle_navMovie(item.id)} sx={{
                                                color: 'white',
                                                backgroundColor: '#e4d804',
                                                '&:hover': {
                                                    backgroundColor: '#c0b800',
                                                },
                                                margin: "0 5px",
                                            }}>
                                                Watch
                                            </Button>
                                            <Button onClick={() => handle_removeMovie(item.title, item.img)} sx={{
                                                color: 'white',
                                                backgroundColor: '#e4d804',
                                                '&:hover': {
                                                    backgroundColor: '#c0b800',
                                                },
                                                margin: "0 5px",
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
                    <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
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
                                            <ResponsiveImage src={item.img} alt={item.title} />
                                        </StyledTableCell>
                                        <StyledTableCell align="start">{item.title}</StyledTableCell>
                                        <StyledTableCell align="start">
                                            <Button onClick={() => handle_navTV(item.id)} sx={{
                                                color: 'white',
                                                backgroundColor: '#e4d804',
                                                '&:hover': {
                                                    backgroundColor: '#c0b800',
                                                },
                                                margin: "0 5px",
                                            }}>
                                                Watch
                                            </Button>
                                            <Button onClick={() => handle_removeTV(item.title, item.img)} sx={{
                                                color: 'white',
                                                backgroundColor: '#e4d804',
                                                '&:hover': {
                                                    backgroundColor: '#c0b800',
                                                },
                                                margin: "0 5px",
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                        Login with Gmail
                    </Typography>
                    <SignInGG setOpen={setOpen} />
                </Box>
            </Modal>
        </>
    );
}
