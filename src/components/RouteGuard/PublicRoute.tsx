import React, { useContext, useEffect } from 'react';
import { Location, Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

export const PublicRoute = () => {

    const { user } = useContext(UserContext);

    return user?.token ? <Navigate to="/acceuil" /> : <Outlet />;

    // if(!user?.token && !allowPrivateRoute) {
    //     return <Navigate to="/login" />
    // }
    
    // if (user?.token && allowPrivateRoute){
    //     return <Navigate to="/acceuil" />
    // }


    // return props.children;
};
