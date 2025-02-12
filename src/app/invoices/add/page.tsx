import { Metadata } from 'next'
import { Container, Divider, Paper, Typography } from '@mui/material'
import { AddForm } from '@/components/invoices'

export const metadata: Metadata = {
  title: 'Add Invoice',
}

export default function AddPage() {
  return (
    <Container sx={{ py: '32px' }}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: '32px' }}
        gutterBottom
      >
        Add Invoice
      </Typography>

      <Paper sx={{ pt: '16px', pb: '24px' }} elevation={16}>
        <Typography fontWeight={700} sx={{ px: '24px' }}>
          Invoice Form
        </Typography>
        <Divider sx={{ my: '16px' }} />
        <AddForm />
      </Paper>
    </Container>
  )
}
