import { createContext } from 'react'
import { SWContextType } from '../types'
import { NavItems } from './constants'

export const SWContext = createContext<SWContextType>({
    page: NavItems.Home,
    changePage: () => {}
})