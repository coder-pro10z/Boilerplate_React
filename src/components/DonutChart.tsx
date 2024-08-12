// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';


// const DonutChart: React.FC = () => {
//   const data: ChartData<'doughnut'> = {
//     labels: ['Work', 'Exercise', 'Leisure', 'Sleep', 'Other'],
//     datasets: [
//       {
//         data: [40, 20, 15, 10, 15], // Replace with your dynamic data
//         backgroundColor: [
//           '#E64C4C', // Red
//           '#444444', // Black
//           '#FFBB00', // Yellow
//           '#00CFE4', // Blue
//           '#F4E1D2', // Cream
//         ],
//         hoverBackgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#00CFE4',
//           '#F4E1D2',
//         ],
//         borderWidth: 0, // No borders between segments
//       },
//     ],
//   };

//   const options: ChartOptions<'doughnut'> = {
//     cutout: '70%', // This creates the donut hole effect
//     plugins: {
//       legend: {
//         display: true,
//         position: 'right', // Make sure this is a valid value
//       },
//     },
//   };

//   return <Doughnut data={data} options={options} />;
// };

// export default DonutChart;
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js/auto'; // Import the types
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  areas: { area: string, hours: number }[]; // Define the type of the prop
}

const DonutChart: React.FC<DonutChartProps> = ({ areas }) => {
  const data = {
    labels: areas.map(area => area.area), // Extract labels from areas prop
    datasets: [
      {
        data: areas.map(area => area.hours), // Extract data from areas prop
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '70%',
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '25vw', height: '25vw' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;

