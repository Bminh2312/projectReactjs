
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Link as MuiLink, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInGG from '../signInWithGG/SignInGG';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, getMovie, removeMovie } from '../../redux/favoriteMovieSlice';
import { addTV, getTV, removeTV } from '../../redux/favoriteTVSlice';

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0.5),
    color: 'white',
    backgroundColor: '#e4d804', // Button background color
    '&:hover': {
        backgroundColor: '#c0b800', // Color on hover (optional)
    },
    margin: "0 auto",
    position: 'absolute',
    bottom: '3%',
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

export default function TVItem(props) {
    const [open, setOpen] = React.useState(false);
    const [love, setLove] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { user } = useSelector((state) => state.user);
    const { favoriteTVItems } = useSelector(state => state.favoriteTV);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { item, key, path } = props;
    const imgSrc = path + '/' + item.backdrop_path;
    

    const date = item.first_air_date;
    const year = date.split('-')[0];

    const movieLink = `/tv/${item.id}`;

    // Check if the item is in the favorite list
    useEffect(() => {
        const isFavorite = favoriteTVItems.some(favItem => favItem.title === item.original_name && favItem.img === imgSrc);
        setLove(isFavorite);
    }, [favoriteTVItems, item.original_name, imgSrc]);

    const handleNavigation = () => {
        if (user !== undefined && user !== null) {
            navigate(movieLink);
        } else {
            handleOpen();
        }
    };

    const handleLove = (title, src, id) => {
        const isFavorite = favoriteTVItems.some(item => item.title === title && item.img === src);
        if (isFavorite) {

            dispatch(removeTV({ title: title, img: src, id: id}));
           
        } else {
            dispatch(addTV({ title: title, img: src, id: id }));
           
            
        }
        
        
        setLove(!love);
    };

    useEffect(()=>{
        dispatch(getTV()) 
    },[])

    return (
        <>
            <Grid item key={key} xl={3} lg={4} md={6} xs={12}>
                <Card sx={{ maxWidth: 345, background: '#485460', color: 'white', height: "55vh", position: 'relative' }}>
                    <Box sx={{ overflow: 'hidden' }}>
                        <CardMedia
                            sx={{ height: 300, '&:hover': { transform: 'scale(1.2)' }, transition: '1s' }}
                            image={imgSrc}
                            title={item.original_name}
                        />
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ color: '#ffc048', marginBottom: '10px' }}>
                            <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-evenly', whiteSpace: 'normal' }}>
                                <p style={{ width: '70%', fontSize: "90%", textAlign: 'start' }}>{item.original_name}</p>
                                {year&& <p style={{ width: '30%', textAlign: 'end' }}>{year}</p>}
                            </Box>
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ color: '#ffc048' }}>
                            <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-evenly' }}>
                                <p style={{ width: '50%', fontSize: "90%", textAlign: 'start' }}><i className="fa-regular fa-eye" style={{ margin: '5px' }}></i>{item.popularity}</p>
                                <p style={{ width: '50%', fontSize: "90%", textAlign: 'end' }}><i className="fa-regular fa-thumbs-up" style={{ margin: '5px' }}></i>{item.vote_count}</p>
                            </Box>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <StyledButton onClick={handleNavigation}>Watch movie</StyledButton>
                    </CardActions>
                    <CardActions>
                        <Button
                            sx={{
                                color: 'white',
                                backgroundColor: '#e4d804', // Button background color
                                '&:hover': {
                                    backgroundColor: '#c0b800', // Color on hover (optional)
                                },
                                margin: "0 auto",
                                position: 'absolute',
                                bottom: '94%',
                                left: '81%',
                            }}
                            onClick={() => handleLove(item.original_name, imgSrc, item.id)}
                        >
                            {love ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

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
    );
}


