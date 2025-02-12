import { format } from 'date-fns'

export const formatDate = (date: Date) => {
  return format(date, 'PP')
}

export const formatCurrency = (amount: string, hasPrefix?: boolean) => {
  if (!amount) return ''

  return new Intl.NumberFormat('id-ID', {
    style: hasPrefix ? 'currency' : 'decimal',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(parseInt(amount))
}
