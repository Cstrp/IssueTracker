import { DarkIcon, Logo } from '../icons'
import { useThemeStore } from '../../../data/store/useThemeStore.ts'
import { useEffect } from 'react'
import { LightIcon } from '../icons/LightIcon.tsx'

export const Header = () => {
  const { changeTheme, theme } = useThemeStore()
  const isLight = theme === 'light'

  useEffect(() => {
    document.body.classList.add(theme)
  }, [])

  return (
    <header className={'my-5'}>
      <div className={'container mx-auto flex items-center'}>
        <div className={'w-full max-w-[20px]'}>
          <Logo fill={isLight ? '#000000' : '#f7f6f3'} />
        </div>
        <div className={'flex-grow'} />
        <button className={'px-2 py-1 transition ease-in rounded hover:bg-violet-200/30'} onClick={changeTheme}>
          {isLight ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>
    </header>
  )
}
