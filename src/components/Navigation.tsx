import React from 'react'
import NavItem from './NavItem'
import { NavItems, navItems } from '../utils/constants'

const Navigation: React.FC = () => {
    return (
        <nav className="fixed top-2 left-12">
            <ul className="flex space-x-4">
                {navItems.map(item => <NavItem key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation