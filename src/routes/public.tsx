import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../features/auth/routes'
import { ManagementRoutes } from '../features/management/routes'

export const publicRoute = [
    {
        path: '/auth/*',
        element: <AuthRoutes />
    },
    {
        path: '/management/*',
        element: <ManagementRoutes />
    },
    // {
    //     path: '/',
    //     element: <Routes>
    //         <Route path="/auth/*" element={<AuthRoutes />} />
    //         <Route path="/management/*" element={<ManagementRoutes />} />
    //     </Routes>
    // }
]
