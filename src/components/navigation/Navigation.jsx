import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
    <nav className={s.container}>
      <NavLink
        to="/"
        className={s.link}
        activeClassName={s.activeLink}
        exact>
        HomePage
      </NavLink>
      <NavLink
        to="/movies"
        className={s.link}
        activeClassName={s.activeLink} >
        MoviesPage
      </NavLink>
      
      
      </nav>
      <hr/>
      </>
  )
  
}

export default Navigation