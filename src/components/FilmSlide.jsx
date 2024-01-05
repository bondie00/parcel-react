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
                  <div className="rank" id={poll=="2022votes" ? "highlight" : null}><span className="pound" id={poll=="2022votes" ? "highlight" : null}>#</span>{d["2022rank"]}</div>
                  <div className="rank" id={poll=="2012votes" ? "highlight" : null}><span className="pound" id={poll=="2012votes" ? "highlight" : null}>#</span>{d["2012rank"]}</div>
                  <div className="rank" id={poll=="2002votes" ? "highlight" : null}><span className="pound" id={poll=="2002votes" ? "highlight" : null}>#</span>{d["2002rank"]}</div>
                  <div className="rank" id={poll=="1992votes" ? "highlight" : null}><span className="pound" id={poll=="1992votes" ? "highlight" : null}>#</span>{d["1992rank"]}</div>
                  <div className="rank" id={poll=="1982votes" ? "highlight" : null}><span className="pound" id={poll=="1982votes" ? "highlight" : null}>#</span>{d["1982rank"]}</div>
                  <div className="rank" id={poll=="1972votes" ? "highlight" : null}><span className="pound" id={poll=="1972votes" ? "highlight" : null}>#</span>{d["1972rank"]}</div>
                  <div className="rank" id={poll=="1962votes" ? "highlight" : null}><span className="pound" id={poll=="1962votes" ? "highlight" : null}>#</span>{d["1962rank"]}</div>
                  <div className="rank" id={poll=="1952votes" ? "highlight" : null}><span className="pound" id={poll=="1952votes" ? "highlight" : null}>#</span>{d["1952rank"]}</div>
                </div>
                <div className="row">
                  <div className="votes" id={poll=="2022votes" ? "highlight" : null}>votes: {d["2022votes"]} </div>
                  <div className="votes" id={poll=="2012votes" ? "highlight" : null}>votes: {d["2012votes"]} </div>
                  <div className="votes" id={poll=="2002votes" ? "highlight" : null}>votes: {d["2002votes"]} </div>
                  <div className="votes" id={poll=="1992votes" ? "highlight" : null}>votes: {d["1992votes"]} </div>
                  <div className="votes" id={poll=="1982votes" ? "highlight" : null}>votes: {d["1982votes"]} </div>
                  <div className="votes" id={poll=="1972votes" ? "highlight" : null}>votes: {d["1972votes"]} </div>
                  <div className="votes" id={poll=="1962votes" ? "highlight" : null}>votes: {d["1962votes"]} </div>
                  <div className="votes" id={poll=="1952votes" ? "highlight" : null}>votes: {d["1952votes"]} </div>
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
