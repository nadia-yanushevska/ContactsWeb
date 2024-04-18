import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isLoggedIn = false;
    const location = useLocation();
    
    return isLoggedIn ? children : <Navigate to="/login" state={{ from: location}}/>;
}

export default PrivateRoute;
