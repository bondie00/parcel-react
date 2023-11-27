import React, { useState } from "react";

const FilmSlide = ({d}) => {

return( 
          <div class="movie" key={d.key}>
            <div class="title">{d.FilmTitle}</div>
            <div class="alttitle">{d.AlternateTitle}</div>
            <div class="director"><span class="dby">Directed by </span>{d.Director}</div>
            <div class="countryyear">{d.Country}, {d.Year}</div>
            <div class="rankgrid">
                <div class="row">
                  <div class="rank"><span class="pound">#</span>{d["2022rank"]}</div>
                  <div class="rank"><span class="pound">#</span>{d["2012rank"]}</div>
                  <div class="rank"><span class="pound">#</span>{d["2002rank"]}</div>
                  <div class="rank"><span class="pound">#</span>{d["1992rank"]}</div>
                  <div class="rank"><span class="pound">#</span>{d["1982rank"]}</div>
                  <div class="rank"><span class="pound">#</span>{d["1972rank"]}</div>
                  <div class="rank"><span class="pound">#</span>{d["1962rank"]}</div>
                  <div class="rank"><span class="pound">#</span>{d["1952rank"]}</div>
                </div>
                <div class="row">
                  <div class="votes">votes: {d["2022votes"]} </div>
                  <div class="votes">votes: {d["2012votes"]} </div>
                  <div class="votes">votes: {d["2002votes"]} </div>
                  <div class="votes">votes: {d["1992votes"]} </div>
                  <div class="votes">votes: {d["1982votes"]} </div>
                  <div class="votes">votes: {d["1972votes"]} </div>
                  <div class="votes">votes: {d["1962votes"]} </div>
                  <div class="votes">votes: {d["1952votes"]} </div>
                </div>
                <div class="row">
                  <div class="year">2022</div>
                  <div class="year">2012</div>
                  <div class="year">2002</div>
                  <div class="year">1992</div>
                  <div class="year">1982</div>
                  <div class="year">1972</div>
                  <div class="year">1962</div>
                  <div class="year">1952</div>
                </div>
            </div>
          </div>
);
            
    } 


export default FilmSlide;
