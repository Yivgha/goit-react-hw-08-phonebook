import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { emailValidate, nameValidate, passwordValidate } from 'helpers';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { authOperation } from 'redux/auth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"> Your Website</Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    const { name, email, password } = data;

    dispatch(authOperation.register({ name, email, password }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{  marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign up</Typography>
          <Box component="form"  onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 3 }} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller control={control} name="name" rules={nameValidate} render={({ field }) => (
                    <TextField fullWidth label="Name*" autoFocus onChange={e => field.onChange(e)} error={!!errors.password?.message}
                      helperText={errors.name?.message} /> )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller control={control}  rules={emailValidate}  name="email" render={({ field }) => (
                    <TextField  fullWidth label="Email*" onChange={e => field.onChange(e)} error={!!errors.password?.message}
                      helperText={errors.email?.message} /> )} />
              </Grid>
              <Grid item xs={12}>
                <Controller control={control} name="password" rules={passwordValidate} render={({ field }) => (
                    <TextField fullWidth label="Password*" type="password" onChange={e => field.onChange(e)}
                      error={!!errors.password?.message} helperText={errors.password?.message} /> )} />
              </Grid>
            </Grid>
            <Button type="submit"  fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Sign Up</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2"> Already have an account? Sign in </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}