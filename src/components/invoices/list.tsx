'use client'

import { Menu } from '@mui/icons-material'
import {
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { useInvoiceStore } from '@/stores/invoice'
import { formatCurrency, formatDate } from '@/utils/format'

export function List() {
  const { invoices } = useInvoiceStore((state) => state)

  return (
    <Table>
      <TableHead sx={{ bgcolor: '#F7F9FC' }}>
        <TableRow>
          {['Invoice', 'Due Date', 'Status', 'Amount', 'Actions'].map(
            (header) => (
              <TableCell key={header}>{header}</TableCell>
            ),
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>
              <Typography>{invoice.name}</Typography>
              <Typography fontSize="0.875rem" color="textSecondary">
                {invoice.id}
              </Typography>
            </TableCell>
            <TableCell>{formatDate(invoice.dueDate as Date)}</TableCell>
            <TableCell>
              <Chip
                color={
                  invoice.status === 'paid'
                    ? 'success'
                    : invoice.status === 'pending'
                      ? 'warning'
                      : 'error'
                }
                label={invoice.status}
                sx={{ textTransform: 'capitalize' }}
              />
            </TableCell>
            <TableCell>{formatCurrency(invoice.amount)}</TableCell>
            <TableCell>
              <IconButton aria-label="Actions">
                <Menu />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
