import React, { useState } from "react";

const FilmSlide = ({d}) => {

return( 
          <div className="movie" key={d.key}>
            <div className="title">{d.FilmTitle}</div>
            <div className="alttitle">{d.AlternateTitle}</div>
            <div className="director"><span className="dby">Directed by </span>{d.Director}</div>
            <div className="countryyear">{d.Country}, {d.Year}</div>
            <div className="rankgrid">
                <div className="row">
                  <div className="rank"><span className="pound">#</span>{d["2022rank"]}</div>
                  <div className="rank"><span className="pound">#</span>{d["2012rank"]}</div>
                  <div className="rank"><span className="pound">#</span>{d["2002rank"]}</div>
                  <div className="rank"><span className="pound">#</span>{d["1992rank"]}</div>
                  <div className="rank"><span className="pound">#</span>{d["1982rank"]}</div>
                  <div className="rank"><span className="pound">#</span>{d["1972rank"]}</div>
                  <div className="rank"><span className="pound">#</span>{d["1962rank"]}</div>
                  <div className="rank"><span className="pound">#</span>{d["1952rank"]}</div>
                </div>
                <div className="row">
                  <div className="votes">votes: {d["2022votes"]} </div>
                  <div className="votes">votes: {d["2012votes"]} </div>
                  <div className="votes">votes: {d["2002votes"]} </div>
                  <div className="votes">votes: {d["1992votes"]} </div>
                  <div className="votes">votes: {d["1982votes"]} </div>
                  <div className="votes">votes: {d["1972votes"]} </div>
                  <div className="votes">votes: {d["1962votes"]} </div>
                  <div className="votes">votes: {d["1952votes"]} </div>
                </div>
                <div className="row">
                  <div className="year">2022</div>
                  <div className="year">2012</div>
                  <div className="year">2002</div>
                  <div className="year">1992</div>
                  <div className="year">1982</div>
                  <div className="year">1972</div>
                  <div className="year">1962</div>
                  <div className="year">1952</div>
                </div>
            </div>
          </div>
);
            
    } 


export default FilmSlide;
