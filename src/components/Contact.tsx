import { useEffect, useState } from 'react'
import { base_url, period_month } from '../utils/constants'

const Contact = () => {
  const [planets, setPlanets] = useState<string[]>(['wait...']);

  useEffect(() => {
    const storedPlanets = localStorage.getItem('planets');
    if (storedPlanets) {
      const parsedPlanets = JSON.parse(storedPlanets);
      if ((Date.now() - parsedPlanets.time) < period_month) {
        setPlanets(parsedPlanets.payload);
        return;
      }
    }
    const fillPlanets = async () => {
      try {
        const response = await fetch(`${base_url}/v1/planets`);
        const data = await response.json();
        const planetNames = data.map((item: { name: string }) => item.name);
        setPlanets(planetNames);
        localStorage.setItem('planets', JSON.stringify({
          payload: planetNames,
          time: Date.now()
        }));
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };
    fillPlanets();
  }, [])
  return (
    <form className='bg-gray-100 p-6 rounded-lg'>
      <label className="block mb-4">
        First Name
        <input type="text" name="firstname" placeholder="Your name.." className="w-full mt-1 p-2 border rounded" />
      </label>

      <label className="block mb-4">
        Last Name
        <input type="text" name="lastname" placeholder="Your last name.." className="w-full mt-1 p-2 border rounded" />
      </label>

      <label className="block mb-4">
        Planet
        <select name="planet" className="w-full mt-1 p-2 border rounded">
          {planets.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label className="block mb-4">
        Subject
        <textarea name="subject" placeholder="Write something.." className="w-full mt-1 p-2 border rounded h-48"></textarea>
      </label>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  )
}

export default Contact