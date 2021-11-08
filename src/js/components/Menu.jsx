import React from 'react'
import { slide as Slide } from 'react-burger-menu'

export const Menu = () => {
    return (
        <Slide right pageWrapId={"page-wrap"} outerContainerId={"root"}>
            <a href="/">Mata-aikavisualisaatio</a>
            <a href="/credits">Credits</a>
        </Slide>
    )
}