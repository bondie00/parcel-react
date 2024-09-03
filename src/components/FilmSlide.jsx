import React, { useState } from "react";
import FilmGraph from "./FilmGraph";
import { rank } from "d3";

const FilmSlide = ({d, poll}) => {

  const votesArr = ["2022votes", "2012votes", "2002votes", "1992votes", "1982votes", "1972votes", "1962votes", "1952votes"]
  const ranksArr = ["2022rank", "2012rank", "2002rank", "1992rank", "1982rank", "1972rank", "1962rank", "1952rank"]
  const yearArr = ["2022", "2012", "2002", "1992", "1982", "1972", "1962", "1952"]

  const [isGraphOpen, setIsGraphOpen] = useState(false);

  return(
    <div className="movie" key={d.key}>
      <div className="title">
        {d.FilmTitle}
        <button
          style={{
            position: "relative",
            top: "-6px",
            marginLeft: "8px",
          }}
          onClick={() => { setIsGraphOpen(!isGraphOpen) }}
        >
          {isGraphOpen ? "↑" : "↓"}
        </button>
      </div>
      <div className="alttitle">{d.AlternateTitle}</div>
      <div className="director"><span className="dby">Directed by </span>{d.Director}</div>
      <div className="countryyear">{d.Country}, {d.Year}</div>
      <div className="rankgrid">
        <div className="row">
          {votesArr.map((x,i) => (
              <div className="rank" id={poll==votesArr[i] ? "highlight" : null}><span className="pound" id={poll=={x} ? "highlight" : null}>#</span>{d[ranksArr[i]] == "" ? ("--") : d[ranksArr[i]]}</div>
          ))}
        </div>
        <div className="row">
          {votesArr.map((x,i) => (
            <div className="votes" id={poll==votesArr[i] ? "highlight" : null}>{d[x] + (d[x] == "1" ? (" vote") : " votes")}</div>
          ))}
        </div>
        <div className="row">
          {votesArr.map((x,i) => (
            <div className="year" id={poll==votesArr[i] ? "highlight" : null}>{yearArr[i]}</div>
          ))}
        </div>
      </div>

      { isGraphOpen ? <FilmGraph ranks={ranksArr.map(rankKey => d[rankKey] * -1)} /> : <></> }
    </div>
  )
}

export default FilmSlide
