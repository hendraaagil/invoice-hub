'use client'

import { useInvoiceStore } from '@/stores/invoice'

export default function ListPage() {
  const invoices = useInvoiceStore((state) => state.invoices)

  console.log(invoices)
  return <div>List</div>
}
