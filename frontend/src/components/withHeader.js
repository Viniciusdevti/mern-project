import React from 'react'
import { AppHeader } from './AppHeader'

export const withHeader = Component => ({ ...props }) => {
    return (
        <div>
            <AppHeader/>
            <Component {...props} />
        </div>
    )
}
