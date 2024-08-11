import React, { useState } from 'react';
import { Paper, Box, Typography, Grid, TextField, Avatar, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../../redux/userSlice';

export default function Profile() {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [gender, setGender] = useState(user?.gender ||'');
    const [address, setAddress] = useState(user?.address ||'');
    const [phone, setPhone] = useState(user?.phone ||'');

    const handleUpdate = () => {
        const img = user?.img;
        dispatch(setUser({name,email,img,phone,address,gender}))
        console.log('Updated profile:', { name, email, img, address, phone });
    };
    React.useEffect(() => {
        dispatch(getUser())
      }, [])

    return (
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
            <Box textAlign='center' mb={2}>
                <Typography variant='h3' sx={{ fontStyle: 'italic' }}>Profile</Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} textAlign='center'>
                    <Avatar
                        src={user?.img || ''}
                        sx={{ width: 100, height: 100, margin: '0 auto' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined-name"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined-email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined-gender"
                        label="Gender"
                        variant="outlined"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined-address"
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined-phone"
                        label="Phone number"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#e4d804', color: '#fff' }}
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
