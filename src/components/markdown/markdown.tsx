/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
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

    <ReactMarkdown>{content}</ReactMarkdown>
  )
}
export default Markdown
