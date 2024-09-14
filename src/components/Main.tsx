import React, { useContext } from 'react'
import Home from './Home'
import { NavItems, navItems } from '../utils/constants'
import AboutMe from './AboutMe'
import StarWars from './StarWars'
import Contact from './Contact'
import { SWContext } from '../utils/context'

const Main: React.FC = () => {
  const context = useContext(SWContext);
  if (!context) {
    throw new Error('Main must be used within a SWContext Provider');
  }
  const { page } = context;

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