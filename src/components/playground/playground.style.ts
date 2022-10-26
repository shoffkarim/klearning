import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ArrayListStyled = styled.ul(() => css`
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: end;
    gap: 20px;
    position: relative;
    margin-bottom: 50px;
`)

export interface ArrayItemStyledType {
  height: number
  color: string
}

export const ArrayItemStyled = styled.li<ArrayItemStyledType>(({ height, color }) => css`
    border: 3px solid #000;
    width: 50px;
    height: ${height * 35}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: ${color};

    &:last-child {
      margin-right: 0px
    }
`)

export const PlaygroundContainer = styled.div(() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`)

export const ButtonContainer = styled.div(() => css`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  margin-bottom: 50px
`)
