const BASE_URL = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=928c2f5edafa2935d4eead846b7dfe7d";
const trendingFetch = "/trending/movie/week";
const searchId = "movie/"
const cast = "/credits"
const reviews = "/reviews"
const search = "search/"

export async function firstFetch() {
  const response = await fetch(BASE_URL + trendingFetch + apiKey)
  return response.ok?await response.json():Promise.reject(new Error('Not found'))
  
}

export async function fetchId(id) {
  const response = await fetch(`${BASE_URL}${ searchId }${id}${apiKey}`)
  return response.ok?await response.json():Promise.reject(new Error('Not found'))
  
}

export async function fetchCast(id) {
  const response = await fetch(`${BASE_URL}${ searchId }${id}${cast}${apiKey}`)
  return response.ok?await response.json():Promise.reject(new Error('Not found'))
  
}

export async function fetchReviews(id) {
  const response = await fetch(`${BASE_URL}${ searchId }${id}${reviews}${apiKey}`)
  return response.ok?await response.json():Promise.reject(new Error('Not found'))
  
}

export async function fetchKeyword(keyword) {
  const response = await fetch(`${BASE_URL}${search}${searchId}${apiKey}&query=${keyword}`)
  return response.ok?await response.json():Promise.reject(new Error('Not found'))
  
}


