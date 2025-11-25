import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { objData } from "./dataObjects";


const financialData1 : objData = {year:2022,turnover:0,profit:0};
const financialData2 : objData = {year:2023,turnover:0,profit:0};
const financialData3 : objData = {year:2024,turnover:0,profit:0};
export const financialDatas  = [financialData1, financialData2, financialData3];

export const dataUpdate = createSlice({
    name: 'data_update',
    initialState: {
        financialDatas
    },
    reducers: {
      changing_data: (
        state,
        action: PayloadAction<{year:number, turnover:number, profit:number}>
       )  =>{
        const item = state.financialDatas.find((input) => input.year === action.payload.year);
          if(item){
            item.turnover = action.payload.turnover;
            item.profit = action.payload.profit;
          }
       },
    },
});

export const {changing_data} = dataUpdate.actions;
export default dataUpdate.reducer;