import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CardListStyled = styled.ul(() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
`)

export const ListItem = styled.li(() => css`
    padding: 0;
    list-style: none;
    margin: 0;
    max-width: calc(100% / 3 - 24px)
`)
