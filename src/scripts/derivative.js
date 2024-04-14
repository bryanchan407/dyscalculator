let graphsGenerated = false;

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const b = parseFloat(document.getElementById('valueB').value);
    if (b > 1) {
        generateGraphs();
    } else {
        alert("Please enter a value of 'b' greater than 1.");
    }
});

function generate() {
    const b = parseFloat(document.getElementById('valueB').value);
    if (b > 1) {
        generateGraphs();
    } else {
        alert("Please enter a value of 'b' greater than 1.");
    }
}
 
function generateGraphs() {
    const a = parseFloat(document.getElementById('valueA').value);
    const b = parseFloat(document.getElementById('valueB').value);
    const xValues = [];
    const yValues = [];
    const dyValues = [];
    const ddyValues = [];

    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        yValues.push(a * Math.pow(x, b));
        dyValues.push(a * b * Math.pow(x, b - 1));
        ddyValues.push(a * b * (b - 1) * Math.pow(x, b - 2));
    }

    const mainChartCtx = document.getElementById('mainChart').getContext('2d');
    const derivativeChartCtx = document.getElementById('derivativeChart').getContext('2d');
    const secondDerivativeChartCtx = document.getElementById('secondDerivativeChart').getContext('2d');

    const mainChart = new Chart(mainChartCtx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'f(x)',
                data: yValues,
                borderColor: 'blue',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    });

    document.getElementById('mainEquation').innerText = `f(x) = ${a} * x^${b}`;

    const derivativeChart = new Chart(derivativeChartCtx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: "f'(x)",
                data: dyValues,
                borderColor: 'green',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    });

    document.getElementById('derivativeEquation').innerText = `f'(x) = ${a * b} * x^${b - 1}`;

    const secondDerivativeChart = new Chart(secondDerivativeChartCtx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: "f''(x)",
                data: ddyValues,
                borderColor: 'red',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    });

    document.getElementById('secondDerivativeEquation').innerText = `f''(x) = ${a * b * (b - 1)} * x^${b - 2}`;

    graphsGenerated = true;
}