import '../components/App.css';
import Data from '../components/Data.tsx';
import Statistics from '../components/Statistics.tsx';
import Score from '../components/Score.tsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../state_management/store';

function App() {
  const financialDatas = useSelector((state:RootState) => state.data_update.financialDatas );
  
  const [showDataView, setShowDataView] = useState(false);
  const [showStatsView, setShowStatsView] = useState(false);
  const [showScoreView, setShowScoreView] = useState(false);

  const showData = () => {
    setShowDataView(true);
    setShowStatsView(false);
    setShowScoreView(false);
  };

  const showStats = () => {
    setShowDataView(false);
    setShowStatsView(true);
    setShowScoreView(false);
  };

  const shoWScore = () => {
     setShowDataView(false);
     setShowStatsView(false);
     setShowScoreView(true);   
  };

  return (
    <main className="App">

      <div className='before-nav-bar-display'>
        <input type="button" id='menu_btn' value="☰"/>
      </div>
      
      <div className="nav-bar" id='menu_bar'>
          <button onClick={showData}><span>Data</span></button>
          <button onClick={showStats}><span>Performance</span></button>
          <button onClick={shoWScore}><span>Score</span></button>
      </div>

      {showDataView && (
        <div id="data_entry_container">
          <Data />
        </div>
      )}
      {showStatsView && (
        <div id="container_for_stats">
          <Statistics data={financialDatas} />
        </div>
      )}
      {showScoreView && (
        <div id="scoring_container">
          <Score data={financialDatas} />
        </div>
      )}

    </main>
  );
}

export default App ;
