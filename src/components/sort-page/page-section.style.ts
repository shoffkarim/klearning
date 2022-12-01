import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const PageSectionContainer = styled.div(() => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 80px;
`)

export const PageSectionLeftWrapper = styled.div(() => css`
  display: grid;
  gap: 50px;
`)

export const PageSectionRightWrapper = styled.div(() => css``)
