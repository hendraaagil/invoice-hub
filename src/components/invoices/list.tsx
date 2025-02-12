'use client'

import { useState, type PropsWithChildren } from 'react'
import { Menu } from '@mui/icons-material'
import {
  Chip,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { Action } from './action'
import { Invoice } from '@/lib/types/invoice'
import { formatCurrency, formatDate } from '@/utils/format'
import { useInvoiceStore } from '@/stores/invoice'
import { useDebounce } from '@/hooks/use-debounce'
import { useInvoiceFilters } from '@/hooks/use-invoice-filters'
import { useFilteredInvoices } from '@/hooks/use-filtered-invoices'
import { usePopoverAction } from '@/hooks/use-popover-action'

const TableWrapper = ({ children }: PropsWithChildren) => (
  <Table>
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
    <TableBody>{children}</TableBody>
  </Table>
)

const TableSkeleton = () => (
  <TableWrapper>
    {[...Array(5)].map((_, index) => (
      <TableRow key={index}>
        <TableCell>
          <Skeleton width={150} height={24} />
          <Skeleton width={100} height={20} />
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
  </TableWrapper>
)

const TableNotFound = () => (
  <TableWrapper>
    <TableRow>
      <TableCell colSpan={5}>
        <Typography align="center" color="textSecondary">
          No invoices found
        </Typography>
      </TableCell>
    </TableRow>
  </TableWrapper>
)

export function List() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const invoices = useInvoiceStore((state) => state.invoices)
  const { query, status } = useInvoiceFilters()
  const debouncedQuery = useDebounce(query)
  const popover = usePopoverAction()

  const { filteredInvoices, isLoading } = useFilteredInvoices(
    invoices,
    debouncedQuery,
    status,
  )

  if (isLoading) {
    return <TableSkeleton />
  }
  if (filteredInvoices.length === 0) {
    return <TableNotFound />
  }

  return (
    <TableWrapper>
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
            />
          </TableCell>
          <TableCell>{formatCurrency(invoice.amount, true)}</TableCell>
          <TableCell>
            <IconButton
              aria-label="Actions"
              aria-describedby="popover-actions"
              onClick={(event) => {
                popover.onOpen(event)
                setSelectedInvoice(invoice)
              }}
            >
              <Menu />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <Action
        id="popover-actions"
        anchorEl={popover.anchorEl}
        open={popover.open}
        onClose={popover.onClose}
        invoice={selectedInvoice as Invoice}
      />
    </TableWrapper>
  )
}
