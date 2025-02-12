import { Metadata } from 'next'
import { Container, Typography } from '@mui/material'
import { Form } from '@/components/invoices'

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

      <Form />
    </Container>
  )
}
