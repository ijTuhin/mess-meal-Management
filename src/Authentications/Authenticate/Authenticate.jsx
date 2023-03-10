import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './UserContext';

const Authenticate = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user && user.uid) {
        return children;
    }
    return <Navigate to='/user-login' state={{ from: location }} replace ></Navigate>
};

export default Authenticate