import '../components/Statistics.css'
import { Chart } from 'chart.js/auto'
import { useEffect, useRef } from 'react';

interface StatisticsProps {
  data: { year: number; turnover: number; profit: number }[];
}
  function Statistics({ data }: StatisticsProps) {

  if (!data || data.length < 3) {
    return <div>No data available for statistics</div>;
  }

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
            borderWidth: 2,
            backgroundColor: ['rgba(102, 0, 255, 1)', 'rgba(0, 34, 255, 1)', 'rgba(0, 102, 255, 1)'],
            barThickness: 50
          }
        ]
      },
      options: {
        responsive: true,
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
            borderWidth: 2,
            backgroundColor: ['rgba(0, 251, 255, 1)', 'rgba(0, 255, 213, 1)', 'rgba(0, 255, 98, 1)'],
            barThickness: 50,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          }

        }
      }
    });

    return () => {
      chart2.destroy();
    };
  }, [data]);

  const canvasRef3 = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() =>{

    if(!canvasRef3.current){
      return;
    }

    const chart3 = new Chart(canvasRef3.current, {
      type: 'bar',
      data: {
        labels: ['2023', '2024'],
        datasets: [
          {
            label: 'Evolution of turnover (%)',
            data: [
             Math.round (((data[1].turnover - data[0].turnover)/ data[0].turnover)*100),
             Math.round (((data[2].turnover - data[1].turnover)/ data[1].turnover)*100)
            ],
            borderWidth: 2,
            backgroundColor: ['rgba(0, 255, 72, 1)', 'rgba(13, 255, 0, 1)'],
            barThickness: 50,
            barPercentage: 1.0
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          }

        }
      }
    });

    return () => {
      chart3.destroy();
    };
  }, [data]);

  const canvasRef4 = useRef<HTMLCanvasElement | null>(null);

  useEffect(() =>{

    if(!canvasRef4.current){
      return;
    }

    const chart4 = new Chart(canvasRef4.current, {
       type: 'bar',
      data: {
        labels: ['2023', '2024'],
        datasets: [
          {
            label: 'Evolution of profit (%)',
            data: [
             Math.round (((data[1].profit - data[0].profit)/ data[0].profit)*100),
             Math.round (((data[2].profit - data[1].profit)/ data[1].profit)*100)
            ],
            borderWidth: 2,
            backgroundColor: ['rgba(255, 238, 0, 1)', 'rgba(255, 179, 0, 1)'],
            barThickness: 50,
            barPercentage: 1.0
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          }

        }
      }
    });

    return () => {
      chart4.destroy();
    };
  }, [data]);

  return (
    <div className='stats_container'>
      <canvas id="chart1" ref={canvasRef1}></canvas>
      <canvas id="chart2" ref={canvasRef2}></canvas>
      <canvas id="chart3" ref={canvasRef3}></canvas>
      <canvas id="chart4" ref={canvasRef4}></canvas>
    </div>
  );
}

export default Statistics;