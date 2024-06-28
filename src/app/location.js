const { createSlice } = require("@reduxjs/toolkit");

const locationSlice = createSlice({
  name: "location",
  initialState: {
  },
  reducers: {
    changeLocation: (state, action) => {
        console.log(action)
      state.longitude = action.payload.longitude;
      state.latitude = action.payload.latitude; //not mutating here
    },
  },
});
export const {changeLocation} = locationSlice.actions;
export default locationSlice.reducer;
