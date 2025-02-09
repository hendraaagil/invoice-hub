import { Metadata } from 'next'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'

import theme from '@/lib/theme'
import { ModeSwitch } from '@/components/ui'
import { SideMenu } from '@/components/layouts'
import { Box } from '@mui/material'

export const metadata: Metadata = {
  title: {
    template: '%s - InvoiceHub',
    default: 'InvoiceHub',
  },
  description: 'Invoicing made simple.',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ModeSwitch />

            <Box sx={{ display: 'flex' }}>
              <SideMenu />
              <Box sx={{ flexGrow: 1 }} component="main">
                {props.children}
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
