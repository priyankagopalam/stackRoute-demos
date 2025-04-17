import React from "react";

interface RouterContextType {
    path: string;
    navigate: (to: string) => void;
}

export const RouterContext = React.createContext<RouterContextType>({
    path: "/",
    navigate: () => { }
})