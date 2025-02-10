export enum Status {
  Paid = 'paid',
  Pending = 'pending',
  Unpaid = 'unpaid',
}

export type Invoice = {
  name: string
  number: string
  dueDate: string | null
  amount: string
  status: Status | string
}
