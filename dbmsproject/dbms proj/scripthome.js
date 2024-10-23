// Sample data for past placement graph
const ctx = document.getElementById('placementGraph').getContext('2d');
const placementGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Placement Percentage',
            data: [60, 75, 80, 85, 90],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});