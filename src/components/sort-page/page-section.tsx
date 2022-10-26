
import React from 'react'
import { Markdown } from '../markdown'
import { Playground } from '../playground'
import { PageSectionContainer, PageSectionLeftWrapper } from './page-section.style'
import { text, textCode } from './../markdown/text'
export const PageSection: React.FC = () => {
  return (
    <PageSectionContainer>
      <PageSectionLeftWrapper>
        <Playground/>
        <Markdown text={textCode}/>
      </PageSectionLeftWrapper>
      <Markdown text={text}/>
    </PageSectionContainer>
  )
}

export default PageSection
