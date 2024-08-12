import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart: React.FC = () => {
  const data: ChartData<'doughnut'> = {
    labels: ['Work', 'Exercise', 'Leisure', 'Sleep', 'Other'],
    datasets: [
      {
        data: [40, 20, 15, 10, 15], // Replace with your dynamic data
        backgroundColor: [
          '#E64C4C', // Red
          '#444444', // Black
          '#FFBB00', // Yellow
          '#00CFE4', // Blue
          '#F4E1D2', // Cream
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#00CFE4',
          '#F4E1D2',
        ],
        borderWidth: 0, // No borders between segments
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '70%', // This creates the donut hole effect
    plugins: {
      legend: {
        display: true,
        position: 'right', // Make sure this is a valid value
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
