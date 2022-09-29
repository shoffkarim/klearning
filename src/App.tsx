import React from 'react'
import { Header, Main } from './components'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'normalize.css'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#66176D'
    }
  }
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Main/>
    </ThemeProvider>
  )
}

export default App
