import React, { useEffect, useState } from 'react'
import { base_url, period_month } from '../utils/constants'

interface Hero {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
}

const AboutMe: React.FC = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  useEffect(() => {
    const storedHero = localStorage.getItem('hero');
    if (storedHero) {
      const parsedHero = JSON.parse(storedHero);
      if ((Date.now() - parsedHero.time) < period_month) {
        setHero(parsedHero.payload);
        return;
      }
    }

    fetch(`${base_url}/v1/peoples/1`)
      .then(response => response.json())
      .then(data => {
        const info: Hero = {
          name: data.name,
          gender: data.gender,
          birth_year: data.birth_year,
          height: data.height,
          mass: data.mass,
          hair_color: data.hair_color,
          skin_color: data.skin_color,
          eye_color: data.eye_color
        }
        setHero(info);
        localStorage.setItem('hero', JSON.stringify({
          time: Date.now(),
          payload: info
        }))
      })
  }, [])

  return (
    <>
      {hero &&
        <div className='text-2xl leading-loose text-justify ml-5'>
          {Object.entries(hero).map(([key, value]) => (
            <p key={key} className="mb-4">
              <span className='text-4xl capitalize mr-2'>{key.replace('_', ' ')}:</span>
              {value}
            </p>
          ))}
        </div>
      }
    </>
  )
}

export default AboutMe