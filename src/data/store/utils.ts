import { StateCreator } from 'zustand'
import { ThemeStore } from '../types/themeStore.ts'

const isThemeStore = (obj: any): obj is ThemeStore => {
  return 'theme' in obj
}

export const updateLocalStorage =
  <T>(config: StateCreator<T, [], [['zustand/devtools', never], ...[]]>): StateCreator<T> =>
  (set, get, store) =>
    config(
      (next, ...args) => {
        if (isThemeStore(next)) {
          localStorage.setItem('theme', JSON.stringify(next.theme))
        }
        set(next, ...args)
      },
      get,
      store,
    )

export const getCurrentState = (key: string) => {
  try {
    const data = (localStorage.getItem(key) || '') as string

    return JSON.parse(data)
  } catch (error) {
    console.log(error)
  }
}
