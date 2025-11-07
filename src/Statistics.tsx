import './Statistics.css'
import { Chart } from 'chart.js/auto'
import { useEffect, useRef } from 'react';

interface StatisticsProps {
  data: { year: number; turnover: number; profit: number }[];
}

function Statistics({ data }: StatisticsProps) {
  const canvasRef1 = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef1.current) {
      return;
    }

    const chart1 = new Chart(canvasRef1.current, {
      type: 'bar',
      data: {
        labels: ['2022', '2023', '2024'],
        datasets: [
          {
            label: 'Turnover',
            data: [
              data[0].turnover,
              data[1].turnover,
              data[2].turnover
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      chart1.destroy();
    };
  }, [data]);

  const canvasRef2 = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef2.current) {
      return;
    }

    const chart2 = new Chart(canvasRef2.current, {
      type: 'bar',
      data: {
        labels: ['2022', '2023', '2024'],
        datasets: [
          {
            label: 'Profit',
            data: [
              data[0].profit,
              data[1].profit,
              data[2].profit
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      chart2.destroy();
    };
  }, [data]);

  return (
    <div className='stats_container'>
      <canvas id="chart1" ref={canvasRef1}></canvas>
      <canvas id="chart2" ref={canvasRef2}></canvas>
    </div>
  );
}

export default Statistics;
