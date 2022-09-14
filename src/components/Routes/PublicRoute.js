import { useLocation, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export function PublicRoute({ children }) {
    let location = useLocation();
    const isLogin = useSelector(authSelectors.getIsLoggedIn);

    if (isLogin) {
        return <Navigate to="/contacts" state={{ from: location }} replace />;
    }
    return children;
};