import FilmSlide from "./components/FilmSlide"
import React, { useState } from "react"
import data from "./components/filmdata.json"
import Pagination from "./components/pagination"
import Filters from "./components/Filters"
import Header from "./components/Header"


export function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesperPage] = useState(20)
  const [poll, setPoll] = useState("")
  const [sort, setSort] = useState(["votes"])
  const [countryFilters, setCountryFilters] = useState([])
  const [yearFilters, setYearFilters] = useState([])
  const [directorFilters, setDirectorFilters] = useState([])
  const [titleFilters, setTitleFilters] = useState([])
  const [prevStartYear, setPrevStartYear] = useState([])
  const [prevEndYear, setPrevEndYear] = useState([])


  const pollOptions = ["all", "2022votes", "2012votes", "2002votes", "1992votes", "1982votes", "1972votes", "1962votes", "1952votes"]
  const pollText = ["All Films", "2022 Poll", "2012 Poll", "2002 Poll", "1992 Poll", "1982 Poll", "1972 Poll", "1962 Poll", "1952 Poll"]

  let nextState = {
    country: countryFilters,
    startYear: prevStartYear,
    endYear: prevEndYear,
    DirectorArray: directorFilters,
    TitleArray: titleFilters,
    sortType: sort
  }

  let yearData = data.filter((node) => {
    if (poll == "")
      return true
    else if (node[poll] > 0)
      return true
  })


  let filteredData = yearData.filter((node) => {
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

  if (sort == "votes") {
    filteredData.sort((a,b) => {
      if (poll=="") {
        let totalVotesA = parseInt(a["2022votes"])+parseInt(a["2012votes"])+parseInt(a["2002votes"])+parseInt(a["1992votes"])+parseInt(a["1982votes"])+parseInt(a["1972votes"])+parseInt(a["1962votes"])+parseInt(a["1952votes"])
        let totalVotesB = parseInt(b["2022votes"])+parseInt(b["2012votes"])+parseInt(b["2002votes"])+parseInt(b["1992votes"])+parseInt(b["1982votes"])+parseInt(b["1972votes"])+parseInt(b["1962votes"])+parseInt(b["1952votes"])
        return totalVotesB - totalVotesA
      }
      return b[poll] - a[poll]
    })
  }

  if (sort == "title") {
    filteredData.sort((a,b) => {
      return b["FilmTitle"] - a["FilmTitle"]
    })
  }

  if (sort == "yearUp") {
    filteredData.sort((a,b) => {
      return a["Year"] - b["Year"]
    })
  }
  
  if (sort == "yearDown") {
    filteredData.sort((a,b) => {
      return b["Year"] - a["Year"]
    })
  }

  const applyClick = () => {
    let years = []
    if (nextState.startYear == null || nextState.startYear == "")
      years.push("1880")
    else
      years.push(nextState.startYear[0])
    if (nextState.endYear == null || nextState.endYear == "")
      years.push("2023")
    else
      years.push(nextState.endYear[0])

    setYearFilters(years)
    setCountryFilters(nextState.country)
    setDirectorFilters(nextState.DirectorArray)
    setTitleFilters(nextState.TitleArray)
    setSort(nextState.sortType)
    setCurrentPage(1)
    setPrevStartYear(nextState.startYear)
    setPrevEndYear(nextState.endYear)
  }

  const applyPoll = (year) => {
    if (year == "all") {
      setPoll("")
      setCurrentPage(1)
    }
    else {
      setPoll(year)
      setCurrentPage(1)
    }
  }

  const indexLast = currentPage * moviesperPage
  const indexFirst = indexLast - moviesperPage
  let indexCurrent = filteredData.slice(indexFirst, indexLast)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return <>

        <Header/>

        <div className="main">

        <Pagination 
          moviesperPage={moviesperPage} 
          totalMovies={filteredData.length} 
          paginate={paginate}
          currentPage={currentPage}
        />

        <div className="results"><span className="resultsNums">{indexFirst + 1}</span> - <span className="resultsNums">{indexLast > filteredData.length ? filteredData.length : indexLast}</span> out of <span className="resultsNums">{filteredData.length}</span> films in {poll=="" ? "All Sight and Sound Polls" : "the " + poll.substring(0,4) + " Sight and Sound poll"}</div>

        <div className="workarea">
          <div className="leftpanel">
            <div className="pollscontainer">
              {pollOptions.map((x, i) => (
                <div type="button" className="pollbutton" id={(poll == {x} ? "selected" : null)} onClick={() => applyPoll(x)}>{pollText[i]}</div>
                ))
              }
            </div>

            <div className="filters">
              <div className="applytop">
                <div type="button" className="pollbutton"  onClick={() => applyClick()}>Apply</div>
              </div>

              <Filters 
              data={data}
              countries={nextState.country}
              startYear={nextState.startYear}
              endYear={nextState.endYear}
              directors={nextState.DirectorArray}
              titles={nextState.TitleArray}
              sortType={nextState.sortType}
              />

              <div className="applybottom">
                <div type="button" className="pollbutton"  onClick={() => applyClick()}>Apply</div>
              </div>
            </div>
          </div>
          
          <div className="films-container">
            {indexCurrent.length > 0 ? (
              indexCurrent.map((d) => (
                <FilmSlide 
                d={d}
                poll={poll}
                />
                ))
            ) : 
            <div className="movie">No results</div>}



          </div>
        </div>

        <Pagination 
          moviesperPage={moviesperPage} 
          totalMovies={filteredData.length} 
          paginate={paginate}
          currentPage={currentPage}
        />

      </div>
    </>
}
