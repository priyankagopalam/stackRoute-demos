import React, { useContext } from "react";
import { RouterContext } from "./RouterContext";

interface RouteProps {
    path: string;
    component: React.ComponentType;
}

function Route({ path: routePath, component: Component }: RouteProps) {
    const { path } = useContext(RouterContext);
    return path === routePath ? <Component /> : null;
}

export default Route;