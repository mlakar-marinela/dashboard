import '../components/Score.css';
import { Chart } from 'chart.js/auto';
import { useEffect , useRef  } from 'react';

interface ScoreProps {
    data: {year: number, turnover: number, profit: number}[];
}

function Score ({data}: ScoreProps){

  if (data.length < 3 || data.every((item) => item.turnover === 0)) {
     return <p className='warning'>No data available for scores</p>;
  }

  const avgMargin: number = data.reduce((sum, item) => {
    const margin: number = item.turnover > 0 ? (item.profit / item.turnover) : 0;
    return sum + margin;
  }, 0) / data.length;

  const startTurnover: number = data[0].turnover;
  const endTurnover: number = data[2].turnover;
  const growth: number = startTurnover > 0  ? ((endTurnover - startTurnover) / startTurnover) : 0;
    
  const score: number = Math.min(100, Math.max(0, (avgMargin * 50) + (growth * 50)));
    
  const canvasRef5 = useRef <HTMLCanvasElement | null>(null);

    useEffect (() => {

        if(!canvasRef5.current){
            return;
        }

        const chart5 = new Chart(canvasRef5.current, {
            type: "doughnut",
            data: {
               datasets: [
                {
                    label: 'SCORE',
                    data: [Math.round(score)]
                }
               ]
            },
            options:{
              responsive: true
            }
        });

        return () => {
      chart5.destroy();
    };
  }, [data]);
  
    return (
      <div className='score_container' data-testid = 'score'>
        <canvas id='score_percentage' ref={canvasRef5}></canvas>
      </div>
    )
}

export default Score;