/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownContainer } from './markdown.style'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
      <ReactMarkdown components={{
        code ({ node, inline, className, children, style, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && (match != null)
            ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={materialLight}
            language={match[1]}
            PreTag="div"
            {...props}
          />
              )
            : (
          <code className={className} {...props}>
            {children}
          </code>
              )
        }
      }}>{content}</ReactMarkdown>
    </MarkdownContainer>
  )
}
export default Markdown
