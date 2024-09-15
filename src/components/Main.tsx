import { useContext } from 'react'
import Home from './Home'
import { NavItems } from '../utils/constants'
import AboutMe from './AboutMe'
import StarWars from './StarWars'
import Contact from './Contact'
import { SWContext } from '../utils/context'

const Main = () => {
  const { page } = useContext(SWContext);

  switch (page) {
    case NavItems.AboutMe:
      return <AboutMe />
    case NavItems.StarWars:
      return <StarWars />
    case NavItems.Contact:
      return <Contact />
    default:
      return <Home />
  }
}

export default Main