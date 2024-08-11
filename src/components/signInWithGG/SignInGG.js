import { Button, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/gmailCofig';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../../redux/userSlice';
import { ToastContainer, toast } from 'react-toastify';

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(0.5),
  color: 'white',
  borderRadius: '10px',
  margin: '0 auto',
  overflow: 'hidden',

  '&:hover': {
    backgroundColor: '#c0b800', 
    color: '#e4d804',
  },

  '&::before': {
    content: '""',
    background: `linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    )`,
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    backgroundSize: '400%',
    zIndex: -1,
    filter: 'blur(5px)',
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    animation: 'glowing-button-85 20s linear infinite',
    transition: 'opacity 0.3s ease-in-out',
    borderRadius: '10px',
  },

  '&::after': {
    zIndex: -1,
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#222',
    left: 0,
    top: 0,
    borderRadius: '10px',
  },

  '@keyframes glowing-button-85': {
    '0%': {
      backgroundPosition: '0 0',
    },
    '50%': {
      backgroundPosition: '400% 0',
    },
    '100%': {
      backgroundPosition: '0 0',
    },
  },
}));

export default function SignInGG(props) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Access the user from the Redux store
  const { setOpen } = props;

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
        dispatch(setUser({ email: data.user.email, name: data.user.displayName, img: data.user.photoURL }));
        setOpen(false);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setValue(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <StyledButton onClick={handleClick}>
        <i className="fa-solid fa-envelope" style={{ margin: '5px' }}></i>Sign in
      </StyledButton>
    </div>
  );
}
