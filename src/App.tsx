import { Description, Header } from './view/components'

export const App = () => {
  return (
    <div className={'min-h-screen flex flex-col'}>
      <Header />

      <div className={'container mx-auto'}>
        <Description />
      </div>
    </div>
  )
}
