import '../components/Data.css';
import { useDispatch, useSelector } from 'react-redux';
import { changing_data } from '../state_management/dataSlice';
import type { RootState, AppDispatch } from '../state_management/store';
import { useRef } from 'react';

function Data() {

  const dispatch = useDispatch<AppDispatch>();
  const financialDatas = useSelector((state: RootState) => state.data_update.financialDatas);
  const dataProgressBar = useRef<HTMLDivElement | null>(null);
  let dataIndex = useRef(0);
  let progressText = useRef<HTMLSpanElement |null>(null);

  function handleSubmit(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();

    if(progressText.current){
       progressText.current.style.display = 'flex';
    }

    const year = Number((document.getElementById("yearOptions") as HTMLSelectElement).value);
    const turnover = Number((document.getElementById("data2") as HTMLInputElement).value);
    const profit = Number((document.getElementById("data3") as HTMLInputElement).value); 
    
    dispatch(changing_data({year,turnover,profit}));

    if(dataProgressBar.current){
      dataProgressBar.current.style.display = 'flex';
       for(let i=0; i< financialDatas.length; i++){
         if(year === financialDatas[i].year){
          dataIndex.current = i+1;
         }
       }
       dataProgressBar.current.style.width = `${(dataIndex.current/3)*100}%`;
       console.log(financialDatas,dataProgressBar.current.style.width);
    }

  }
  return (
    <form data-testid = 'financial_data_form'>
      <div id='data_entry_progress_bar' ref={dataProgressBar}></div>
      <span id='progress_text' ref={progressText}>{dataIndex.current} out of 3</span>
      <label>Year</label>
      <select id ="yearOptions">
        <option value = {financialDatas[0].year}>2022</option>
        <option value = {financialDatas[1].year}>2023</option>
        <option value = {financialDatas[2].year}>2024</option>
      </select>
      <label>Turnover</label>
      <input type="text" id="data2"  placeholder="Write the turnover"/>
      <label>Profit</label>
      <input type="text" id="data3" placeholder="Write the profit"/>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
}
export default Data;