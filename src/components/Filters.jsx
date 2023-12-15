import React, { useState } from "react";

const Filters = ({data, nextState}) => {

    const [clickedCountries, setClickedCountries] = useState(false)
    const [clickedDirectorsSearch, setClickedDirectorsSearch] = useState(false)
    const [directorSearchTerm, setDirectorSearchTerm] = useState([])
    const [selectedDirectors, setSelectedDirectors] = useState([])
    const [showSelectedDirectors, setShowSelectedDirectors] = useState(false)
    const [apply, setApply] = useState(0)

    const toggleCountries = () => {
      if (clickedCountries === true) {
        return setClickedCountries(false)
      }
      setClickedCountries(true)
    }

    const countryHandler = (event) => {
        if (event.target.checked) {
            nextState.country.push(event.target.value)
        } 
        else {
            const index = nextState.country.indexOf(event.target.value)
            nextState.country.splice(index, 1)
            
        }} 

    const decadeHandler = (event) => {
        if (event.target.checked) {
            nextState.decade.push(event.target.value)} 
            else {
                const index = nextState.decade.indexOf(event.target.value)
                nextState.decade.splice(index, 1)
            }}

    const directorHandler = (event) => {
        event.preventDefault()
        setDirectorSearchTerm(event.target.value)
    }

function clickOutside() {
    setClickedDirectorsSearch(false)
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

let directorArr = []
data.forEach((node) => {
  node.DirectorArray.forEach((director) => {
    if (directorSearchTerm.length > 0) {
        if (director.match(directorSearchTerm))
            directorArr.push(director)
    }
    else
        directorArr.push(director)
  })
})
directorArr = [...new Set(directorArr)]

const searchBarClick = () => {
    setClickedDirectorsSearch(true)
}


const directorClick = (event) => {
    nextState.director.push(event.target.getAttribute("name"))
    setDirectorSearchTerm("")
    setShowSelectedDirectors(true)
}

const unclickDirector = (event) => {
    nextState.director.some((director) => {
        if (event.target.getAttribute("name") == director) {
            const index = nextState.director.indexOf(director)
            nextState.director.splice(index, 1)
        }
    })
    setApply(apply + 1)
}




return (
    <div className="filtersContainer">
        <div onClick={toggleCountries}>Country of Origin</div>
        {clickedCountries ? (
            <div>
                <div>
                <input type="checkbox" value="United States" onChange={countryHandler}/>
                <label htmlFor="united states">United States</label>
                </div>
                <div>
                <input type="checkbox" value="United Kingdom" onChange={countryHandler}/>
                <label htmlFor="united kingdom">United Kingdom</label>
                </div>
            </div>

        ) : null}
        <div>
            <input type="checkbox" value="196" onChange={decadeHandler}/>
            <label htmlFor="1960s">1960s</label>
        </div>
            <div>
                
                {nextState.director.map((d) => (
                    <div>
                    <div onClick={(e) => unclickDirector(e)} name={d}>{d}</div>
                    </div>
                ))}
            </div>
        <div className="searchbar" onClick={() => searchBarClick()}>
            <input type="text" placeholder="Search..." ref={ref} onChange={(e) => directorHandler(e)} value={directorSearchTerm}/>
            {clickedDirectorsSearch ? (
                <div className="dropdown-content">
                {directorArr.map((d) => (
                    <div className="searchdirectors" onClick={(e) => directorClick(e)} name={d}>{d}</div>
                ))}
            </div>

            ) : null}
            
        </div>
   
    </div>
    
          
)
            
} 


export default Filters
