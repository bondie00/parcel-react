import FilmSlide from "./components/FilmSlide";
import React, { useState } from "react";
import data from "./components/filmdata.json";


export function App() {

  return <>
  {data.map(data => (
    <svg id="filmslide" height="250" width="650">
      <text id = "title" x="50" y="40">{data.FilmTitle}</text>
      <text id = "alttitle" x="50" y="60">{data.AlternateTitle}</text>
      <text id = "secondary" x="50" y="100">Directed by {data.Director}</text>
      <text id = "secondary" x="50" y="120">{data.Country}, {data.Year}</text>
      <text id = "pollyear" x = "50" y = "230">2022</text>
      <text id = "rank" x = "50" y = "190"># {data["2022rank"]}</text>
      <text id = "votes" x = "50" y = "210">{data["2022votes"] + " vote(s)"}</text>
      <text id = "pollyear" x = "125" y = "230">2012</text>
      <text id = "rank"x = "125" y = "190"># {data["2012rank"]}</text>
      <text id = "votes" x = "125" y = "210">{data["2012votes"] + " vote(s)"}</text>
      <text id = "pollyear" x = "200" y = "230">2002</text>
      <text id = "rank" x = "200" y = "190"># {data["2002rank"]}</text>
      <text id = "votes" x = "200" y = "210">{data["2002votes"] + " vote(s)"}</text>
      <text id = "pollyear" x = "275" y = "230">1992</text>
      <text id = "rank" x = "275" y = "190"># {data["1992rank"]}</text>
      <text id = "votes" x = "275" y = "210">{data["1992votes"] + " vote(s)"}</text>
      <text id = "pollyear" x = "350" y = "230">1982</text>
      <text id = "rank" x = "350" y = "190"># {data["1982rank"]}</text>
      <text id = "votes" x = "350" y = "210">{data["1982votes"] + " vote(s)"}</text>
      <text id = "pollyear" x = "425" y = "230">1972</text>
      <text id = "rank" x = "425" y = "190"># {data["1972rank"]}</text>
      <text id = "votes" x = "425" y = "210">{data["1972votes"] + " vote(s)"}</text>
      <text id = "pollyear" x = "500" y = "230">1962</text>
      <text id = "rank" x = "500" y = "190"># {data["1962rank"]}</text>
      <text id = "votes" x = "500" y = "210">{data["1962votes"] + " vote(s)"}</text>
      <text id = "pollyear" x = "575" y = "230">1952</text>
      <text id = "rank" x = "575" y = "190">#{data["1952votes"]==0 ? " --" : data["1952votes"]}</text>
      <text id = "votes" x = "575" y = "210">{data["1952votes"] + " vote(s)"}</text>
      <rect width="650" height="250" fill="none" stroke="black" strokeWidth="3px"></rect>
    </svg>
  ))}
  </>;
}
