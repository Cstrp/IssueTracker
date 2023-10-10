import { User } from './user.ts'
import { Label } from './label.ts'

export interface Issue {
  id: number
  title: string
  body: string
  html_url: string
  user: User
  labels: Label[]
  created_at: Date
}
