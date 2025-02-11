'use client'

import { Search } from '@mui/icons-material'
import { Box, InputAdornment, MenuItem, TextField } from '@mui/material'
import { Status } from '@/lib/types/invoice'
import { parseAsString, useQueryState } from 'nuqs'

export function Filter() {
  const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''))
  const [status, setStatus] = useQueryState(
    'status',
    parseAsString.withDefault('all'),
  )

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search invoice"
        sx={{ backgroundColor: 'white' }}
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
        placeholder="Status"
        sx={{ backgroundColor: 'white', minWidth: '7.5rem' }}
      >
        <MenuItem value="all">All status</MenuItem>
        {(Object.keys(Status) as Array<keyof typeof Status>).map((status) => (
          <MenuItem key={status} value={Status[status]}>
            {status}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}
