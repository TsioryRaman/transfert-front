import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLogged } from '../hooks/useLogged';

export const PublicRoute = () => {

    const logged = useLogged();

    return logged ? <Navigate to="/acceuil" /> : <Outlet />;
};
