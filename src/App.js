import FilmSlide from "./components/FilmSlide"
import React, { useState } from "react"
import data from "./components/filmdata.json"
import Pagination from "./components/pagination"
import CountryFilters from "./components/CountryFilters"
import SearchBar from "./components/SearchBar"
import YearFilters from "./components/YearFilters"


export function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesperPage] = useState(25)
  const [countryFilters, setCountryFilters] = useState([])
  const [yearFilters, setYearFilters] = useState([])
  const [directorFilters, setDirectorFilters] = useState([])
  const [titleFilters, setTitleFilters] = useState([])
  const [clickedCOI, setClickedCOI] = useState(false)
  const [clickedYears, setClickedYears] = useState(false)
  const [clickedDirector, setClickedDirector] = useState(false)
  const [clickedTitle, setClickedTitle] = useState(false)
  const [apply, setApply] =useState(0)
  const [startYear, setStartYear] = useState("1880")
  const [endYear, setEndYear] = useState("2023")

  let countries = countryFilters
  let directors = directorFilters
  let titles = titleFilters

  let nextState = {
    country: countryFilters,
    years: yearFilters,
    DirectorArray: directorFilters,
    TitleArray: titleFilters
  }

  console.log(countryFilters)

  let filteredData = data.filter((node) => {
    let couFlag = false
    let decFlag = false
    let dirFlag = false
    let titFlag = false

    countryFilters.some((filter) => {
      if (node.CountryArray.includes(filter))
        couFlag = true
    })
    if (node.Year >= yearFilters[0] && node.Year <= yearFilters[1])
      decFlag = true
    directorFilters.some((filter) => {
      if (node.DirectorArray.includes(filter))
        dirFlag = true
    })
    titleFilters.some((filter) => {
      if (node.TitleArray.includes(filter))
        titFlag = true
    })

    if (countryFilters.length > 0 && yearFilters.length > 0 && directorFilters.length > 0 && titleFilters.length > 0)
      return (couFlag && decFlag && dirFlag && titFlag)
    if (countryFilters.length > 0 && yearFilters.length > 0 && titleFilters.length > 0)
      return (couFlag && decFlag && titFlag)
    if (countryFilters.length > 0 && directorFilters.length > 0 && titleFilters.length > 0)
      return (couFlag && dirFlag && titFlag)
    if (yearFilters.length > 0 && directorFilters.length > 0 && titleFilters.length > 0)
      return (decFlag && dirFlag && titFlag)
    if (countryFilters.length > 0 && yearFilters.length > 0)
      return (couFlag && decFlag)
      if (countryFilters.length > 0 && directorFilters.length > 0)
      return (couFlag && dirFlag)
      if (countryFilters.length > 0 && titleFilters.length > 0)
      return (couFlag && titFlag)
      if (yearFilters.length > 0 && directorFilters.length > 0)
      return (decFlag && dirFlag)
      if (yearFilters.length > 0 && titleFilters.length > 0)
      return (decFlag && titFlag)
      if (titleFilters.length > 0 && directorFilters.length > 0)
      return (titFlag && titFlag)
    if (countryFilters.length > 0)
      return couFlag
    if (yearFilters.length > 0)
      return decFlag
    if (directorFilters.length > 0)
      return dirFlag   
    if (titleFilters.length > 0)
      return titFlag 
    return data
})

const applyClick = () => {
  nextState.country = countries
  nextState.years=[]
  if (startYear == "")
    nextState.years.push("1880")
  else
    nextState.years.push(startYear)
  if (endYear == "")
    nextState.years.push("2023")
  else
    nextState.years.push(endYear)
  nextState.DirectorArray = directors
  nextState.TitleArray = titles
  setCountryFilters(nextState.country)
  setYearFilters(nextState.years)
  setDirectorFilters(nextState.DirectorArray)
  setTitleFilters(nextState.TitleArray)
  setCurrentPage(1)
  setApply(apply + 1)
}

const toggleCountries = () => {
  (clickedCOI === true ? setClickedCOI(false) : setClickedCOI(true))
}

const toggleYears = () => {
  (clickedYears === true ? setClickedYears(false) : setClickedYears(true))
}

const toggleDirector = () => {
  (clickedDirector === true ? setClickedDirector(false) : setClickedDirector(true))
}

const toggleTitle = () => {
  (clickedTitle === true ? setClickedTitle(false) : setClickedTitle(true))
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
            <div className="filterTitle" onClick={toggleCountries}>{clickedCOI ? '\u25B2' : '\u25BC'}<b>Country of Origin</b></div>
              {clickedCOI ? (
              <div>
                <CountryFilters
                countries={countries}
                continent="North America"
                code="NorthAmerica"
                />

                <CountryFilters
                countries={countries}
                continent="South America"
                code="SouthAmerica"
                />

                <CountryFilters
                countries={countries}
                continent="Europe"
                code="Europe"
                />

                <CountryFilters
                countries={countries}
                continent="Asia"
                code="Asia"
                />

                <CountryFilters
                countries={countries}
                continent="Africa"
                code="Africa"
                />

              <CountryFilters
                countries={countries}
                continent="Oceania"
                code="Oceania"
                />
              </div>
            ) : null}

            <div className="filterTitle" onClick={toggleYears}>{clickedYears ? '\u25B2' : '\u25BC'}<b>Release Year</b></div>

            {clickedYears ? (
              <div>
                <YearFilters
                setStartYear={setStartYear}
                setEndYear={setEndYear}
                />
              </div>

            ) : null}
            


            <div className="filterTitle" onClick={toggleDirector}>{clickedDirector ? '\u25B2' : '\u25BC'}<b>Director</b></div>
            {clickedDirector ? (
              <SearchBar className="searchBar"
              data={data}
              directors={directors}
              titles={titles}
              type="director"
              />
            ) : null}

          
            <div className="filterTitle" onClick={toggleTitle}>{clickedTitle ? '\u25B2' : '\u25BC'}<b>Title</b></div>
            {clickedTitle ? (
              <SearchBar
              data={data}
              directors={directors}
              titles={titles}
              type="title"
              />
            ) : null}
              
            

            <div className="apply">
            <div type="button" id="applybutton" className="pageitem"  onClick={() => applyClick()}>Apply Filters</div>
            </div>
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
