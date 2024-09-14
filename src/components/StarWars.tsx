import React from 'react'
import { starWarsInfo } from '../utils/constants'

const StarWars: React.FC = () => {
  return (
    <div className="text-3xl leading-loose text-justify tracking-widest">{starWarsInfo}</div>
  )
}

export default StarWars