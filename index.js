document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.getElementById('placeholder');

  // Start with default chartType
  let chartType = 'bubble_bransch'; 

  function renderBubbleChart() {
    placeholder.innerHTML = '';
    const chart = document.createElement('div');
    chart.style.padding = '20px';
    chart.style.backgroundColor = '#f0f0f0';
    placeholder.appendChild(chart);
  }

  // Show bubble chart
  document.getElementById('tab-bubble').addEventListener('click', function () {
    renderBubbleChart();
  });

  // Redirect based on chartType
  document.getElementById('tab-bar').addEventListener('click', function () {
    if (chartType === 'bubble_bransch') {
      window.location.href = 'https://amelia-bodin.github.io/ddf_bransch.github.io/';
    } else if (chartType === 'bubble_countries') {
      window.location.href = 'https://amelia-bodin.github.io/ddf_countries.github.io/';
    } else {
      console.warn('Unknown chartType:', chartType);
    }
  });

  // Initial chart
  renderBubbleChart();
});
