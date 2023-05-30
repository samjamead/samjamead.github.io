import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// Define the CalendarView component. This component is used to render a Calendar view of given data.
function CalendarView({
  data, // The input data for the calendar
  x = ([x]) => x, // Function to extract the x-axis value from the data
  y = ([, y]) => y, // Function to extract the y-axis value from the data
  title, // Title of the calendar
  width = 928, // Width of the calendar, defaults to 928
  cellSize = 17, // Size of each cell in the calendar, defaults to 17
  weekday = "monday", // The starting day of the week, defaults to "monday"
  formatDay = (i) => "SMTWTFS"[i], // A function to format the days of the week (defaults to "SMTWTFS")
  formatMonth = "%b", // Format for the month, defaults to abbreviated month
  yFormat, // Format for the y-axis values
  colors = d3.interpolatePiYG, // Color scale for the cells, defaults to a purple to green scale
}) {
  const ref = useRef(); // Create a reference to attach the d3 output

  useEffect(() => {
    // Clear the SVG container
    d3.select(ref.current).selectAll("*").remove();

    // Hook to update the calendar when the input data changes
    const X = d3.map(data, x); // Map the x values from the data
    const Y = d3.map(data, y); // Map the y values from the data
    const I = d3.range(X.length); // Create an array of indices from 0 to X.length

    // Function to count the days based on the starting day of the week
    const countDay = weekday === "sunday" ? (i) => i : (i) => (i + 6) % 7;

    // Determine the time format based on the starting day of the week
    const timeWeek = weekday === "sunday" ? d3.utcSunday : d3.utcMonday;

    // Define the number of days to be displayed in a week
    const weekDays = weekday === "weekday" ? 5 : 7;

    // Calculate the height of the SVG
    const height = cellSize * (weekDays + 2);

    // Compute the quantile for the color scale
    const max = d3.quantile(Y, 0.9975, Math.abs);

    // Define the color scale
    const color = d3.scaleSequential([-max, +max], colors).unknown("none");

    // Format the month using D3's utcFormat function
    formatMonth = d3.utcFormat(formatMonth);

    // Define the title function depending on if a title prop was provided
    if (title === undefined) {
      const formatDate = d3.utcFormat("%B %-d, %Y");
      const formatValue = color.tickFormat(100, yFormat);
      title = (i) => `${formatDate(X[i])}\n${formatValue(Y[i])}`;
    } else if (title !== null) {
      const T = d3.map(data, title);
      title = (i) => T[i];
    }

    // Group data by years
    const years = d3.groups(I, (i) => X[i].getUTCFullYear()).reverse();

    // Append an SVG to the element referenced by ref
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height * years.length)
      .attr("viewBox", [0, 0, width, height * years.length])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10);

    // Add a group element for each year
    const year = svg
      .selectAll("g")
      .data(years)
      .join("g")
      .attr(
        "transform",
        (d, i) => `translate(40.5,${height * i + cellSize * 1.5})`
      );

    // Add text for each year
    year
      .append("text")
      .attr("x", -5)
      .attr("y", -5)
      .attr("font-weight", "bold")
      .attr("text-anchor", "end")
      .text(([key]) => key);

    // Add weekday labels
    year
      .append("g")
      .attr("text-anchor", "end")
      .selectAll("text")
      .data(weekday === "weekday" ? d3.range(1, 6) : d3.range(7))
      .join("text")
      .attr("x", -5)
      .attr("y", (i) => (countDay(i) + 0.5) * cellSize)
      .attr("dy", "0.31em")
      .text(formatDay);

    // Add a rect element for each cell in the calendar
    const cell = year
      .append("g")
      .selectAll("rect")
      .data(
        weekday === "weekday"
          ? ([, I]) => I.filter((i) => ![0, 6].includes(X[i].getUTCDay()))
          : ([, I]) => I
      )
      .join("rect")
      .attr("width", cellSize - 1)
      .attr("height", cellSize - 1)
      .attr("x", (i) => timeWeek.count(d3.utcYear(X[i]), X[i]) * cellSize + 0.5)
      .attr("y", (i) => countDay(X[i].getUTCDay()) * cellSize + 0.5)
      .attr("fill", (i) => color(Y[i]));

    // If a title function is defined, add it as a title for each cell
    if (title) cell.append("title").text(title);

    // Add a group element for each month
    const month = year
      .append("g")
      .selectAll("g")
      .data(([, I]) => d3.utcMonths(d3.utcMonth(X[I[0]]), X[I[I.length - 1]]))
      .join("g");

    // Function to generate SVG path for each month in the calendar
    const pathMonth = (t) => {
      const n = weekday === "weekday" ? 5 : 7;
      const d = Math.max(0, Math.min(n, countDay(t.getUTCDay())));
      return `${
        d === 0
          ? `M${cellSize},0`
          : d === n
          ? `M${(t = (((t.getTime() - 1) / 864e5) % 7) * cellSize)},0`
          : `M${(t + 1) * cellSize},0V${cellSize}H${t * cellSize}`
      }V0`;
    };

    // Add a path element to separate each month
    month
      .filter((d, i) => i)
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .attr("d", pathMonth);

    // Add text for each month
    month
      .append("text")
      .attr(
        "x",
        (d) => timeWeek.count(d3.utcYear(d), timeWeek.ceil(d)) * cellSize + 2
      )
      .attr("y", -5)
      .text(formatMonth);
  }, [data]); // Run the effect when the data prop changes

  // Render the container div and assign our ref to it
  return <div ref={ref} />;
}

// Export the CalendarView component
export default CalendarView;
