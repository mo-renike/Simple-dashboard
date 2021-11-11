"use strict";

var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    datasets: [{
      label: 'Last week',
      backgroundColor: 'rgba(161, 198, 247, 1)',
      borderColor: 'rgb(47, 128, 237)',
      data: [3000, 4000, 2000, 5000, 8000, 9000, 2000]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});