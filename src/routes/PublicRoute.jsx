import { Navigate, useLocation } from 'react-router-dom';

function PublicRoute({ children }) {
    const isLoggedIn = false;
    const location = useLocation();

    return isLoggedIn ? <Navigate to={location.state?.from || '/'} /> : children;
}

export default PublicRoute;
