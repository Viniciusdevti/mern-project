import React from 'react'


export const withLoading = (Component) => {
    const WithLoading = ({ isLoading, ...props }) => {
        if (isLoading) {
            return 'Loading ...'
        }
        return <Component {...props} />
    }

    return WithLoading
}
