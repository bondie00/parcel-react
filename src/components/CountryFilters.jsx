import React, { useState } from "react"

const Filters = ({countries, prevCountries, continent, code}) => {

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState([])

    const Countries = {
        NorthAmerica:  ["United States", "Canada", "Cuba", "Guatemala", "Mexico"],
        SouthAmerica:  ["Brazil", "Argentia", "Bolivia", "Chile", "Colombia", "Venezuela"],
        Europe: ["France", "Austria", "Belgium", "Czechoslovakia", "Germany", "Slovakia", "West Germany", "Soviet Union", "Switzerland", "Denmark", "East Germany", "Faroe Islands", "Finland", "Estonia", "Italy", "Portugal",
                "Russia", "Spain", "United Kingdom", "Germany", "Poland", "Greece", "Hungary", "Ireland", "North Macedonia", "Netherlands", "Norway", "Sweden", "Romania", "Luxembourg", "Serbia", "Slovenia", "Ukraine", 
                "Yugoslavia"],
        Asia:  ["Israel", "China", "Hong Kong", "Cambodia", "Iraq", "Syria", "Armenia", "Palestinian Territory", "Turkey", "Taiwan", "India", "Bangladesh", "Indonesia", "Iran", "Japan", "Kazakhstan", 
                    "Kyrgyzstan", "Lebanon", "Mongolia", "Philippines", "Singapore", "South Korea", "Thailand"],
        Africa: ["Algeria", "Burkina Faso", "Chad", "C'ote D'Ivoire", "Egypt", "Ethiopia", "Mali", "Niger", "Rwanda", "Morocco", "Senegal", "Sudan", "Tunisia"],
        Oceania: ["Australia", "New Zealand"]
    }

    const countryHandler = (event) => {
        if (event.target.checked) {
            setSelected([...selected, event.target.value])
            countries.push(event.target.value)

        } 
        else {
            setSelected(selected.filter((c) => c !== event.target.value))
            const index = countries.indexOf(event.target.value)
            if (index >= 0)
                countries.splice(index, 1)

        }
    } 

    const click = () => {
        (show === true ? setShow(false) : setShow(true))
    }

    const selectAll = (event) => {
        if (event.target.checked) {
            setSelected(Countries[code])
            Countries[code].map((x) => {
                if (countries.indexOf(x) == -1) {
                    countries.push((x))

                }
            })
        }
        else {
            setSelected([])
            Countries[code].forEach((x) => {
                const index = countries.indexOf(x)
                if (index >= 0)
                    countries.splice(index, 1)
            })
        }
    }

return (
    <div className="filtersContainer">
            <div>
                <input type="checkbox" name={continent} checked={Countries[code].every(c => countries.includes(c))} onChange={selectAll}/>
                <label htmlFor={continent}><span onClick={click}>{continent}{show ? '\u25B4' : '\u25BE'}</span></label>
            </div>
            {show ? (
                Countries[code].map((c) => (
                    <div className="countries">
                        <input type="checkbox" value={c} checked={countries.includes(c)} onChange={countryHandler}/>
                        <label htmlFor={c}>{c}</label>
                    </div>
                ))
            ) : null}
    </div>
          
)
            
} 

export default Filters
