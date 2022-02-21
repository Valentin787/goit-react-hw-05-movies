import PropTypes from "prop-types";
import defaultImage from './278-2785133_bugs-bunny-png-characters-cartoon-bugs-bunny-looney.png'
import s from'./Cast.module.css'

const Cast = ({cast}) => {
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w200';
  
  return (
    <ul className={s.container}>
      {cast && cast.map(({cast_id,profile_path,original_name,character}) => {
      
        return <li className={s.imgWrap} key={cast_id}>
         <div>
            <img className={s.img} width="150"src={profile_path ?(BASE_URL_IMG + profile_path): defaultImage} alt={original_name}/>
          </div>
          <div>
            <p className={s.nameActor}>{original_name}</p>
            <p className={s.characterText}><span className={s.nameActor}>Character: </span>{character} </p>
          </div>
          <hr/>
      </li>
      })}

    </ul>
  )
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path:PropTypes.string,
      original_name:PropTypes.string.isRequired,
      character:PropTypes.string.isRequired,
    })
  )
}

export default Cast