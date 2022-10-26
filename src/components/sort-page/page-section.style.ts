import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const PageSectionContainer = styled.div(() => css`
    display: flex;
`)

export const ArrayListStyled = styled.ul(() => css`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
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
    height: ${height * 50}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    background-color: ${color}

    // position: absolute;
`)

export const PlaygroundContainer = styled.div(() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`)

// export const ButtonStyled = styled(Button)(() => css`
//     margin-top: 50px
// `)
