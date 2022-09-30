import React from 'react'
import { Container } from '../container'
import PageSection from './page-section'
import PageTitle from './page-title'
import { PageStyled } from './sort-page.style'

export const SortPage: React.FC = () => {
  return (
    <Container>
        <PageStyled>
            <PageTitle/>
            <PageSection />
        </PageStyled>
    </Container>
  )
}

export default SortPage
