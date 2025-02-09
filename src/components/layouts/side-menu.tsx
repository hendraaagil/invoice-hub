'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ListSharp, PostAdd } from '@mui/icons-material'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'

const drawerWidth = 280

export function SideMenu() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1c2434',
          color: (theme) => theme.palette.common.white,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ padding: '24px' }}>
        <Image alt="Logo" src="/logo.png" width={166} height={46} />
      </Toolbar>
      <Divider />
      <List>
        {['Add Invoice', 'My Invoices'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton
              LinkComponent={Link}
              href={index === 0 ? '/invoices/add' : '/invoices/list'}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                {index === 0 ? <PostAdd /> : <ListSharp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
