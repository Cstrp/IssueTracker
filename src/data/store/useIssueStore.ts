import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import { getCurrentState, updateLocalStorage } from './utils.ts'
import { Issue, IssueStore } from '../types'

const state: StateCreator<IssueStore, [], [['zustand/devtools', never], ...[]]> = devtools((set, get) => ({
  issues: getCurrentState('issues'),
  savedIssues: [],
  saveIssues: (issues: Issue[]) => set({ issues: issues }),
  removeIssue: (issue: Issue) => set({ savedIssues: get().savedIssues.filter((i) => i.id !== issue.id) }),
  getIssue: (id) =>
    get().issues.filter((i) => {
      return i.id === id
    }),
}))

export const useThemeStore = create<IssueStore>(updateLocalStorage(state))
