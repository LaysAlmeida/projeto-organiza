import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

<<<<<<< HEAD
  useEffect(() => {
    setChartData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Imobiliaria',
          data: [1827, 2201, 1490, 1998, 2410, 1942, -275],
          backgroundColor: 'rgb(255, 99, 132)',
          stack: 'Stack 0',
        },
        {
          label: 'Farmácia',
          data: [-1812, -2221, -1390, -1798, -2182, -1742, 2275],
          backgroundColor: 'rgb(75, 192, 192)',
          stack: 'Stack 0',
        },
        {
          label: 'Mercadinho',
          data: [187, 201, 490, 938, 282, 172, 225],
          backgroundColor: 'rgb(53, 162, 235)',
          stack: 'Stack 1',
        },
      ]
    })
    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: 'Últimas Despesas',
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    })
  }, [])
=======
    useEffect(() => {
        setChartData({
            labels: ['Despesas', 'Metas', 'Saldo Atual', 'Receitas'],
            datasets: [
                {
                    data: [6, 6, 8, 12],
                    borderColor: [
                        'rgba(43, 135, 227, 1)',
                        'rgba(87, 208, 122, 1)',
                        'rgba(159, 67, 204, 1)',
                        'rgba(235, 161, 15, 1)',
                    ],
                    backgroundColor: [
                        'rgba(43, 135, 227, 1)',
                        'rgba(87, 208, 122, 1)',
                        'rgba(159, 67, 204, 1)',
                        'rgba(235, 161, 15, 1)',
                    ],
                    color: [
                        'rgba(255, 255, 255, 1)'
                    ]
                },
            ],
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                labels: {
                    color: "white",
                },
                

                title: {
                    display: true,
                    text: 'Seu Patrimônio',
                    color: 'rgba(255, 255, 255, 1)'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        }
         }
         )
    },
    
    [])
    return (
        <>
            <div className=" flex flex-row w-3/12 md:col-span-2 relative lg:h-[40vh] sm:h-[30vh] a-auto p-4" >
                <Doughnut data={chartData} options={chartOptions} plugins={[plugins]}
                 />
            </div>
        </>
    )
}
>>>>>>> 4790ca8457b55af8f67a607f2211b8ad53325105

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;