import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
// import "../../wholeassets/assets/css/style.css";
// import "../../wholeassets/assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.css";

export default class BarChart extends Component {
  state = {
    chartData: {
      //   labels: [
      //     "Foods In",
      //     "KFC",
      //     "McDonalds",
      //     "Mandi House",
      //     "Al Sajjad",
      //     "Al Baik",
      //     "My Kolachi",
      //   ],
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      datasets: [
        {
          label: "Sales",
          data: [15000, 18000, 5000, 17000, 13000, 1800, 8000],
          backgroundColor: [
            // "rgba(255, 99, 132, 0.6)",
            // "rgba(54, 162, 235, 0.6)",
            // "rgba(255, 206, 86, 0.6)",
            // "rgba(75, 192, 192, 0.6)",
            // "rgba(153, 102, 255, 0.6)",
            // "rgba(255, 159, 64, 0.6)",
            // "rgba(255, 99, 132, 0.6)",
            "#E3BAC6",
            "#8E5D83",
            "#6C007A",
            "#A200B8",
            "#A6779C",
            "#764151",
            "#9E576C",
          ],
        },
      ],
    },
    chartData2: {
      //   labels: [
      //     "Foods In",
      //     "KFC",
      //     "McDonalds",
      //     "Mandi House",
      //     "Al Sajjad",
      //     "Al Baik",
      //     "My Kolachi",
      //   ],
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      datasets: [
        {
          label: "Sales",
          data: [15000, 18000, 5000, 17000, 13000, 1800, 8000],
          backgroundColor: [
            // "rgba(255, 99, 132, 0.6)",
            // "rgba(54, 162, 235, 0.6)",
            // "rgba(255, 206, 86, 0.6)",
            // "rgba(75, 192, 192, 0.6)",
            // "rgba(153, 102, 255, 0.6)",
            // "rgba(255, 159, 64, 0.6)",
            // "rgba(255, 99, 132, 0.6)",
            "#E3BAC6",
            "#8E5D83",
            "#6C007A",
            "#A200B8",
            "#A6779C",
            "#764151",
            "#9E576C",
          ],
        },
      ],
    },
  };
  render() {
    const { chartData } = this.state;
    return (
      <div>
        <Bar data={chartData} options={{}} legend={false} />
      </div>
    );
  }
}
