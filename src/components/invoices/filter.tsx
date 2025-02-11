'use client'

import { Search } from '@mui/icons-material'
import { Box, InputAdornment, MenuItem, TextField } from '@mui/material'
import { Status } from '@/lib/types/invoice'
import { useInvoiceFilters } from '@/hooks/use-invoice-filters'

export function Filter() {
  const { query, setQuery, status, setStatus } = useInvoiceFilters()

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search invoice"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? 'white' : 'grey.800',
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        select
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? 'white' : 'grey.800',
          minWidth: '7.5rem',
        }}
      >
        <MenuItem value="all">All status</MenuItem>
        {(Object.keys(Status) as Array<keyof typeof Status>).map((key) => (
          <MenuItem key={key} value={Status[key]}>
            {key}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}
