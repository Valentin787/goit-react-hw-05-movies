import { lazy, Suspense, useEffect, useState } from 'react'
import { useParams, useRouteMatch,useLocation,useHistory } from 'react-router-dom'
import { fetchId,fetchCast,fetchReviews } from '../services/apiFetch'
import { Link, Route } from 'react-router-dom'
import s from './Start.module.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from  'react-loader-spinner'

const Cast = lazy(() => import('../components/cast/Cast'))
const Reviews = lazy(() => import('../components/reviews/Reviews'))



const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const {movieId} = useParams()
  const [film, setFilm] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null)

  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
  const {url} = useRouteMatch()


  useEffect(() => {
    fetchId(movieId).then(data => setFilm(data)).catch(error => "error")
  },[movieId])
  
  useEffect(() => {
    fetchCast(movieId).then(data => setCast(data.cast)).catch(error => "error")
  }, [movieId])

   useEffect(() => {
    fetchReviews(movieId).then(data => setReviews(data.results)).catch(error => "error")
  }, [movieId])
  
  
   const handleGoBack = () => {
    // history.push(location.state.from);
    // history.goBack();
    // history.go(-3);
     
     
     history.push(location?.state?.from ?? '/')
    
  
   };
  

  
  return film? (
    <>
    <button className={s.buttonBack} type="button" onClick={handleGoBack}>
      &#8656; GoBack
      </button>

    <div className={s.filmWrap}>
        <img className={s.filmImg} width="250" src={BASE_URL_IMG + film.poster_path} alt={film.original_title}/>
      <ul className={s.filmOverview}>
          <li><h2 className={s.filmTitleOverview}>{film.original_title}</h2></li>
          <hr/>
          <li>
          <p className={s.scoreTitle}>User Score:{' '}
        <span>{Math.round((film.vote_average / 10) * 100)}%</span>
          </p>
          </li>
          <hr/>
          <li><h3 className={s.overviewTitle}>Overview</h3></li>
          
          <li className={s.overviewText}>{film.overview}</li>
          <hr/>
          <li><h4 className={s.genresTitle}>Genres</h4></li>
          
          {film.genres.map(({id,name},index) => {
            return <li className={s.textGenres }key={id}>
              {` - ${name}`}
            </li>
          })}
          <hr/>
        </ul>
      </div > 
      <h4 className={s.aditionalTitle}>Aditional information</h4>
      <div className={s.aditionalWrap}>
        
        <Link className={s.castTitle} to={{
          pathname: `${url}/cast`,
          state: { from: location?.state?.from ?? '/' },
        }}>Cast</Link>
        <Link className={s.reviewsTitle} to={{
          pathname: `${url}/reviews`,
          state: { from: location?.state?.from ?? '/' },
        }}>Reviews</Link>
        <Suspense fallback={<Rings
        height="250"
        width="250"
        color='rgb(44, 172, 97)'
        ariaLabel='loading'
      />}>
        <Route path={url + "/cast"}>
          <Cast cast={cast}/>
        </Route>
        <Route path={url + "/reviews"}>
          <Reviews reviews={reviews}/>
         </Route>
        </Suspense>
      </div>
      </>
  ): null
}

export default MovieDetailsPage