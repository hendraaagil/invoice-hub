'use client'

import { createTheme } from '@mui/material/styles'
import { Open_Sans as FontSans } from 'next/font/google'

const fontSans = FontSans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: fontSans.style.fontFamily,
  },
  palette: {
    background: { default: '#F1F5F9' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 500,
        },
      },
      variants: [
        {
          props: { color: 'success' },
          style: {
            backgroundColor: 'rgba(33, 150, 83, 0.08)',
            color: '#219653',
          },
        },
        {
          props: { color: 'error' },
          style: {
            backgroundColor: 'rgba(211, 64, 83, 0.08)',
            color: '#D34053',
          },
        },
        {
          props: { color: 'warning' },
          style: {
            backgroundColor: 'rgba(255, 167, 11, 0.08)',
            color: '#FFA70B',
          },
        },
      ],
    },
  },
})

export default theme
