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
})

export default theme
