import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <IconButton aria-label='cart' sx={{ mr: 1 }}>
        <StyledBadge badgeContent={4} color='secondary'>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      {2355} грн
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

// Bage
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1, mb: 7 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position='static' color='primary'>
          {appBarLabel('Games Store')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
