'use client'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  Button,
  Grid2 as Grid,
  InputAdornment,
  MenuItem,
  TextField,
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { DatePicker } from '@mui/x-date-pickers'
import { zodResolver } from '@hookform/resolvers/zod'

import { Invoice, Status } from '@/lib/types/invoice'
import { invoiceSchema } from '@/lib/schemas/invoice'
import { generateInvoiceNumber } from '@/utils/number'
import { useInvoiceStore } from '@/stores/invoice'

export function Form() {
  const { addInvoice } = useInvoiceStore((state) => state)
  const form = useForm({
    defaultValues: {
      id: generateInvoiceNumber(),
      name: '',
      amount: '',
      dueDate: null,
      status: '' as Status,
    },
    resolver: zodResolver(invoiceSchema),
  })

  const onSubmit: SubmitHandler<Invoice> = (data) => {
    addInvoice(data)
    // TODO: Show success message

    form.reset()
    form.setValue('id', generateInvoiceNumber())
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Grid container columns={12} spacing={2} sx={{ px: '24px' }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                fullWidth
                required
                type="text"
                label="Name"
                placeholder="Enter your invoice name"
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Controller
            name="id"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                fullWidth
                required
                type="text"
                label="Number"
                placeholder="Enter your invoice number"
                helperText={error ? error.message : null}
                slotProps={{ input: { readOnly: true } }}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Controller
            name="amount"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                fullWidth
                required
                type="number"
                label="Amount"
                placeholder="Enter your invoice amount"
                helperText={error ? error.message : null}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">Rp</InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Controller
            name="dueDate"
            control={form.control}
            rules={{ required: 'Due date is required' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <DatePicker
                  {...field}
                  minDate={new Date()}
                  sx={{ width: '100%' }}
                  slotProps={{
                    textField: {
                      error: !!error,
                      helperText: error ? error.message : null,
                    },
                  }}
                  label="Due Date *"
                  format="dd/MM/yyyy"
                />
              </>
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Controller
            name="status"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                fullWidth
                required
                select
                label="Status"
                helperText={error ? error.message : null}
              >
                {(Object.keys(Status) as Array<keyof typeof Status>).map(
                  (status) => (
                    <MenuItem key={status} value={Status[status]}>
                      {status}
                    </MenuItem>
                  ),
                )}
              </TextField>
            )}
          />
        </Grid>

        <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<Add />}
            sx={{ py: '12px' }}
            fullWidth
          >
            Add Invoice
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
