import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { NavItems } from './utils/constants'
import { SWContext } from './utils/context'
import { SWContextType } from './types'

const App = () => {
  const [page, setPage] = useState<NavItems>(NavItems.Home)

  const contextValue: SWContextType = {
    page,
    changePage: setPage
  }

  return (
    <div>
      <SWContext.Provider value={contextValue}>
        <Header />
        <Main />
      </SWContext.Provider>
      <Footer />
    </div>
  )
}

export default App
