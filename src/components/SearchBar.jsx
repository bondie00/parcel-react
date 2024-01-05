import React, { useState } from "react"
import Selection from "../components/Selection"

const SearchBar = ({data, directors, titles, type}) => {

  const [clickedSearch, setClickedSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState([])

  const clickHandler = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  function clickOutside() {
    setClickedSearch(false)
  }

  const useOutsideClick = (callback) => {
  const ref = React.useRef()
  React.useEffect(() => {
      const handleClick = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              callback()
          }
      }
  document.addEventListener('click', handleClick)
  return () => {
      document.removeEventListener('click', handleClick)
  }
  }, [ref])
  return ref
  }

  const ref = useOutsideClick(clickOutside)

  let menuArr = []
  data.forEach((node) => {
    if (type == "director") {
      node.DirectorArray.forEach((x) => {
        if (searchTerm.length > 0) {
            if (x.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(searchTerm.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
                menuArr.push(x)
        }
        else
            menuArr.push(x)
        })
    }
    if (type == "title") {
      node.TitleArray.forEach((x) => {
        if (searchTerm.length > 0) {
            if (x.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(searchTerm.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
                menuArr.push(x)
        }
        else
            menuArr.push(x)
        })
    }
  })
  menuArr = [...new Set(menuArr)]

  const searchBarClick = () => {
  setClickedSearch(true)
  }


  const select = (event) => {
    if (type == "director") {
      directors.push(event.target.getAttribute("name"))
      setSearchTerm("")
    }

    if (type == "title") {
      titles.push(event.target.getAttribute("name"))
      setSearchTerm("")
    } 
  }

  return (

<div> 

{type=="director" ? (
    <div>
    {directors.length > 0 ? (
          <div>
            {directors.map((d) => (
              <div>
              <Selection
                data={d}
                directors={directors}
                titles={titles}
                type={type}
              />
              </div>
            ))}
          </div>
        ) : null}
</div>
        ) : null}

{type=="title" ? (
    <div>
    {titles.length > 0 ? (
          <div>
            {titles.map((d) => (
              <div>
              <Selection
                data={d}
                directors={directors}
                titles={titles}
                type={type}
              />
              </div>
            ))}
          </div>
        ) : null}
</div>
        ) : null}

        <div className="searchbar" onClick={() => searchBarClick()}>
            <input type="text" placeholder="Search..." ref={ref} onChange={(e) => clickHandler(e)} value={searchTerm}/>
            {clickedSearch ? (
                <div className="dropdown-content">
                {menuArr.map((d) => (
                    <div className="searchresults" onClick={(e) => select(e)} name={d}>{d}</div>
                ))}
            </div>
            ) : null} 
        </div>
</div>

  )
}

export default SearchBar