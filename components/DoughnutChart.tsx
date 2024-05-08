'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 5200, 4210],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }
    ],
    labels: [
      'Bank of America',
      'Chase',
      'Wells Fargo'
    ]
  };
  return (
    <>
    <Doughnut data={data} />
    </>
  )
}

export default DoughnutChart;