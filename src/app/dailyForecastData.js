const { createSlice } = require("@reduxjs/toolkit");

let dailySlice=createSlice({
    name:"dailydata",
    initialState:[],
    reducers:{
        loadDailyData:(state,action)=>{
            console.log(action.payload);
            const newArray = action.payload
            return newArray;    
        }
    }
});

export const {loadDailyData}=dailySlice.actions;
export default dailySlice.reducer;