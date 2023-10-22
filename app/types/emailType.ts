export default interface EmailType {
  to: string
  from: string
  subject: string
  date: string
  folder: string
  schedule: number
  read: boolean | string
  description: string
}