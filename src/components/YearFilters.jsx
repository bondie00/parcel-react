import React, { useState } from "react";

const YearFilters = ({startYear, endYear}) => {

    const [apply, setApply] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTerm2, setSearchTerm2] = useState("")


    const handleStart = (event) => {
        setSearchTerm(event.target.value)
        startYear.push(event.target.value)
        startYear.splice(0, startYear.length - 1)
    }

    const handleEnd = (event) => {
        setSearchTerm2(event.target.value)
        endYear.push(event.target.value)
        endYear.splice(0, endYear.length - 1)
    }


return (
    <div>
        <div>From</div>
        <div className="searchBarContainer">
            <input type="text" placeholder="Starting year..." value={startYear} onChange={(e) => handleStart(e)}/>
        </div>
        <div>To</div>
        <div className="searchBarContainer">
            <input type="text" placeholder="Ending year..." value={endYear} onChange={(e) => handleEnd(e)}/>
        </div>
    </div>

)
}

export default YearFilters