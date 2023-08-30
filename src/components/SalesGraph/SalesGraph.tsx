import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
);

export const data = {
  labels: ['182', '183', '184', '185', '186', '187'],
  datasets: [
    {
      label: 'Vendas',
      data: [1, 2, 0, 4, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const SalesGraph = () => {
  return (
    <Pie
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
      }}
    />
  );
};

export default SalesGraph;
