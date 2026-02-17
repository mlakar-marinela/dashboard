import App from '../components/App.tsx'
import {test, expect} from 'vitest'
import { page } from 'vitest/browser';
import { renderWithProvider } from '../utils/test_utils.tsx';
 
test("Component rendered", () =>{
    const AppComponent = renderWithProvider(<App/>);
    expect(AppComponent).toBeTruthy();
});  

test("Data component should render on click", async () => {
  renderWithProvider(<App />)

  const button = page.getByRole('button', { name: /data/i });
  await button.click();

  const dataComponent = page.getByTestId('financial_data_form');
  await expect(dataComponent).toBeVisible();
})

test("Statistics component should render on click", async () => {
  renderWithProvider(<App />)

  const button = page.getByRole('button', { name: /performance/i });
  await button.click();

  const statisticsComponent = page.getByTestId('statistics');
  await expect(statisticsComponent).toBeVisible();
})

test("Score component should render on click", async () => {
  renderWithProvider(<App />)

  const button = page.getByRole('button', { name: /score/i });
  await button.click();

  const statisticsComponent = page.getByTestId('score');
  await expect(statisticsComponent).toBeVisible();
})