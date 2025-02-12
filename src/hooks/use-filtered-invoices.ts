import { useState, useEffect } from 'react'
import { Invoice } from '@/lib/types/invoice'

export function useFilteredInvoices(
  invoices: Invoice[],
  query?: string,
  status?: string,
) {
  const [isLoading, setIsLoading] = useState(true)
  const [filteredInvoices, setFilteredInvoices] = useState(invoices)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const filtered = invoices.filter((invoice) => {
        const matchesQuery =
          !query?.trim() ||
          invoice.name.toLowerCase().includes(query.toLowerCase().trim()) ||
          invoice.id.toLowerCase().includes(query.toLowerCase().trim())

        const matchesStatus =
          !status || status === 'all' || invoice.status === status

        return matchesQuery && matchesStatus
      })
      setFilteredInvoices(filtered)
      setIsLoading(false)
    }, 300) // Fake delay

    return () => clearTimeout(timer)
  }, [query, status, invoices])

  return { filteredInvoices, isLoading }
}
