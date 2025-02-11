import { format } from 'date-fns'

export const formatDate = (date: Date) => {
  return format(date, 'PP')
}

export const formatCurrency = (amount: string) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(parseInt(amount))
}
