export enum Status {
  Paid = 'paid',
  Pending = 'pending',
  Unpaid = 'unpaid',
}

export type Invoice = {
  id: string
  name: string
  amount: string
  dueDate: Date | null
  status: Status
}
