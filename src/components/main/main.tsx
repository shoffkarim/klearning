import React from 'react'
import { Container } from '../container'
import { MainSection } from '../main-section'
import MainTitle from './main-title'
import { MainStyled } from './main.style'

export const Main: React.FC = () => {
  return (
    <Container>
        <MainStyled>
            <MainTitle/>
            <MainSection/>
        </MainStyled>
    </Container>
  )
}

export default Main
