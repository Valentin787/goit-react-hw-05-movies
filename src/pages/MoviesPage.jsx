import { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { fetchKeyword } from '../services/apiFetch';
import MoviesPageList from '../components/moviesPageList/MoviesPageList';
import NotFoundPage from "../components/notFoundPage/NotFoundPage";
import s from './Start.module.css';



const MoviesPage = () => {
  const [form, setForm] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const history = useHistory();
  const location = useLocation();

  const inf = location.search.slice(7)

  const resetForm = () => setInputValue("")

  const onSubmit = (event) => {
    event.preventDefault()
    setForm(() => event.target.inputSearch.value) 
     if (!inputValue.trim() || searchResult === inputValue) return;
    
     history.push({ ...location, search: `?query=${inputValue}` })
    

    resetForm()
  }
  
  
  const onInputValue = (event) => setInputValue(() => event.target.value)

  console.log(inf);
  useEffect(() => {
    inf && (fetchKeyword(inf).then(data => setSearchResult(data.results)).catch(error => "error"))
    // if (inputValue.length !== 0 ||location.search.includes("query")) {
    //   return (fetchKeyword(inf).then(data => setSearchResult(data.results)).catch(error => "error"))
    // }
  }, [inf])


  return (
    <>
      <form onSubmit={onSubmit}>
        <input className={s.inputSearch}
          onChange={onInputValue}
          name="inputSearch"
          value={inputValue}
          placeholder="Search..."></input>
        <button
          className={s.btnSearch}
          type="submit">
          Search
        </button>
      </form>
      {searchResult.length > 1?(<MoviesPageList list={searchResult} />): (<NotFoundPage/>)}
      </>
  )
}

export default MoviesPage


