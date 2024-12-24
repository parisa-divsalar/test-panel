import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels)

const DonutChart = ({ shows }) => {
    const data = {
        datasets: [
            {
                data: shows,
                backgroundColor: ['#903EFA', '#FDF46D', '#B30B8C', '#408AD3', '#FB4E22', '#73F47E'],
                borderWidth: 0,
            },
        ],
    }

    const options: any = {
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                display: true,
                formatter: (value: number, context: any) => {
                    const total = context.chart._metasets[0].total
                    const percentage = ((value / total) * 100).toFixed(2)
                    return `${percentage}%`
                },
                color: 'white',
                font: {
                    size: 10,
                },
            },
        },
        cutout: '60%',
    }

    return (
        <div style={{ width: '195px', height: '195px' }}>
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    )
}

export default DonutChart
