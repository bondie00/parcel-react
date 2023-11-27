import FilmSlide from "./components/FilmSlide";
import React, { useState } from "react";
import data from "./components/filmdata.json";
import Pagination from "./components/pagination";


export function App() {

  const [filters, setFilters] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesperPage] = useState(25);
  const [toggled, setToggled] = useState([])

  const toggle = (active) => {
    setToggled(
      active === toggled ? null : active
    )
  }

  const filteredData = data.filter((node) =>
    filters.length > 0
    ? filters.some((filter) =>
      node.CountryArr.includes(filter)
      )
    : data
  )

const filterCountry = data.filter(node => {
  filters.length > 0
    ? filters.some((check) =>
      node.CountryArr.includes(check)
      )
    : data
})


  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilters([...filters, event.target.value])
    } else {
      setFilters(
        filters.filter((check) => check !== event.target.value)
      )
    }
  }

  const indexLast = currentPage * moviesperPage
  const indexFirst = indexLast - moviesperPage
  const indexCurrent = filteredData.slice(indexFirst, indexLast)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return <>
      <header>

      </header>
      <div class="main">

        <Pagination 
          moviesperPage={moviesperPage} 
          totalMovies={filteredData.length} 
          paginate={paginate}
          currentPage={currentPage}
        />

        <div class="workarea">
          <div class="filters">
            <div class="toggle-poll-year" onClick={() => toggle(1)}>
              Poll Year
            </div>
            <div class="content">
              some content
            </div>
          </div>
          <div class="films-container">
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

    <div>
      <input type="checkbox" id="united states" onChange={filterHandler} value="United States"/>
      <label for="united states">United States</label>
      <input type="checkbox" id="czechoslovakia" onChange={filterHandler} value="Czechoslovakia"/>
      <label for="czechoslovakia">Czechoslovakia</label>
    </div>

    </>
}
