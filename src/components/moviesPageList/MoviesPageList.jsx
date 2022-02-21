
import { Link, useLocation } from 'react-router-dom';
import defaultImg from './png-clipart-drawing-cartoon-others-text-photography-thumbnail.png';

import PropTypes from 'prop-types';
import s from './MoviesPageList.module.css'


const MoviesPageList = ({ list }) => {
  const location = useLocation();
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w200';

  return (
    <ul>
      {list.length > 0 ? (list.map(({id,original_title,poster_path ,release_date},index) => {
        return <li key={id}>
          <Link className={s.linkFilm }to={{ 
            pathname: "/movies/" + id,
            state:{from:location}
          }}>
            
             <h2 className={s.titleFilm}>{index+ 1 +". " + original_title}</h2>
          </Link>  
          <img className={s.img }width="120" alt={original_title }src={poster_path ? (BASE_URL_IMG + poster_path):defaultImg} />
            
            <p className={s.date}>Release_date: {release_date}</p>
            <hr/>
        </li>
        
      })) : (<><h2 className={s.titleNotFound}>Nothing found for this query ¯\_(ツ)_/¯</h2></>)}
    </ul>
  )
}
MoviesPageList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      original_title:PropTypes.string.isRequired,
      poster_path:PropTypes.string,
      release_date:PropTypes.string.isRequired
    })
  )
}

export default MoviesPageList

