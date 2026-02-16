import App from '../components/App.tsx'
import {test, expect} from 'vitest'
import { renderWithProvider } from '../utils/test_utils.tsx';
 
test("Component rendered", () =>{
    const AppComponent = renderWithProvider(<App/>);
    expect(AppComponent).toBeTruthy();
});  

