document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById('placeholder');

    // Function to update view based on chart type
    function updateChart(chart_1) {
        placeholder.innerHTML = ''; // Clear previous content

        if (chart_1 === 'bubbs') {
            // Render default chart view (e.g., using canvas, SVG, or a chart library)
            const iframe = document.createElement('iframe');
            iframe.src = 'https://statistikkonsulterna.github.io/bransch_v1.github.io/#$chart-type=bubble_bransch&url=v2';
            iframe.width = '100%';
            iframe.height = '600';
            iframe.style.border = 'none';

            placeholder.appendChild(iframe);

            // https://statistikkonsulterna.github.io/bransch_v1.github.io/#$chart-type=bubble_bransch&url=v2

            placeholder.appendChild(chartContainer);

        } else if (chart_1 === 'barRank') {
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
        updateChart('bubbs');
    });

    document.getElementById('tab-bar').addEventListener('click', function () {
        updateChart('barRank');
    });

    // Initial load
    updateChart('bubbs');
});
