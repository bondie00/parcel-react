import React, { useState } from "react";
import pic from "./pics/pic1.png";

const FilmSlide = ({data}) => { 
        console.log(data)

    
        return(
            <svg className="filmslide" height="100" width="400">
                <text x="10" y="10">{data.FilmTitle}</text>
                <text x="180" y="20">{data.Director}</text>
                <text x="180" y="35">{data.Year}</text>
                <text x="180" y="50">{data.Country}</text>
            </svg>
            );
    }   


export default FilmSlide;


