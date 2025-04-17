import React, { useContext } from 'react'
import AppContext from "./AppContext";

export default function ComponentC() {
    const value: any = useContext(AppContext)
    return (
        <div>
            ComponentC
            {
                <p>{value}</p>
            }
        </div>
    )
}
