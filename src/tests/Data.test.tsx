import Data from '../components/Data'
import {test, expect} from 'vitest'
import {page} from 'vitest/browser'
import { renderWithProvider } from '../utils/test_utils'

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

      expect(selectYear).toBeVisible();
      expect(turnoverInput).toBeVisible();
      expect(profitInput).toBeVisible();
})
