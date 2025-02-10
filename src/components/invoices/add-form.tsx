'use client'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Button, Grid2 as Grid, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'

export function AddForm() {
  const form = useForm({ defaultValues: { name: '', number: '' } })

  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Grid container columns={12} spacing={2} sx={{ px: '24px' }}>
        <Grid size={6}>
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                required
                type="text"
                label="Name"
                placeholder="Enter your invoice name"
              />
            )}
          />
        </Grid>
        <Grid size={6}>
          <Controller
            name="number"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                required
                type="number"
                label="Number"
                placeholder="Enter your invoice number"
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<Add />}
            sx={{ textTransform: 'capitalize', py: '12px' }}
            disableElevation
            fullWidth
          >
            Add Invoice
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
