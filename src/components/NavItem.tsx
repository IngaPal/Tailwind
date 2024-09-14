import React, { useContext } from 'react'
import { SWContext } from '../utils/context'
import { NavItems } from '../utils/constants'

interface NavItemProps {
  itemTitle: NavItems;
}

const NavItem: React.FC<NavItemProps> = ({ itemTitle }) => {
  const context = useContext(SWContext);
  if (!context) {
    throw new Error('NavItem must be used within a SWContext Provider');
  }
  const { changePage } = context;

  return (
    <li onClick={() => changePage(itemTitle)} className="bg-red-color border-black border-2 rounded-md cursor-pointer hover:text-white hover:bg-red-500 px-3 py-2">{itemTitle}</li>
  )
}

export default NavItem