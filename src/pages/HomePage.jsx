import { useEffect, useState } from 'react'
import {firstFetch} from '../services/apiFetch'
import { Link } from 'react-router-dom'
import s from './Start.module.css'


const Homepage = () => {
  const [films, setFilms] = useState(null)

  useEffect(() => { firstFetch().then(data => setFilms(data.results))},[])

  return (
    <>
    <h2 className={s.titleHomePage}>Trending   today</h2>
    <ul className={s.containerHomePage}>
        {films ? (films.map(({id,original_title},index) => {
          return <li key={id}>
            
            <Link  className={s.filmLink} to={"/movies/" + id}>
              <h3 className={s.titleFilmHomePage}>{`${index + 1}. ${original_title}`}</h3>
            </Link>
            <hr/>
          </li>
          
        })): null}
      
      </ul>
      </>
  )
}

export default Homepage