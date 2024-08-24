import { parseISO, format } from 'date-fns'

export default function parseDate(date: string): string {
  return format(parseISO(date), 'LLLL	d, yyyy')
}