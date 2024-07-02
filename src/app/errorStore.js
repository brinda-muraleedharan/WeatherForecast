const { createSlice } = require("@reduxjs/toolkit");

const errorSlice=createSlice({
    name:"errorData",
    initialState:{
        statusCode:200,
        locationName:""
    },
    reducers:{
        setErrorData:(state,action)=>{
            console.log(action.payload);
            return{
                ...state,
                statusCode:action.payload
            }
           
        },
        setLocationName:(state,action)=>{
            console.log(action.payload);
            if(action.payload.name){
                let name=action.payload.name;
                let locName="Your location";
                var loc=name.split(",");
                if(loc.length>1){
                    locName=loc[0]+","+loc[loc.length-1]
                }
                
                return {
                    ...state,
                    locationName:locName}
            }

        }
    }
});
export const {setErrorData,setLocationName}=errorSlice.actions;
export default errorSlice.reducer;