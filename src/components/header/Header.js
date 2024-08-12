import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import SliderImg from '../Slider/SliderImg';
import NavMenu from '../navMenu.js/NavMenu';
import AccountMenu from '../account/AccountMenu';
import DrawerNav from '../draw/DrawerNav';
import Search from '../search/SearchType';
import { useLocation } from 'react-router-dom';

const pages = ['Movie', 'TV Series', 'Genres', 'Favorite'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header(props) {
    const [scroll, setScroll] = React.useState(false);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [activePage, setActivePage] = React.useState('');
    const { flag, searchInput } = props;
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [search, setSearch] = React.useState('');
    const location = useLocation(); // Hook to get current location

    React.useEffect(() => {
        // Extract the current search value from URL
        const pathParts = location.pathname.split('/');
        if (pathParts.length >= 2) {
            const currentSearch = pathParts[1]; // Assuming /search/:term
            if (currentSearch) {
                setSearch(currentSearch);
            }
        }
    }, [location.pathname]);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, );

    return (
        <AppBar position="relative" sx={{ backgroundColor: "black", width: '100%' }}>
            {flag ? <Box sx={{ height: '7vh' }}></Box> : <SliderImg />}
            <Container maxWidth="xxxl">
                <Toolbar sx={{ position: 'fixed', top: 0, left: '-0.01%', width: '100%', zIndex: 1100, backgroundColor: scroll ? 'black' : 'transparent' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, justifyContent: 'start', alignItems: 'center', fontSize: '300%' }}>
                        <i className="fa-solid fa-sun"></i>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Sunrise
                    </Typography>

                    <DrawerNav pages={pages} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', alignItems: 'center' }}>
                        <NavMenu item={"Movie"} />
                        <NavMenu item={"TV Series"} />
                        <NavMenu item={"Genres"} />
                        <NavMenu item={"Favorite"} />
                    </Box>
                    {searchInput?<Search search={search} />:<Search search={search}/>} {/* Truyền giá trị search từ URL */}
                    <AccountMenu />
                </Toolbar>
                {flag == true ? <></> : (
                    <Paper elevation={0} square sx={{ color: 'white', position: 'absolute', width: '30%', background: 'none', top: '40%', left: '10%', fontFamily: "Poppins" }}>
                        <h6 style={{ color: '#e4d804', fontSize: '170%' }}>Movflx</h6>
                        <h2 style={{ fontSize: '220%', marginBottom: '30px' }}>Unlimited <span style={{ color: '#e4d804', fontSize: '220%' }}>Movie</span>, TVs Shows, & More.</h2>
                        <div>
                            <span style={{ backgroundColor: '#fff', color: '#21232b', textTransform: 'uppercase', fontSize: '11px', padding: '7px 11px', fontWeight: '700' }}>Pg 18</span>
                            <span style={{ border: "2px solid #fff", color: '#fff', background: 'transparent', marginLeft: '9px', textTransform: 'uppercase', fontSize: '11px', padding: '5px 10px', fontWeight: '700' }}>hd</span>
                        </div>
                        <Button variant="contained" sx={{
                            mt: 3,
                            backgroundColor: '#e4d804', // Button background color
                            '&:hover': {
                                backgroundColor: '#c0b800', // Color on hover (optional)
                            }
                        }}>Watch now</Button>
                    </Paper>
                )}
            </Container>
        </AppBar>
    );
}
