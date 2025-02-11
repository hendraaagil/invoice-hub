import { Box, Container, Paper, Typography } from '@mui/material'
import { Filter, List } from '@/components/invoices'

export default function ListPage() {
  return (
    <Container sx={{ py: '32px' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight={700}>
          My Invoice
        </Typography>
        <Filter />
      </Box>

      <Paper sx={{ p: '16px' }} elevation={16}>
        <List />
      </Paper>
    </Container>
  )
}
