import { publicRoute } from "./public";
import { useRoutes } from "react-router-dom";
import React from "react";

export const AppRoutes = () => {
    const commonRoutes = [{ path: "/", element: <div>Home</div>}];
    const routes = publicRoute;
    const element = useRoutes([...commonRoutes, ...routes]);
    
    return (
        <>{element}</>
    )
};