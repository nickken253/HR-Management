import { publicRoute } from "./public";
import { useRoutes } from "react-router-dom";
import { loadUser } from "../lib/auth";
import { useEffect, useState } from "react";

export const AppRoutes = () => {
    const [user, setUser] = useState(null);
    loadUser();
    const commonRoutes = [{ path: "/", element: <div>Home</div>}];
    const routes = publicRoute;
    const element = useRoutes([...commonRoutes, ...routes]);
    
    return (
        <>{element}</>
    )
};