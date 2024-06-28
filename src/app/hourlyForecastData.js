const { createSlice } = require("@reduxjs/toolkit");

const hourlySlice=createSlice({
    name:"hourlydata",
    initialState:[],
    reducers:{
        loadHourData:(state,action)=>{
            console.log(action.payload);
            const newArray = action.payload
            return newArray;
        }
    }
});
export const {loadHourData}=hourlySlice.actions;
export default hourlySlice.reducer;