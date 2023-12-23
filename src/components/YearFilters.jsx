import React, { useState } from "react";

const YearFilters = ({setStartYear, setEndYear}) => {

    const handleStart = (event) => {
        setStartYear(event.target.value)           
    }

    const handleEnd = (event) => {
        setEndYear(event.target.value)
    }


return (
    <div>
        <div>From</div>
        <div>
            <input type="text" placeholder="Starting year..." onChange={(e) => handleStart(e)}/>
        </div>
        <div>To</div>
        <div>
            <input type="text" placeholder="Ending year..." onChange={(e) => handleEnd(e)}/>
        </div>
    </div>

)
}

export default YearFilters