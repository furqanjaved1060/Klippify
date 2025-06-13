import useAuthUser from '@store/authUser';
import type { ReactNode } from 'react';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

type ProtectedRoutesProps = {
    children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({children}) => {
    
    const isAuthenticated = useAuthUser(state=>state.authUser.isAuthenticated);
    const fullName = useAuthUser(state=>state.authUser.userData.fullName);
    const {username} = useParams();

    if (isAuthenticated && username===fullName?.split(' ').join('')) return children;
    return <Navigate to='/'/>
}

export default ProtectedRoutes;