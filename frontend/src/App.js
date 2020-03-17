import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'

export default () => {
    //componentWillMount
    useEffect(() => {
        //Codigo
        console.log('componente montado')
        return () => {
            //componentWillUnmount
            console.log('componente desmontado')
        }
    }, [])
    //ComponentWillUpdate

    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}
