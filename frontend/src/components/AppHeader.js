import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
    margin-top: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid;
    a {
        margin: 10px;
    }
`


export const AppHeader = () => {
    return <Div>
        <Link to={'/aula'}>
            Home
        </Link>
        <Link to={'/form'}>
            Form
        </Link>
        <Link to={'/list'}>
            List
        </Link>
        <Link to={'/'}>
            Resolução da avaliação (Usuários)
        </Link>
    </Div>
}

