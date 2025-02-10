import { z } from 'zod'
import { Status } from '../types/invoice'

export const invoiceSchema = z.object({
  id: z.string().nonempty('Number is required'),
  name: z.string().nonempty('Name is required'),
  amount: z.string().nonempty('Amount is required'),
  dueDate: z
    .date()
    .nullable()
    .refine((date) => date !== null, {
      message: 'Due date is required',
    }),
  status: z.nativeEnum(Status),
})
