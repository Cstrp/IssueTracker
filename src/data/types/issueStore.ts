import { Issue } from './issue.ts'

export interface IssueStore {
  issues: Issue[]
  savedIssues: Issue[]
  saveIssue: (issue: Issue) => void
  getIssue: (id: number) => Issue
  removeIssue: (issue: Issue) => void
}
