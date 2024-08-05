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
import { Avatar, Button, Container,Link as MuiLink } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Slider from 'react-slick';
import { Link as RouterLink } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme, active }) => ({
    margin: theme.spacing(1),
    color: 'white',
    display: 'block',
    marginTop: theme.spacing(2),
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



const pages = ['Home', 'Movie', 'TV Show', 'Pricing', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header(props) {
    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const [activePage, setActivePage] = React.useState('');
    const { flag } = props
    const handleActive = (page) => {
        setActivePage(page);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
          />
        );
      }

    return (
        <AppBar position="relative" sx={{ backgroundColor: "black",width:'100%' }}>
            {flag ? <Box sx={{ height: "8vh" }}>

            </Box> :
           
                <div className="slider-container">
                <Slider {...setting}>
                    <div>
                        <img
                            src="https://game8.vn/media/202111/images/gundam-live-action%20(1).jpg"
                            alt="Gundam Live Action"
                            style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'fill' }}
                        />
                    </div>
                    <div>
                    <img
                            src="https://wallpaperaccess.com/full/2030181.jpg"
                            alt="Gundam Live Action"
                            style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'fill' }}
                        />
                    </div>
                    <div>
                    <img
                            src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-iron-man-chien-dau-3-17-13-52-52.jpg"
                            alt="Gundam Live Action"
                            style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'fill' }}
                        />
                    </div>
                </Slider>
            </div>
           
             }

            <Container maxWidth="xxl" sx={{ position: 'absolute' }}>
                <Toolbar disableGutters >
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleActive(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: "40%" }}>
                        {pages.map((page) => (
                            <StyledButton
                                component={RouterLink}
                                key={page}
                                onClick={() => handleActive(page)}
                                active={activePage === page}
                            >
                                {page}
                            </StyledButton>
                        ))}
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                        
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
                {flag ? <></> : <Paper elevation={0} square sx={{ color: 'white', position: 'absolute', width: '30%', background: 'none', top: '500%', left: '10%', fontFamily: "Poppins" }}>
                    <h6 style={{ color: '#e4d804', fontSize: '170%' }}>Movflx</h6>
                    <h2 style={{ fontSize: '220%', marginBottom: '30px' }}>Unlimited <span style={{ color: '#e4d804', fontSize: '220%' }}>Movie</span>, TVs Shows, & More.</h2>
                    <div><span style={{ backgroundColor: '#fff', color: '#21232b', textTransform: 'uppercase', fontSize: '11px', padding: '7px 11px', fontWeight: '700' }}>Pg 18</span>
                        <span style={{ border: "2px solid #fff", color: '#fff', background: 'transparent', marginLeft: '9px', textTransform: 'uppercase', fontSize: '11px', padding: '5px 10px', fontWeight: '700' }}>hd</span>
                    </div>
                </Paper>}

            </Container>
        </AppBar>
    );
}
