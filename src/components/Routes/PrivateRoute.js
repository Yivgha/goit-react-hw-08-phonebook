import { useLocation, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export function PrivateRoute({ children }) {
  const location = useLocation();
  const isLogin = useSelector(authSelectors.getIsLoggedIn);

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}