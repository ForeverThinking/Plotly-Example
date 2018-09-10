example = document.getElementById('example');

trace = {
  x: [9, 8, 5, 1],
  y: [1, 2, 4, 8],
  z: [11, 8, 15, 3],
  mode: 'lines'
};

data = [trace];

Plotly.newPlot('example', data)
