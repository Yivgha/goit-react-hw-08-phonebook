import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <Link
          component={RouterLink}
          to="/contacts"
          variant="button"
          color="text.primary"
          noWrap
          sx={{
            fontSize: '16px',
            my: 1,
            mx: 1.5,
            textDecoration: 'none',
            '&:hover': { color: 'rgb(23, 111, 203)' },
            '&:focus': { color: 'rgb(23, 111, 203)' },
          }}
        >
          Contacts
        </Link>
      ) : (
        <Link
          component={RouterLink}
          to="/"
          variant="button"
          color="text.primary"
          noWrap
          sx={{
            fontSize: '16px',
            my: 1,
            mx: 1.5,
            textDecoration: 'none',
            '&:hover': { color: 'rgb(25, 118, 210)' },
            '&:focus': { color: 'rgb(23, 111, 203)' },
          }}
        >
          Home
        </Link>
      )}
    </nav>
  );
}