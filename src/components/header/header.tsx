import React from 'react'
import { Menu } from '@mui/icons-material'
import { AppBar, IconButton, Typography } from '@mui/material'

import { StyledToolbar } from './header.style'

export const Header: React.FC = () => {
  return (
    <AppBar color="primary" enableColorOnDark position="relative">
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="h6"
        >
          KLearning
        </Typography>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
