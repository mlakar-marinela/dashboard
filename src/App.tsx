import './App.css';
import Data from './Data';
import Statistics from './Statistics';
import { useState } from 'react';
import { finDatas } from './dataObjects';

function App() {
  const [showDataView, setShowDataView] = useState(false);
  const [showStatsView, setShowStatsView] = useState(false);

  const showData = () => {
    setShowDataView(true);
    setShowStatsView(false);
  };

  const showStats = () => {
    setShowStatsView(true);
    setShowDataView(false);
  };

  return (
    <div className="App">
      <div className="nav-bar">
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={showData}><span>Data</span></button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={showStats}><span>Statistics</span></button>
              </td>
            </tr>
            <tr>
              <td>
                <button><span>Performance</span></button>
              </td>
            </tr>
            <tr>
              <td>
                <button><span>Score</span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showDataView && (
        <div id="container1">
          <Data />
        </div>
      )}
      {showStatsView && (
        <div id="container2">
          <Statistics data={finDatas} />
        </div>
      )}

    </div>
  );
}

export default App;
