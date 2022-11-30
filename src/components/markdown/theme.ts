import { CSSProperties } from 'react'

export const theme: { [key: string]: CSSProperties } | undefined = {
  'code[class*="language-"]': {
    color: 'white',
    background: 'none',
    textShadow: '0 -.1em .2em black',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  }
}
