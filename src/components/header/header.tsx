import React from 'react'
import { Menu } from '@mui/icons-material'
import { AppBar, IconButton, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1)
}))

export const Header: React.FC = () => {
  return (
    <AppBar color="primary" enableColorOnDark>
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
            Klearning
          </Typography>
        </StyledToolbar>
    </AppBar>
  )
}

export default Header
