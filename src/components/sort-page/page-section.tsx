
import React from 'react'
import { Markdown } from '../markdown'
import { Playground } from '../playground'
import { PageSectionContainer, PageSectionLeftWrapper, PageSectionRightWrapper } from './page-section.style'
export const PageSection: React.FC = () => {
  return (
    <PageSectionContainer>
      <PageSectionLeftWrapper>
        <Playground/>
        <Markdown/>
      </PageSectionLeftWrapper>
      <PageSectionRightWrapper>
        <Markdown/>
      </PageSectionRightWrapper>
    </PageSectionContainer>
  )
}

export default PageSection
