import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperation } from 'redux/auth';
import { BarMenu } from '../AppBar/BarMenu';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { PublicRoute } from '../Routes/PublicRoute';
const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => ({ default: module.HomePage }))
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage').then(module => ({
    default: module.ContactsPage,
  }))
);
const LoginPage = lazy(() =>
  import('../../pages/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage').then(module => ({
    default: module.RegisterPage,
  }))
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<BarMenu />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Container>
  );
};