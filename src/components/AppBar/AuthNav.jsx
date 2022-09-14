import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export function AuthNav() {
  return (
    <>
      <Button
        component={RouterLink}
        to="/login"
        variant="outlined"
        sx={{ my: 1, mx: 1.5 }}
      >
        Login
      </Button>
      <Button
        component={RouterLink}
        to="/register"
        variant="outlined"
        sx={{ my: 1, mx: 1.5 }}
      >
        Register
      </Button>
    </>
  );
}