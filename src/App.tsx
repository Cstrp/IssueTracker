import { Description, Header, SearchPanel } from './view/components'

export const App = () => {
  return (
    <div className={'min-h-screen flex flex-col'}>
      <Header />

      <div className={'container mx-auto'}>
        <Description />
        <SearchPanel />
      </div>
    </div>
  )
}
