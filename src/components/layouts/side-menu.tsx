'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import {
  ListSharp,
  PostAdd,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
} from '@mui/material'
import { styled } from '@mui/system'

const drawerWidth = 280
const closedWidth = 65

const DrawerFooter = styled('div')({
  position: 'fixed',
  bottom: 0,
  padding: '16px',
  display: 'flex',
  justifyContent: 'center',
  width: 'inherit',
  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
  backgroundColor: '#1c2434',
})

export function SideMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : closedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : closedWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1c2434',
          color: (theme) => theme.palette.common.white,
          overflowX: 'hidden',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {open ? (
        <Toolbar sx={{ padding: '24px' }}>
          <Image alt="Logo" src="/logo.png" width={166} height={46} priority />
        </Toolbar>
      ) : (
        <Toolbar />
      )}
      <Divider />
      <List sx={{ mb: '60px' }}>
        {['Add Invoice', 'My Invoices'].map((text, index) => {
          const href = index === 0 ? '/invoices/add' : '/invoices/list'
          const isActive = pathname === href

          return (
            <ListItem key={text} disablePadding={!open}>
              <ListItemButton
                LinkComponent={Link}
                href={href}
                sx={{
                  backgroundColor: isActive
                    ? 'rgba(255, 255, 255, 0.12)'
                    : 'inherit',
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {index === 0 ? <PostAdd /> : <ListSharp />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <DrawerFooter>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ width: '100%', borderRadius: 0, color: 'inherit' }}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerFooter>
    </Drawer>
  )
}
