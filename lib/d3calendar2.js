import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { interpolateCool } from "d3-scale-chromatic";

function CalendarView({ data, width, height, x, y }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const parseDate = d3.timeParse("%Y-%m-%d");

    data.forEach((d) => {
      d.date = parseDate(d.Date);
      d.volume = +d.Volume;
    });

    const timeScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, innerWidth]);

    const colorScale = d3
      .scaleSequential(interpolateCool)
      .domain(d3.extent(data, (d) => d.volume));

    const rectWidth =
      innerWidth /
      d3.timeDay.count(timeScale.domain()[0], timeScale.domain()[1]);

    g.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", rectWidth)
      .attr("height", rectWidth)
      .attr("x", (d) => timeScale(d.date))
      .attr("y", (d) => timeScale(d.date))
      .attr("fill", (d) => colorScale(d.volume));

    const xAxis = d3
      .axisTop(timeScale)
      .ticks(d3.timeMonth.every(1))
      .tickFormat(d3.timeFormat("%b %Y"));

    g.append("g")
      .call(xAxis)
      .call((g) => g.select(".domain").remove());

    function pathMonth(t) {
      const n = d3.timeMonth.count(t.range()[0], t.range()[1]),
        d = Math.max(0, Math.min(n, Math.floor(t(t.domain()[0]) / t.step()))),
        x = t(t.domain()[0] + d);
      return `${
        d === 0
          ? `M${x},0`
          : d === n
          ? `M${x},${innerHeight}`
          : `M${x},0V${innerHeight}`
      }H0`;
    }

    g.append("g")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .selectAll("path")
      .data(data)
      .join("path")
      .attr("d", pathMonth);
  }, [data, width, height]);

  return <svg ref={ref} />;
}

export default CalendarView;
