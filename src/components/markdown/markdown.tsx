import MDEditor from '@uiw/react-md-editor'
import React from 'react'

export interface MarkdownProps {
  text?: string
}

export const Markdown: React.FC<MarkdownProps> = ({ text }) => <MDEditor.Markdown source={text}/>

export default Markdown
