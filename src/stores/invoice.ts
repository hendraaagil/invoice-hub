import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Invoice } from '@/lib/types/invoice'

interface InvoiceState {
  invoices: Invoice[]
  addInvoice: (invoice: Invoice) => void
  editInvoice: (id: string, updatedInvoice: Partial<Invoice>) => void
  deleteInvoice: (id: string) => void
}

export const useInvoiceStore = create<InvoiceState>()(
  persist(
    (set) => ({
      invoices: [],
      addInvoice: (invoice) =>
        set((state) => ({ invoices: [...state.invoices, invoice] })),
      editInvoice: (id, updatedInvoice) =>
        set((state) => ({
          invoices: state.invoices.map((invoice) =>
            invoice.id === id ? { ...invoice, ...updatedInvoice } : invoice,
          ),
        })),
      deleteInvoice: (id) =>
        set((state) => ({
          invoices: state.invoices.filter((invoice) => invoice.id !== id),
        })),
    }),
    {
      name: 'invoice-storage',
    },
  ),
)
