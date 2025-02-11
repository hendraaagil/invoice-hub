import { parseAsString, useQueryState } from 'nuqs'

export function useInvoiceFilters() {
  const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''))
  const [status, setStatus] = useQueryState(
    'status',
    parseAsString.withDefault('all'),
  )

  const getActiveStatus = () => (status === 'all' ? undefined : status)

  return {
    query,
    setQuery,
    status,
    setStatus,
    getActiveStatus,
  }
}
