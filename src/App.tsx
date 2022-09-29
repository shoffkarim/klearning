import React from 'react'
import { Header, Main } from './components'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'normalize.css'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#66176D'
    },
    info: {
      main: '#1976D2'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: '#000'
        }
      }
    }
  }
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path='/a' element={<Main />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
