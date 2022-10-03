import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

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

    @keyframes animationBack {
        0% {
            background-color: rgb(100%, 19%, 19%, 0)
        }
        50% {
            background-color: rgb(100%, 19%, 19%, 0.5)
        }
        100% {
            background-color: rgb(100%, 19%, 19%, 0)
        }
    }

    border: 3px solid #000;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    animation: animationBack 3s linear
`)

export const PlaygroundContainer = styled.div(() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`)

export const ButtonStyled = styled(Button)(() => css`
    margin-top: 50px
`)
