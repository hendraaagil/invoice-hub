export const generateInvoiceNumber = () => {
  const prefix = 'INV'
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const now = Date.now().toString().slice(-4)
  return `${prefix}${year}${month}${now}`
}
