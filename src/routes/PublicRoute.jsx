import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

function PublicRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const location = useLocation();

    return isLoggedIn ? <Navigate to={location.state?.from || '/'} /> : children;
}

export default PublicRoute;
