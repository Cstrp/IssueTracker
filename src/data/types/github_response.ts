import { Issue } from './issue.ts'

export interface GithubResponse {
  total_count: number
  items: Issue[]
}
