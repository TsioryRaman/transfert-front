import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

interface PrivateRouteProps {
}

const ProtectedRoute: React.FC<PrivateRouteProps> = (props: any) => {
    const { user } = useContext(UserContext);

    console.log(user)

    if (!user?.token) {
        return <Navigate to="/login" />
    }

    return props.children;
};

export default ProtectedRoute;
