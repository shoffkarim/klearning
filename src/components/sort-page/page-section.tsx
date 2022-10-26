
import React from 'react'
import { Markdown } from '../markdown'
import { Playground } from '../playground'
import { PageSectionContainer } from './page-section.style'

export const PageSection: React.FC = () => {
  return (
    <PageSectionContainer>
      <Playground/>
      <Markdown/>
    </PageSectionContainer>
  )
}

export default PageSection
