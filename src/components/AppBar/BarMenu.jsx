import MenuIcon from '@mui/icons-material/Menu';
import { Container, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';

const drawerWidth = 240;

export function BarMenu(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: ' flex-start' }}>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><Navigation />{''}</ListItem>
                {isLoggedIn ? (<ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start' }}><UserMenu /></ListItem>) :
                    (<ListItem sx={{ display: 'flex', flexDirectio: 'column', alignItems:'flex-start' }}><AuthNav /></ListItem>)}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Container maxWidth="xl">
            <AppBar component="nav" color="">
                <Divider />
                <Toolbar sx={{ display: { sm: 'flex', justifyContent: 'space-between' } }}>
                    <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'nnone' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        <MenuIcon />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', justifyContect: 'end' } }}>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} >
                            <Navigation />
                            {isLoggedIn ? <UserMenu /> : <AuthNav />}
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component={<Navigation />}>
                <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}>
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Box>
        </Container>);
};

BarMenu.propTypes = {
  window: PropTypes.func,
};