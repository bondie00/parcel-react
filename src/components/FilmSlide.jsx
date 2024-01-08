import React, { useState } from "react";

const FilmSlide = ({d, poll}) => {

return( 
          <div className="movie" key={d.key}>
            <div className="title">{d.FilmTitle}</div>
            <div className="alttitle">{d.AlternateTitle}</div>
            <div className="director"><span className="dby">Directed by </span>{d.Director}</div>
            <div className="countryyear">{d.Country}, {d.Year}</div>
            <div className="rankgrid">
                <div className="row">
                  <div className="rank" id={poll=="2022votes" ? "highlight" : null}><span className="pound" id={poll=="2022votes" ? "highlight" : null}>#</span>{d["2022rank"] == "" ? ("--") : d["2022rank"]}</div>
                  <div className="rank" id={poll=="2012votes" ? "highlight" : null}><span className="pound" id={poll=="2012votes" ? "highlight" : null}>#</span>{d["2012rank"] == "" ? ("--") : d["2012rank"]}</div>
                  <div className="rank" id={poll=="2002votes" ? "highlight" : null}><span className="pound" id={poll=="2002votes" ? "highlight" : null}>#</span>{d["2002rank"] == "" ? ("--") : d["2002rank"]}</div>
                  <div className="rank" id={poll=="1992votes" ? "highlight" : null}><span className="pound" id={poll=="1992votes" ? "highlight" : null}>#</span>{d["1992rank"] == "" ? ("--") : d["1992rank"]}</div>
                  <div className="rank" id={poll=="1982votes" ? "highlight" : null}><span className="pound" id={poll=="1982votes" ? "highlight" : null}>#</span>{d["1982rank"] == "" ? ("--") : d["1982rank"]}</div>
                  <div className="rank" id={poll=="1972votes" ? "highlight" : null}><span className="pound" id={poll=="1972votes" ? "highlight" : null}>#</span>{d["1972rank"] == "" ? ("--") : d["1972rank"]}</div>
                  <div className="rank" id={poll=="1962votes" ? "highlight" : null}><span className="pound" id={poll=="1962votes" ? "highlight" : null}>#</span>{d["1962rank"] == "" ? ("--") : d["1962rank"]}</div>
                  <div className="rank" id={poll=="1952votes" ? "highlight" : null}><span className="pound" id={poll=="1952votes" ? "highlight" : null}>#</span>{d["1952rank"] == "" ? ("--") : d["1952rank"]}</div>
                </div>
                <div className="row">
                  <div className="votes" id={poll=="2022votes" ? "highlight" : null}>{d["2022votes"] + (d["2022votes"] == "1" ? (" vote") : " votes")}</div>
                  <div className="votes" id={poll=="2012votes" ? "highlight" : null}>{d["2012votes"] + (d["2012votes"] == "1" ? (" vote") : " votes")} </div>
                  <div className="votes" id={poll=="2002votes" ? "highlight" : null}>{d["2002votes"] + (d["2002votes"] == "1" ? (" vote") : " votes")} </div>
                  <div className="votes" id={poll=="1992votes" ? "highlight" : null}>{d["1992votes"] + (d["1992votes"] == "1" ? (" vote") : " votes")} </div>
                  <div className="votes" id={poll=="1982votes" ? "highlight" : null}>{d["1982votes"] + (d["1982votes"] == "1" ? (" vote") : " votes")} </div>
                  <div className="votes" id={poll=="1972votes" ? "highlight" : null}>{d["1972votes"] + (d["1972votes"] == "1" ? (" vote") : " votes")} </div>
                  <div className="votes" id={poll=="1962votes" ? "highlight" : null}>{d["1962votes"] + (d["1962votes"] == "1" ? (" vote") : " votes")} </div>
                  <div className="votes" id={poll=="1952votes" ? "highlight" : null}>{d["1952votes"] + (d["1952votes"] == "1" ? (" vote") : " votes")} </div>
                </div>
                <div className="row">
                  <div className="year" id={poll=="2022votes" ? "highlight" : null}>2022</div>
                  <div className="year" id={poll=="2012votes" ? "highlight" : null}>2012</div>
                  <div className="year" id={poll=="2002votes" ? "highlight" : null}>2002</div>
                  <div className="year" id={poll=="1992votes" ? "highlight" : null}>1992</div>
                  <div className="year" id={poll=="1982votes" ? "highlight" : null}>1982</div>
                  <div className="year" id={poll=="1972votes" ? "highlight" : null}>1972</div>
                  <div className="year" id={poll=="1962votes" ? "highlight" : null}>1962</div>
                  <div className="year" id={poll=="1952votes" ? "highlight" : null}>1952</div>
                </div>
            </div>
          </div>
);
            
    } 


export default FilmSlide;
