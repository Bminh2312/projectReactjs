import React from 'react';
import { alpha, Box, Button, Container, Grid, InputBase, styled, Typography, Link as MuiLink } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb';
import { Facebook, Twitter, Pinterest, LinkedIn } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';


const StyledButton = styled(Button)(({ theme, active }) => ({
    margin: theme.spacing(0.5),
    color: active ? '#000' : 'white',
    backgroundColor: active ? '#e4d804' : 'transparent',
    '&:hover': {
        color: '#e4d804',
    },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledLink = styled(MuiLink)(({ theme }) => ({
    color: 'inherit',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));


const pages = ['Home', 'Movie', 'TV Show', 'Pricing', 'Blog', 'Contact'];

export default function Footer() {
    const [activePage, setActivePage] = React.useState('');

    const handleActive = (page) => {
        setActivePage(page);
    };

    return (
        <Container maxWidth="xxl" sx={{
            backgroundImage: `url('https://movflxx.netlify.app/img/bg/footer_bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'auto',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            paddingTop: '20px',
        }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xl={2} lg={3} md={4} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <AdbIcon sx={{ display: 'flex', marginBottom: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Sunrise
                    </Typography>
                </Grid>
                <Grid item xl={8} lg={6} md={4} sm={12} xs={12} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <StyledButton
                                key={page}
                                onClick={() => handleActive(page)}
                                active={activePage === page}
                            >
                                {page}
                            </StyledButton>
                        ))}
                    </Box>
                </Grid>
                <Grid item xl={2} lg={3} md={4} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Find favorite movies"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ border: '2px solid black', width: '100%', mt: 5, mb: 5, boxShadow: '0px 3px 0px 0px rgba(143, 143, 143, 0.14)' }}>
            </Box>
            <Box sx={{ width: '100%', color: 'white', py: 2, mt: 2 }}>
                <Container maxWidth="xxl">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', whiteSpace: 'nowrap' }}>
                        <Box sx={{ display: 'flex', gap: 3, color: 'white' }}>
                            <StyledLink component={RouterLink} to="/movieDetailPage">
                                FAQ
                            </StyledLink>
                            <StyledLink underline="none">Help Center</StyledLink>
                            <StyledLink underline="none" >Terms of Use</StyledLink>
                            <StyledLink underline="none" >Privacy</StyledLink>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <StyledLink ><Facebook /></StyledLink>
                            <StyledLink ><Twitter /></StyledLink>
                            <StyledLink ><Pinterest /></StyledLink>
                            <StyledLink ><LinkedIn /></StyledLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ width: '100%', color: 'white', py: 2, mt: 2 }}>
                <Typography>Copyright © 2024. All Rights Reserved By TRINH BINH MINH</Typography>
            </Box>
        </Container>
    );
}
