/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import MarkdownElement from './markdown-element'
import { MarkdownContainer } from './markdown.style'

export interface MarkdownProps {
  text?: string
}

export const Markdown: React.FC<MarkdownProps> = ({ text }) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('code.md')
      .then(async (res) => await res.text())
      .then((text) => setContent(text))
  })

  return (
    <MarkdownContainer>
      <MarkdownElement content={content}/>
    </MarkdownContainer>
  )
}
export default Markdown
