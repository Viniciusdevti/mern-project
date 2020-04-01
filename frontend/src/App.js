import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'

export default () => {
   
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}
