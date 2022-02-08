import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CrudlService } from '../services/crudl.service.js';
import {
  loadItems,
  addItem,
  updateItems,
  removeItems,
} from '../store/item.action.js';

const theme = createTheme();
export function HomePage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => ({ items: state.itemModule.items }));
  const [biggestCampaign, setBiggestCampaign] = useState('1000');
  const [expirience, setExpirience] = useState('no expirience');

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    // console.log('you are in load product in home page ');
    dispatch(loadItems());
  };

  function saveForm(user) {
    dispatch(addItem(user));
    window.location.replace('/secondpage');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    saveForm({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      website: data.get('website'),
      linkedin: data.get('linkedin'),
      biggestCampaign: +biggestCampaign,
      experience: expirience,
    });
  };

  return (
    <section className='homepage'>
      <h1 className='sent-number'>Sent forms number:{items.length}</h1>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='given-name'
                    name='firstName'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='family-name'
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='website'
                    label='website'
                    type='website'
                    id='website'
                    autoComplete='website address..'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='linkedin'
                    label='linkedin'
                    type='linkedin'
                    id='linkedin'
                    autoComplete='linkedin address..'
                  />
                </Grid>

                <Box className='expirience'>
                  <FormControl fullWidth>
                    <InputLabel
                      variant='standard'
                      htmlFor='uncontrolled-native'
                    >
                      number years of expirience with facebook marketing
                    </InputLabel>
                    <NativeSelect
                      defaultValue={'No expirience'}
                      onChange={(ev) => {
                        setExpirience(ev.target.value);
                      }}
                      inputProps={{
                        name: 'expirience',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={'No expirience'}>No expirience</option>
                      <option value={'0-1 years'}>0-1 years</option>
                      <option value={'1-2 years'}>1-2 years</option>
                      <option value={'2 or more years'}>2 or more years</option>
                    </NativeSelect>
                  </FormControl>
                </Box>

                <label className='range' htmlFor=''>
                  {biggestCampaign}$
                  <input
                    type='range'
                    value={biggestCampaign}
                    onChange={(ev) => {
                      setBiggestCampaign(ev.target.value);
                    }}
                    name='biggestCampaign'
                    min='1000'
                    max='500000'
                  />
                </label>
              </Grid>

              <Button
                onClick={() => {
                  setBiggestCampaign(1000);
                  setExpirience('no expirience');
                }}
                type='reset'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Reset
              </Button>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </section>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
