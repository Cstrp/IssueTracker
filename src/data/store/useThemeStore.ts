import { create, StateCreator } from 'zustand'
import { getCurrentState, updateLocalStorage } from './utils.ts'
import { ThemeStore } from '../types/themeStore.ts'
import { devtools } from 'zustand/middleware'

const state: StateCreator<ThemeStore, [], [['zustand/devtools', never], ...[]]> = devtools((set, get) => ({
  theme: getCurrentState('theme'),
  changeTheme: () => {
    const newTheme = get().theme === 'light' ? 'dark' : 'light'

    document.body.classList.remove(get().theme)
    document.body.classList.add(newTheme)

    set({ theme: newTheme })
  },
}))

export const useThemeStore = create<ThemeStore>(updateLocalStorage(state))
