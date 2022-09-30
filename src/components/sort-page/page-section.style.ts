import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ArrayListStyled = styled.ul(() => css`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    respective: 500px;
`)

export const ArrayItemStyled = styled.li(() => css`
    border: 3px solid #000;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`)
