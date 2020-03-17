import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppForm } from '../components/AppForm'
import { AppHome } from '../components/AppHome'
import { AppList } from '../components/AppList'
import { AppUsuarios } from '../components/AppUsuarios'
import { withHeader } from '../components/withHeader'

export const AppRoutes = () => {
    return <Switch>
        <Route path={'/aula'} component={withHeader(AppHome)} exact/>
        <Route path={'/list'} component={withHeader(AppList)} exact/>
        <Route path={'/form'} component={withHeader(AppForm)} exact/>
        <Route path={'/'} component={AppUsuarios} exact/>
    </Switch>
}
