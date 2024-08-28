import { Box, Button, Menu, MenuItem, styled, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchGenres } from '../../redux/filterGenresSlice'; // Ensure correct import path
import { getUser } from '../../redux/userSlice';

const StyledButton = styled(Button)(({ active }) => ({
    margin: "10px",
    display: 'block',
    marginTop: "10px",
    '&:hover': {
        color: '#e4d804',
    },
    backgroundColor: active ? '#e4d804' : 'transparent',
    color: active ? '#000' : 'white',
}));

export default function NavMenu(props) {
    const {item} = props;
    const navigate = useNavigate();
    const location = useLocation();
    const { items = [], status } = useSelector((state) => state.filterGenres); // Default items to an empty array
    const dispatch = useDispatch();
    const [anchorElGenres, setAnchorElGenres] = useState(null);

    // Handle opening and closing of the genres menu
    const handleCloseGenresMenu = () => {
        setAnchorElGenres(null);
    };

    const handleOpenGenresMenu = (event) => {
        setAnchorElGenres(event.currentTarget);
    };

    // Handle page navigation and opening of genres menu
    const handleActive = (event, page) => {
        if (page === 'Movie') {
            navigate('/movie');
        } else if (page === 'Genres Movie') {
            handleOpenGenresMenu(event); 
        }else if (page === 'Genres TV') {
            handleOpenGenresMenu(event); 
        } else {
            const pagePath = `/${page.toLowerCase().replace(' ', '')}`;
            navigate(pagePath);
        }
    };

    // Handle genre selection
    const handleSelectGenreMovie = (id,name) => {
        const genrePath = name.toLowerCase();
        navigate(`/genresmovie/${genrePath}/${id}`);
        handleCloseGenresMenu();
    };

    const handleSelectGenreTV = (id,name) => {
        const genrePath = name.toLowerCase();
        navigate(`/genrestv/${genrePath}/${id}`);
        handleCloseGenresMenu();
    };

    // Determine if a button is active based on the current path
    const isActive = (page) => {
        const currentPath = location.pathname;
        const buttonPath = getButtonPath(page);
        return currentPath.startsWith(buttonPath);
    };

    // Get button path for comparison
    const getButtonPath = (page) => {
        if (page === 'Movie') {
            return '/movie';
        } else if (page === 'Genres') {
            return '/genres';
        } else {
            return `/${page.toLowerCase().replace(' ', '')}`;
        }
    };

    // Fetch genres when component mounts and status is "start"
    useEffect(() => {
        if (status === "start") {
            dispatch(fetchGenres());
        }
    }, []); // Add dispatch and status as dependencies

    return (
        <>
            <StyledButton
                onClick={(event) => handleActive(event, item)} // Pass event and item
                active={isActive(item)}
            >
                {item}
            </StyledButton>
            {item === 'Genres Movie' && (
                <Menu
                    anchorEl={anchorElGenres}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElGenres)}
                    onClose={handleCloseGenresMenu}
                    PaperProps={{
                        style: {
                          maxHeight: 48 * 4.5,
                          width: '20ch',
                        },
                    }}
                >
                    {items.length > 0 ? (
                        items.map((genre) => (
                            <MenuItem key={genre.id} onClick={() => handleSelectGenreMovie(genre.id,genre.name)}>
                                <Typography textAlign="center">{genre.name}</Typography>
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>
                            <Typography textAlign="center">No genres available</Typography>
                        </MenuItem>
                    )}
                </Menu>
            )}
            {item === 'Genres TV' && (
                <Menu
                    anchorEl={anchorElGenres}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElGenres)}
                    onClose={handleCloseGenresMenu}
                    PaperProps={{
                        style: {
                          maxHeight: 48 * 4.5,
                          width: '20ch',
                        },
                    }}
                >
                    {items.length > 0 ? (
                        items.map((genre) => (
                            <MenuItem key={genre.id} onClick={() => handleSelectGenreTV(genre.id,genre.name)}>
                                <Typography textAlign="center">{genre.name}</Typography>
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>
                            <Typography textAlign="center">No genres available</Typography>
                        </MenuItem>
                    )}
                </Menu>
            )}
        </>
    );
}
