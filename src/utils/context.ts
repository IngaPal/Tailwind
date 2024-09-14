import { createContext } from 'react'
import { SWContextType } from '../types'

export const SWContext = createContext<SWContextType>({
    page: 'Home',
    changePage: () => {}
})