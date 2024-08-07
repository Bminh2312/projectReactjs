import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, Container } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';

import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import SliderImg from '../Slider/SliderImg';
import NavMenu from '../navMenu.js/NavMenu';
import AccountMenu from '../account/AccountMenu';

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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));




const pages = ['Movie', 'TV Show', 'Genres', 'Release  year', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header(props) {
    const navigate = useNavigate()
    const genres = 'action'
    const [search, setSearch] = React.useState('')
    const [scroll, setScroll] = React.useState(false);
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [activePage, setActivePage] = React.useState('');
    const { flag } = props
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    }, [user])

    return (
        <AppBar position="relative" sx={{ backgroundColor: "black", width: '100%' }}>
            {flag ? <Box sx={{ height: '7vh' }}>

            </Box> :

                <SliderImg />

            }

            <Container maxWidth="xxxl" >
                <Toolbar sx={{ position: 'fixed', top: 0, left: '-0.01%', width: '100%', zIndex: 1100, backgroundColor: scroll ? 'black' : 'transparent' }}  >
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, justifyContent: 'start', alignItems: 'center', fontSize: '300%' }}>
                        <i class="fa-solid fa-sun" ></i>
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

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'start', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', alignItems: 'center' }}>
                        <NavMenu item={"Movie"} />
                        <NavMenu item={"TV Series"} />
                        <NavMenu item={"Genres"} />
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    navigate(`/search/${search}`)
                                }
                            }}

                        />
                    </Search>

                    
                    <AccountMenu/>
                    
                </Toolbar>
                {flag ? <></> : <Paper elevation={0} square sx={{ color: 'white', position: 'absolute', width: '30%', background: 'none', top: '40%', left: '10%', fontFamily: "Poppins" }}>
                    <h6 style={{ color: '#e4d804', fontSize: '170%' }}>Movflx</h6>
                    <h2 style={{ fontSize: '220%', marginBottom: '30px' }}>Unlimited <span style={{ color: '#e4d804', fontSize: '220%' }}>Movie</span>, TVs Shows, & More.</h2>
                    <div><span style={{ backgroundColor: '#fff', color: '#21232b', textTransform: 'uppercase', fontSize: '11px', padding: '7px 11px', fontWeight: '700' }}>Pg 18</span>
                        <span style={{ border: "2px solid #fff", color: '#fff', background: 'transparent', marginLeft: '9px', textTransform: 'uppercase', fontSize: '11px', padding: '5px 10px', fontWeight: '700' }}>hd</span>
                    </div>
                    <Button variant="contained" sx={{
                        mt: 3,
                        backgroundColor: '#e4d804', // Button background color
                        '&:hover': {
                            backgroundColor: '#c0b800', // Color on hover (optional)
                        }
                    }}>Watch now</Button>
                </Paper>}

            </Container>
        </AppBar>
    );
}
