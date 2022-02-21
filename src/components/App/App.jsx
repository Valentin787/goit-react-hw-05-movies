import { lazy,Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import Navigation from 'components/navigation/Navigation';
import s from './App.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from  'react-loader-spinner'
const Homepage = lazy(() => import('../../pages/HomePage'))
const MoviesPage = lazy(()=> import('../../pages/MoviesPage'))
const MovieDetailsPage= lazy(()=> import('../../pages/MovieDetailsPage'))

const App = () => {
  
   return (
      <div className={s.app}>

       <Navigation />
       <Suspense fallback={<Rings
        height="250"
        width="250"
        color='rgb(44, 172, 97)'
        ariaLabel='loading'
      />}>
       <Switch>
       <Route path="/" exact>
        <Homepage/>
         </Route>
         
         <Route path="/movies/:movieId">
           <MovieDetailsPage/>
         </Route>

         <Route path="/movies">
           <MoviesPage/>
         </Route>

         <Redirect to="/"/>
         </Switch>
         </Suspense>
      </div>
    );
}
export default App;
