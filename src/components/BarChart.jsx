import React, { useState, useRef, useEffect } from "react";
import { select, extent, scaleBand, scaleLinear } from 'd3';

const height = 500, width = 300

const BarChart = ({ data }) => {

  const [sort, setSort] = useState(false)

  const unsortedData = [...data];
  const sortedData = [...data].sort((a,b) => b.value - a.value)

  const xScale = scaleBand()
    .domain((sort ? sortedData : unsortedData).map(d => d.name))
    .range([0, width])

  const yScale = scaleLinear()
    .domain([0, Math.max(...data.map(d => d.value))])
    .range([height, 0])

  return <div className="barchart">
    <button onClick={() => setSort(!sort)}>sort</button>
    <svg width={width} height={height}>
      {(sort ? sortedData : unsortedData)
        .map(d => {
          return <rect 
            x={xScale(d.name)} 
            y={yScale(d.value)} 
            width={xScale.bandwidth()} 
            height={height - yScale(d.value)}
          />
      })}
    </svg>
  </div>
}

export default BarChart;


// const BarChart = ({ data }) => {

//   const svg = useRef(null);

//   useEffect(() => {
//     const xScale = scaleBand()
//       .domain(data.map(d => d.name))
//       .range([0, width])

//     const yScale = scaleLinear()
//       .domain([0, Math.max(...data.map(d => d.value))])
//       .range([height, 0])

//     select(svg.current).selectAll(".bar")
//       .data(data)
//       .join("rect")
//       .attr("class", "bar")
//       .attr("x", d => xScale(d.name))
//       .attr("y", d => yScale(d.value))
//       .attr("width", xScale.bandwidth())
//       .attr("height", d => height - yScale(d.value))
  
//   }, [data])

//   return <div className="barchart">
//     <svg width={width} height={height} ref={svg} />
//   </div>
// }

// export default BarChart;