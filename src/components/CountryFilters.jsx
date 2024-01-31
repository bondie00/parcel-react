import React, { useState } from "react"

const Filters = ({countries, continent, code}) => {

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState([])

    const Countries = {
        NorthAmerica:  ["Canada", "Cuba", "Dominican Republic", "Guatemala", "Haiti", "Jamaica", "Martinique", "Mexico", "United States"],
        SouthAmerica:  ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Guyana", "Paraguay", "Peru", "Uruguay", "Venezuela"],
        Europe: ["Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czechoslovakia", "Czech Republic", "Denmark", "East Germany", "Estonia", "Faroe Islands", "Finland", "France", 
                "Germany", "Greece", "Hungary", "Italy", "Ireland", "Luxembourg", "Macedonia", "Netherlands", "Norway", "Poland", "Portugal", "Russia", "Serbia", "Slovakia", "Slovenia", "Soviet Union", "Spain",
                "Sweden", "Switzerland", "United Kingdom", "Ukraine", "West Germany", "Yugoslavia"],
        Asia:  ["Armenia", "Bangladesh", "Cambodia", "China", "Hong Kong", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Kazakhstan", "Kyrgyzstan", "Lebanon", "Mongolia", "Nepal", "Pakistan", "Palestine",
                "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Thailand", "Turkey", "Vietnam"],
        Africa: ["Algeria", "Burkina Faso", "Cameroon", "Chad", "Democratic Republic of the Congo", "Egypt", "Ethiopia", "Ghana", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Mali", "Mauritania", "Morocco", 
                "Mozambique", "Niger", "Nigeria", "Rwanda", "Senegal", "Somalia", "South Africa", "Sudan", "Tunisia", "Zimbabwe"],
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
            Countries[code].map((x) => {
                const index = countries.indexOf(x)
                if (index >= 0)
                    countries.splice(index, 1)
            })
        }
    }

    return (
        <div className="filtersContainer">
                <div>
                    <input type="checkbox" className="countrytext" name={continent} checked={Countries[code].every(c => countries.includes(c))} onChange={selectAll}/>
                    <label htmlFor={continent}><span className="countrytext" onClick={click}>{continent}{show ? '\u25B4' : '\u25BE'}</span></label>
                </div>
                {show ? (
                    Countries[code].map((c) => (
                        <div className="countries">
                            <input type="checkbox" className="countrytext" value={c} checked={countries.includes(c)} onChange={countryHandler}/>
                            <label htmlFor={c}>{c}</label>
                        </div>
                    ))
                ) : null}
        </div>        
    )          
} 

export default Filters
