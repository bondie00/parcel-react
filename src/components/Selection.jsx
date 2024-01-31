import React, { useState } from "react";

const Selection = ({data, directors, titles, type}) => {
    const [show, setShow] = useState(true)

    const unselect = (event) => {
        setShow(false)
        if (type == "director") {
            directors.some((x) => {
                if (event.target.getAttribute("name") == x) {
                    const index = directors.indexOf(x)
                    directors.splice(index, 1)
               }})
        }
        if (type == "title") {
            titles.some((x) => {
                if (event.target.getAttribute("name") == x) {
                    const index = titles.indexOf(x)
                    titles.splice(index, 1)
               }})
        }

    }

  return (
    <div>
        {show ? (
             <div className="displayedSelection" onClick={(e) => unselect(e)} name={data}>{data}{'\u2A2F'}</div>
        ) : null}
  </div>
  )
}

export default Selection