const { createSlice } = require("@reduxjs/toolkit");

const locationSlice = createSlice({
  name: "location",
  initialState: {
  },
  reducers: {
    changeLocation: (state, action) => {
        console.log(action)
        
        if(action.payload.longitude){
          state.locationValue="";
          state.longitude = action.payload.longitude;
          state.latitude = action.payload.latitude; //not mutating here
        }else{
          state.locationValue=action.payload.locationValue;
          state.longitude = 0;
          state.latitude = 0; 
        }
     
    },
  },
});
export const {changeLocation} = locationSlice.actions;
export default locationSlice.reducer;
