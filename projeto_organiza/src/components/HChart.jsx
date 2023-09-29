import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { plugins } from "../../postcss.config";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const HChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Despesas', 'Metas', 'Saldo Atual', 'Receitas'],
            datasets: [
                {
                    label: '# of Votes',
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
            <div className=" flex flex-row w-full md:col-span-2 lg:h-[50vh] h-[60vh] a-auto p-4" >
                <Doughnut data={chartData} options={chartOptions} plugins={[plugins]}
                 />
            </div>
        </>
    )
}

export default HChart