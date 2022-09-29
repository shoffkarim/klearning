import React from 'react'
import { Container } from '../container'
import MainTitle from './main-title'
import { MainStyled } from './main.style'

export const Main: React.FC = () => {
  return (
    <Container>
        <MainStyled>
            <MainTitle/>
        </MainStyled>
    </Container>
  )
}

export default Main
