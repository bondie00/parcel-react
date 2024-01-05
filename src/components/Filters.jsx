import React, { useState } from "react"
import CountryFilters from "../components/CountryFilters"
import YearFilters from "../components/YearFilters"
import SearchBar from "../components/SearchBar"

const Filters = ({data, countries, startYear, endYear, directors, titles, sortType}) => {

  const [clickedCOI, setClickedCOI] = useState(false) 
  const [clickedYears, setClickedYears] = useState(false)
  const [clickedDirector, setClickedDirector] = useState(false)
  const [clickedTitle, setClickedTitle] = useState(false)

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
  //sortType = e.target.value
  setSortSel(e.target.value)
}

  

  return (
    <div>

<div className="filterTitle"><b>Sort by</b></div>

<div>
<select className="sort" value={sortSel} onChange={(e) => handleSort(e)}>
        <option value="votes">Votes &#40;Highest to Lowest&#41;</option>
        <option value="title">Title &#40;A to Z&#41;</option>
</select>
</div>


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
    startYear={startYear}
    endYear={endYear}
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
  <SearchBar className="searchBar"
  data={data}
  directors={directors}
  titles={titles}
  type="title"
  />
) : null}
  </div>

  )
}



export default Filters