# dasfasd
```tsx
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownContainer } from './markdown.style'
import rehypeHighlight from 'rehype-highlight'
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
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
    </MarkdownContainer>
  )
}
export default Markdown

 ```