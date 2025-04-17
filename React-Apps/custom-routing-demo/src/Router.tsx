import React, { useEffect, useState } from "react";
import { RouterContext } from "./RouterContext";

interface RouteProps {
    children: React.ReactNode;
}

function Router({ children }: RouteProps) {
    const [path, setPath] = useState<string>(window.location.pathname);

    const navigate = (to: string) => {
        window.history.pushState({}, "", to);
        setPath(to);
    }

    useEffect(() => {
        const handlePopState = () => setPath(window.location.pathname);
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    return (
        <RouterContext.Provider value={{ path, navigate }}>
            {children}
        </RouterContext.Provider>
    )

}

export default Router;