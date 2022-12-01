/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable react/no-children-prop */

import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface MarkdownElementProps {
  content: string
}

export const MarkdownElement: React.FC<MarkdownElementProps> = ({ content }) => {
  return (
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
  )
}

export default MarkdownElement
