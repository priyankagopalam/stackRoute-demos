import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    useEffect(() => {
        fetch('http://localhost:3000/user/auth/isAuthenticated', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token') || ''
            }
        }).then(res => res.json())
            .then(data => setIsAuthenticated(data.isAuthenticated))
            .catch(err => setIsAuthenticated(false));
    }, [])

    if (isAuthenticated == null) {
        return <div></div>
    } else {
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    }
}
