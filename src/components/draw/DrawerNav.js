import { Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import NavMenu from '../navMenu.js/NavMenu';

export default function DrawerNav(props) {
    const { pages } = props;
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'start', alignItems: 'center' }}>
                <IconButton
                    size="large"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleDrawerOpen}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{
                    sx: {
                        backgroundColor: '#485460',
                    }
                }}
            >
                <Box
                    sx={{ width: 250,height:"auto"}}
                    role="presentation"
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <i className="fa-solid fa-sun" style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}></i>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Sunrise
                            </Typography>
                        </Box>
                        <IconButton onClick={handleDrawerClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {pages.map((page, index) => (
                            <ListItem button key={index}>
                                <NavMenu item={page} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
