import FilmSlide from "./components/FilmSlide"
import React, { useState } from "react"
import data from "./components/filmdata.json"
import Pagination from "./components/pagination"
import Filters from "./components/Filters"


export function App() {

  
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesperPage] = useState(25)
  const [countryFilters, setCountryFilters] = useState([])
  const [decadeFilters, setDecadeFilters] = useState([])
  const [directorFilters, setDirectorFilters] = useState([])
  const [apply, setApply] =useState(0)

  let nextState = {
    country: countryFilters,
    decade: decadeFilters,
    director: directorFilters,
    title: []
  }

  console.log("nextstate.director", nextState.director)

  console.log("director Filters", directorFilters)

  let filteredData = data.filter((node) => {
    let couFlag = false
    let decFlag = false
    let dirFlag = false
    let titFlag = false

      countryFilters.some((filter) => {
        if (node.CountryArr.includes(filter))
          couFlag = true
      })

      decadeFilters.some((filter) => {
        if (node.Year.substring(0,3) == filter)
          decFlag = true
      })

      directorFilters.some((filter) => {
        if (node.DirectorArray.includes(filter))
          dirFlag = true
      })

    if (countryFilters.length > 0 && decadeFilters.length > 0 && directorFilters.length > 0)
      return (couFlag && decFlag && dirFlag)
    if (countryFilters.length > 0 && decadeFilters.length > 0)
      return (couFlag && decFlag)
    if (countryFilters.length > 0 && directorFilters.length > 0)
      return (couFlag && dirFlag)
    if (decadeFilters.length > 0 && directorFilters.length > 0)
      return (decFlag && dirFlag)
    if (countryFilters.length > 0)
      return couFlag
    if (decadeFilters.length > 0)
      return decFlag
    if (directorFilters.length > 0)
      return dirFlag    
    return data
})

function applyClick() {
  setCountryFilters(nextState.country)
  setDecadeFilters(nextState.decade)
  setDirectorFilters(nextState.director)
  setApply(apply + 1)
}

const indexLast = currentPage * moviesperPage
const indexFirst = indexLast - moviesperPage
let indexCurrent = filteredData.slice(indexFirst, indexLast)

const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return <>
      <header>

      </header>
      <div className="main">

        <Pagination 
          moviesperPage={moviesperPage} 
          totalMovies={filteredData.length} 
          paginate={paginate}
          currentPage={currentPage}
        />

        <div className="workarea">
          <div className="filters">
          <Filters
          data={data}
          nextState={nextState}
          />
               <div type="button" onClick={() => applyClick()}>Apply Filters</div>
          </div>
          
          <div className="films-container">
          {indexCurrent.map((d) => (
            <FilmSlide 
            d={d}
            />
          ))}
          </div>
        </div>

        <Pagination 
          moviesperPage={moviesperPage} 
          totalMovies={filteredData.length} 
          paginate={paginate}
          currentPage={currentPage}
        />

      </div>
      <footer>
        
      </footer>
    </>
}
