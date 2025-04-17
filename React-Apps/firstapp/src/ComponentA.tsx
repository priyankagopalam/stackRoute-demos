import React from 'react'
import AppContext from "./AppContext";
import ComponentB from './ComponentB'

export default function ComponentA() {
    return (
        <div>
            ComponentA
            <AppContext.Provider value="John">
                <ComponentB />
            </AppContext.Provider>
        </div>

    )
}
