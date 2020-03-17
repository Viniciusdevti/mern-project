import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { AppUsuariosLista } from './usuarios/AppUsuariosLista'

const MarginDiv = styled.div`
    margin: 16px
`

const Spacer = styled.div`
    flex-grow: 1
`

export const AppUsuarios = () => {

    return (
        <MarginDiv>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6">
                        Usuários
                    </Typography>
                    <Spacer/>
                    <Button color='inherit' href='/aula'>
                        Exemplos do professor
                    </Button>
                </Toolbar>
            </AppBar>
            <AppUsuariosLista/>
        </MarginDiv>
    )

}
