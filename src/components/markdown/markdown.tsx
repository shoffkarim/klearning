import MDEditor from '@uiw/react-md-editor'
import React from 'react'
import { text } from './text'

export const Markdown: React.FC = () => <MDEditor.Markdown source={text}/>

export default Markdown
