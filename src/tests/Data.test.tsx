import Data from '../components/Data.tsx'
import {test, expect} from 'vitest'
import {page} from 'vitest/browser'
import { renderWithProvider } from '../utils/test_utils.tsx'
import reducer, {changing_data} from '../state_management/dataSlice.ts'

test("Form labels should be visible", async() =>{
    await renderWithProvider(<Data/>);

    const yearLabel = page.getByText('Year');
    const turnoverLabel = page.getByText('Turnover');
    const profitLabel = page.getByText('Profit');
        
    expect(yearLabel).toBeVisible();
    expect(turnoverLabel).toBeVisible();
    expect(profitLabel).toBeVisible();
});

test("All types of inputs should be visible", async() => {
      await renderWithProvider(<Data/>);
      
      const selectYear = page.getByPlaceholder('Write the turnover');
      const turnoverInput = page.getByPlaceholder('Write the turnover');
      const profitInput = page.getByPlaceholder('Write the profit');
      const submitButton = page.getByTestId("submit_button");

      expect(selectYear).toBeVisible();
      expect(turnoverInput).toBeVisible();
      expect(profitInput).toBeVisible();
      expect(submitButton).toBeVisible();
});

test("Reducer should update turnover and profit correctly", () => {

  const initialState = {
    financialDatas: [
      { year: 2022, turnover: 0, profit: 0 },
      { year: 2023, turnover: 0, profit: 0 },
      { year: 2024, turnover: 0, profit: 0 }
    ]
  };

  const action = changing_data({
    year: 2022,
    turnover: 500,
    profit: 100
  });

  const newState = reducer(initialState, action);

  const updatedFinancialData = newState.financialDatas.find(data => data.year === 2022);

  expect(updatedFinancialData?.turnover).toBe(500);
  expect(updatedFinancialData?.profit).toBe(100);
});
