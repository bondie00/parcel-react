import React, { useEffect, useRef } from 'react';
import c3 from 'c3';

const FilmGraph = ({ranks}) => {
  console.log(ranks)
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = c3.generate({
      bindto: chartRef.current,
      data: {
        x: 'x',
        columns: [
          ['x', '2022', '2012', '2002', '1992', '1982', '1972', '1962', '1952'],
          ['rank', ...ranks],
        ],
        type: 'line' // Change type to 'bar', 'spline', etc. as needed
      }
    });

    // Optional: Cleanup on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={chartRef}></div>
    </div>
  );
}

export default FilmGraph;
