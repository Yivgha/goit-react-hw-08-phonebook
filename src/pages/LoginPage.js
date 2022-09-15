import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/auth';
import { emailValidate, passwordValidate } from 'helpers';
import { Controller, useForm } from 'react-hook-form';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'All rights reserved © '}
      <Link color="inherit" href="https://mui.com/" underline="none">
        MyWebsite 
      </Link>
      {' ' }
       {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const { email, password } = data;

    dispatch(authOperation.logIn({ email, password }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <Controller
              control={control}
              rules={emailValidate}
              name="email"
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Email*"
                  onChange={e => field.onChange(e)}
                  error={!!errors.password?.message}
                  helperText={errors.email?.message}
                  margin="normal"
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={passwordValidate}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Password*"
                  type="password"
                  onChange={e => field.onChange(e)}
                  error={!!errors.password?.message}
                  helperText={errors.password?.message}
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}