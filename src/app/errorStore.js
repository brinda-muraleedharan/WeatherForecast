const { createSlice } = require("@reduxjs/toolkit");

const errorSlice=createSlice({
    name:"errorData",
    initialState:{
        statusCode:400,
        locationName:""
    },
    reducers:{
        setErrorData:(state,action)=>{
            console.log(action.payload);
           
        },
        setLocationName:(state,action)=>{
            console.log(action.payload);
            if(action.payload.name){
                var loc=action.payload.name.split(",")
                return {
                    ...state,
                    locationName:loc[0]+","+loc[loc.length-1]}
            }

        }
    }
});
export const {setErrorData,setLocationName}=errorSlice.actions;
export default errorSlice.reducer;