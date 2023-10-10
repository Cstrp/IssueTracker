import { StateCreator } from 'zustand'
import { Issue, IssueStore, ThemeStore } from '../types'

const isThemeStore = (obj: any): obj is ThemeStore => {
  return 'theme' in obj
}

const isIssueStore = (obj: any): obj is IssueStore => {
  return 'issues' in obj
}

export const updateLocalStorage =
  <T>(config: StateCreator<T, [], [['zustand/devtools', never], ...[]]>): StateCreator<T> =>
  (set, get, store) =>
    config(
      (next, ...args) => {
        if (isThemeStore(next)) {
          localStorage.setItem('theme', JSON.stringify(next.theme))
        }

        if (isIssueStore(next)) {
          localStorage.setItem('issues', JSON.stringify(next.issues))
        }

        set(next, ...args)
      },
      get,
      store,
    )

export const getCurrentState = (key: string) => {
  try {
    const data = (localStorage.getItem(key) || '') as string | Issue[]

    if (typeof data === 'string') return JSON.parse(data)

    return JSON.parse(localStorage.getItem(key) || '')
  } catch (error) {
    localStorage.setItem('issues', '[]')
    console.log(error)
  }
}
