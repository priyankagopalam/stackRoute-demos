import React, { useContext } from "react";
import { RouterContext } from "./RouterContext";

interface LinkProps {
    to: string;
    children: React.ReactNode;
}

function Link({ to, children }: LinkProps) {
    const { navigate } = useContext(RouterContext);

    function handleClick(e: React.MouseEvent){
        e.preventDefault();
        navigate(to);
    }

    return(
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link;