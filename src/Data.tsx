import './Data.css';
import { finDatas } from './dataObjects';

function Data() {
  
  function handleSubmit (event: React.MouseEvent<HTMLInputElement>){
    event.preventDefault();

    const data1= Number((document.getElementById('yearOptions') as HTMLSelectElement).value);
    const data2 = (document.getElementById('data2') as HTMLInputElement).value;
    const data3 = (document.getElementById('data3') as HTMLInputElement).value;
  
    const finData = finDatas.find((item) => item.year === data1);
   if (finData){
      finData.turnover = Number(data2);
      finData.profit = Number(data3);
    console.log('Year', data1, ' :', finData);   
    }
     else{
      console.log("Error in matching the year");
     }
  console.log(finDatas);
  }
  return (
    <form>
      <label>Year</label>
      <select id ="yearOptions">
        <option value = '2022'>2022</option>
        <option value = '2023'>2023</option>
        <option value = '2024'>2024</option>
      </select>
      <label>Turnover</label>
      <input type="text" id="data2" placeholder="Write the turnover"/>
      <label>Profit</label>
      <input type="text" id="data3" placeholder="Write the profit"/>
      <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
  );
}
export default Data