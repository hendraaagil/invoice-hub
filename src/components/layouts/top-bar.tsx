'use client'

import { AppBar, Toolbar } from '@mui/material'
import { ModeSwitch } from '../ui'

export function TopBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#fff' : 'default',
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <ModeSwitch />
      </Toolbar>
    </AppBar>
  )
}
