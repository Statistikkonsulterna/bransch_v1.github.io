document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById('placeholder');

    // Function to update view based on chart type
    function updateChart(chartType) {
        placeholder.innerHTML = ''; // Clear previous content

        if (chartType === 'BubbleChart') {
            // Render default chart view (e.g., using canvas, SVG, or a chart library)
            const chartContainer = document.createElement('div');
            chartContainer.textContent = "Rendering Bubble Chart..."; // Placeholder logic
            chartContainer.style.padding = '20px';
            chartContainer.style.backgroundColor = '#f0f0f0';

            // Optionally: call chart rendering function here, e.g., renderBubbleChart(chartContainer);

            placeholder.appendChild(chartContainer);

        } else if (chartType === 'BarRankChart') {
            // Load external view in iframe
            const iframe = document.createElement('iframe');
            iframe.src = 'https://amelia-bodin.github.io/ddf_bransch.github.io/';
            iframe.width = '100%';
            iframe.height = '600';
            iframe.style.border = 'none';

            placeholder.appendChild(iframe);
        }
    }

    // Button event listeners
    document.getElementById('tab-bubble').addEventListener('click', function () {
        updateChart('BubbleChart');
    });

    document.getElementById('tab-bar').addEventListener('click', function () {
        updateChart('BarRankChart');
    });

    // Initial load
    updateChart('BubbleChart');
});
