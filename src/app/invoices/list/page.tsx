import { Box, Container, Paper, Typography } from '@mui/material'
import { Filter } from '@/components/invoices'

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

      <Paper sx={{ pt: '16px', pb: '24px' }} elevation={16}></Paper>
    </Container>
  )
}
