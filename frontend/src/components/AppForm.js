import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
background-color: red;
font-size: 18px;
${props => props.active && css`
    background-color: green
`}
`

export const AppForm = ({ children }) => {
    const [active, setActive] = useState(false)

    const mouseOver = useCallback(() => {
        setActive(true)
    }, [setActive])

    const mouseLeave = useCallback(() => {
        setActive(false)
    }, [setActive])

    return (
        <form action="">
            Login: <input type="text"/> <br/>
            Senha: <input type="password"/>
            <StyledButton
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                active={active}
            >
                Enviar
            </StyledButton>
        </form>
    )
}
