import './Score.css'
import { Chart } from 'chart.js/auto'
import { useEffect , useRef  } from 'react'

interface ScoreProps {
    data: {year: number, turnover: number, profit: number}[];
}

function Score ({data}: ScoreProps){
   
    if (!data || data.length < 3) {
    return <div>No data available for scores</div>;
  }

    let averageTurnover : number = (data[0].turnover + data[1].turnover + data[2].turnover)/3;
    let averageProfit : number = (data[0].profit + data[1].profit + data[2].profit)/3;
    let profitMargin : number = averageProfit / averageTurnover; 
    
    console.log(averageTurnover, averageProfit, profitMargin);
    

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
                    data: [Math.round(profitMargin*100)]
                }
               ]
            }
        });

        return () => {
      chart5.destroy();
    };
  }, [data]);
  
    return (
      <div className='score_container'>
        <canvas id='score_percentage' ref={canvasRef5}></canvas>
      </div>
    )
}

export default Score;