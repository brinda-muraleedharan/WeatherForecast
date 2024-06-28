import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./location.js";
import hourdataReducer from "./hourlyForecastData.js";
import dailydataReducer from './dailyForecastData.js';
export default configureStore({
  reducer: {
    location: locationReducer,
    hourlydata:hourdataReducer,
    dailydata:dailydataReducer
  },
});
