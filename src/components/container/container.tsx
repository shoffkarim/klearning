import React from 'react'
import { ContainerStyled } from './container.style'

export interface ContainerType {
  children: React.ReactNode
}

export const Container: React.FC<ContainerType> = ({ children }) => {
  return (
    <ContainerStyled>
        { children }
    </ContainerStyled>
  )
}

export default Container
