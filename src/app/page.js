"use client"; // This is a client component
import WeatherApp from "./WeatherApp";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    </div>
  );
}
