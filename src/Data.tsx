import './Data.css';
import { useDispatch, useSelector } from 'react-redux';
import { changing_data } from './dataSlice';
import type { RootState, AppDispatch } from './store';

function Data() {
  const dispatch = useDispatch<AppDispatch>();
  const financialDatas = useSelector((state: RootState) => state.data_update.financialDatas);

  function handleSubmit(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();

    const year = Number((document.getElementById("yearOptions") as HTMLSelectElement).value);
    const turnover = Number((document.getElementById("data2") as HTMLInputElement).value);
    const profit = Number((document.getElementById("data3") as HTMLInputElement).value);

    dispatch(changing_data({year, turnover,profit}));
    console.log(financialDatas);
  }
  return (
    <form>
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
      <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
  );
}
export default Data