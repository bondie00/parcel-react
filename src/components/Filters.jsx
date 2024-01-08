import React, { useState } from "react"
import CountryFilters from "../components/CountryFilters"
import YearFilters from "../components/YearFilters"
import SearchBar from "../components/SearchBar"

const Filters = ({data, countries, startYear, endYear, directors, titles, sortType}) => {

  const [clickedCOI, setClickedCOI] = useState(false) 
  const [clickedYears, setClickedYears] = useState(false)
  const [clickedDirector, setClickedDirector] = useState(false)
  const [clickedTitle, setClickedTitle] = useState(false)
  const [state, setState] = useState(0)

  const [sortSel, setSortSel] = useState("votes")
    
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

const handleSort = (e) => {
  sortType.push(e.target.value)
  sortType.splice(0, sortType.length - 1)
  setSortSel(e.target.value)
}


const clearFilters = (code) => {
  if (code == "countries")
    countries.splice(0, countries.length)
  if (code == "year") {
    startYear.splice(0, startYear.length)
    endYear.splice(0, endYear.length)
  }
  if (code == "director")
    directors.splice(0, directors.length)
  if (code == "title")
    titles.splice(0, titles.length)
  setState(state + 1)
}

  

  return (
    <div>

<div className="sortTitle"><b>Sort by</b></div>

<div className= "sortContainer">
<select className="sort" value={sortSel} onChange={(e) => handleSort(e)}>
        <option value="votes">Votes &#40;Highest to Lowest&#41;</option>
        <option value="title">Title &#40;A to Z&#41;</option>
        <option value="yearUp">Release Year &#40;Earliest to Latest&#41;</option>
        <option value="yearDown">Release Year &#40;Latest to Earliest&#41;</option>
</select>
</div>

<div className="withClear">
        <div className="filterTitle" onClick={toggleCountries}>{clickedCOI ? '\u25B2' : '\u25BC'}<b>Country of Origin</b></div>
        <div className="clear" onClick={() => clearFilters("countries")}>clear</div>
        </div>
              {clickedCOI ? (
              <div className="expandFilters">
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

<div className="withClear">
  <div className="filterTitle" onClick={toggleYears}>{clickedYears ? '\u25B2' : '\u25BC'}<b>Release Year</b></div>
  <div className="clear" onClick={() => clearFilters("year")}>clear</div>
</div>

{clickedYears ? (
  <div className="expandFilters">
    <YearFilters
    startYear={startYear}
    endYear={endYear}
    />
  </div>

) : null}

<div className="withClear">
  <div className="filterTitle" onClick={toggleDirector}>{clickedDirector ? '\u25B2' : '\u25BC'}<b>Director</b></div>
  <div className="clear" onClick={() => clearFilters("director")}>clear</div>
</div>

{clickedDirector ? (
  <div className="expandFilters">
  <SearchBar className="searchBar"
  data={data}
  directors={directors}
  titles={titles}
  type="director"
  />
  </div>
) : null}

<div className="withClear">
  <div className="filterTitle" onClick={toggleTitle}>{clickedTitle ? '\u25B2' : '\u25BC'}<b>Title</b></div>
  <div className="clear" onClick={() => clearFilters("title")}>clear</div>
</div>
{clickedTitle ? (
  <div className="expandFilters">
  <SearchBar className="searchBar"
  data={data}
  directors={directors}
  titles={titles}
  type="title"
  />
  </div>
) : null}
  </div>

  )
}



export default Filters