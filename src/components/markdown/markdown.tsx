// import { Editor } from '@progress/kendo-react-editor'
// import { defaultMarkdownParser, defaultMarkdownSerializer } from 'prosemirror-markdown'
import MDEditor from '@uiw/react-md-editor'
import React from 'react'
import { text } from './text'

export const Markdown: React.FC = () => {
  return (
    <div onClick={(e) => e.preventDefault()}>
      <MDEditor.Markdown
      source={text}
      />
    </div>
  )
}

export default Markdown
