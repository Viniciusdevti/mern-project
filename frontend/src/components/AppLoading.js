import React, { useCallback, useState } from 'react'
import { withLoading } from './withLoading'

const AppImageWithLoading = withLoading(() => {
    return <div>loaded!</div>
})

export const AppLoading = () => {
    const [isLoading, setIsLoading] = useState(false)

    const load = useCallback(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [setIsLoading])

    return <div>
        <button onClick={load}>Load</button>
        <AppImageWithLoading isLoading={isLoading}/>
    </div>
}
