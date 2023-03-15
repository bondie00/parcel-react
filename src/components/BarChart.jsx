import React, { useState } from "react";
import { scaleBand, scaleLinear } from "d3";

const height = 500, width = 300;

const BarChart = ({ data }) => {

  const xScale = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, width])
    .padding(0.1)

  const yScale = scaleLinear()
    .domain([0, Math.max(...data.map(d => d.value))])
    .range([height, 0])
  
  return <div className="barchart">
    <svg width={width} height={height}>
      {data.map((d, i) => {
        return <rect
          key={i}
          x={xScale(d.name)}
          // .attr("x", d => xScale(d.name))
          y={yScale(d.value)}
          width={xScale.bandwidth()}
          height={height - yScale(d.value)}
        ></rect>
      })}
    </svg>
  </div>
}

export default BarChart;