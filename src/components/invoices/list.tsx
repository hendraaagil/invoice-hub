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
  Box,
  Skeleton,
} from '@mui/material'

import { formatCurrency, formatDate } from '@/utils/format'
import { useInvoiceStore } from '@/stores/invoice'
import { useDebounce } from '@/hooks/use-debounce'
import { useInvoiceFilters } from '@/hooks/use-invoice-filters'
import { useFilteredInvoices } from '@/hooks/use-filtered-invoices'

function TableHeader() {
  return (
    <TableHead
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.100' : 'grey.800',
      }}
    >
      <TableRow>
        {['Invoice', 'Due Date', 'Status', 'Amount', 'Actions'].map(
          (header) => (
            <TableCell key={header}>{header}</TableCell>
          ),
        )}
      </TableRow>
    </TableHead>
  )
}

export function List() {
  const { invoices } = useInvoiceStore((state) => state)
  const { query, status } = useInvoiceFilters()
  const debouncedQuery = useDebounce(query)

  const { filteredInvoices, isLoading } = useFilteredInvoices(
    invoices,
    debouncedQuery,
    status,
  )

  if (isLoading) {
    return (
      <Table>
        <TableHeader />
        <TableBody>
          {[...Array(5)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton width="60%" height={24} />
                <Skeleton width="40%" height={20} />
              </TableCell>
              <TableCell>
                <Skeleton width={100} height={24} />
              </TableCell>
              <TableCell>
                <Skeleton width={80} height={32} />
              </TableCell>
              <TableCell>
                <Skeleton width={90} height={24} />
              </TableCell>
              <TableCell>
                <Skeleton width={40} height={40} variant="circular" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  if (filteredInvoices.length === 0) {
    return (
      <Box p={3} textAlign="center">
        <Typography color="textSecondary">
          No invoices found matching your criteria
        </Typography>
      </Box>
    )
  }

  return (
    <Table>
      <TableHeader />
      <TableBody>
        {filteredInvoices.map((invoice) => (
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
