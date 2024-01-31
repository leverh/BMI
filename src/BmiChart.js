import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

function BmiChart({ userBmi }) {
    const userBmiValue = parseFloat(userBmi);
    let category;
    let range;

    if (userBmiValue < 18.5) {
        category = 'Underweight';
        range = [0, 18.5];
    } else if (userBmiValue >= 18.5 && userBmiValue <= 24.9) {
        category = 'Normal';
        range = [18.5, 24.9];
    } else if (userBmiValue >= 25 && userBmiValue <= 29.9) {
        category = 'Overweight';
        range = [25, 29.9];
    } else {
        category = 'Obesity';
        range = [30, 100];
    }

    const data = {
        labels: [category],
        datasets: [
            {
                label: 'Category Range',
                data: [range[1]], // Max value of the range
                backgroundColor: '#C47AFF',
                borderColor: '#C47AFF',
                borderWidth: 1
            },
            {
                label: 'Your BMI',
                data: [userBmiValue],
                backgroundColor: '#EB6440',
                borderColor: '#EB6440',
                borderWidth: 1
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: range[1] + 5 
            },
            x: {
                position: 'top',
            }
        },
    };

    return <Bar data={data} options={options} />;
}

export default BmiChart;
