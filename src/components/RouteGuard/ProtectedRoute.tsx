import React, { useContext, useEffect } from 'react';
import { Location, Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

export const privateLink = ["/login","/signup"]

interface PrivateRouteProps {
}

const ProtectedRoute: React.FC<PrivateRouteProps> = (props: any) => {
    const { user } = useContext(UserContext);
    const location:Location = useLocation()

    const allowPrivateRoute:boolean = privateLink.some(p => location.pathname.includes(p))

    return user?.token ? <Outlet /> : <Navigate to="/login" />;

    // if(!user?.token && !allowPrivateRoute) {
    //     return <Navigate to="/login" />
    // }
    
    // if (user?.token && allowPrivateRoute){
    //     return <Navigate to="/acceuil" />
    // }


    // return props.children;
};

export default ProtectedRoute;
