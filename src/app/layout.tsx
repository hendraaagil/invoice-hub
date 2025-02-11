import { Metadata } from 'next'

import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'

import theme from '@/lib/theme'
import { SideMenu, TopBar } from '@/components/layouts'
import { LocaleProvider } from '@/components/providers'

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
            <LocaleProvider>
              <NuqsAdapter>
                <CssBaseline />
                <Box sx={{ display: 'flex' }}>
                  <TopBar />
                  <SideMenu />
                  <Box sx={{ flexGrow: 1, mt: '64px' }} component="main">
                    {props.children}
                  </Box>
                </Box>
              </NuqsAdapter>
            </LocaleProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
