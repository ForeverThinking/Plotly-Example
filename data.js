// Select div for chart
example = document.getElementById('example');

// Practice data sets
var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 3, 6, 4, 5, 2, 3, 5, 4],
  name: 'Blue Trace',
  type: 'scatter'
};

var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 4, 7, 8, 3, 6, 3, 3, 4],
  name: 'Orange Trace',
  type: 'scatter'
};

// Setting chart layout
var layout = {
  xaxis: {
    range: [ 0.75, 5.25 ],
    title: 'Independant Variable',
  },
  yaxis: {
    range: [0, 10],
    title: 'Dependant Variable',
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Example Data and Plot'
};

// Collate data and create chart
data = [trace1, trace2];

Plotly.newPlot('example', data, layout);
