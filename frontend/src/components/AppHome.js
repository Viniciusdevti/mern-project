import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { AppContainer } from './AppContainer'
import AppImage from './AppImage'
import { AppLoading } from './AppLoading'

const Button = styled.button`
    font-size: 25px
`

export const AppHome = () => {
    const [showImage, setShowImage] = useState(true)

    const toggle = useCallback(() => {
        setShowImage(!showImage)
    }, [setShowImage, showImage])

    return <AppContainer>
        <h3>App Home</h3>

        <Button onClick={toggle}>
            {showImage ? 'Hide' : 'Show'}
        </Button>

        <AppImage show={showImage}/>

        <AppLoading/>
    </AppContainer>
}
