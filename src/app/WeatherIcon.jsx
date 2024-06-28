import React from "react";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayCloudyHigh,
  WiDayFog,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiFog,
  WiMoonAltWaningCrescent1,
  WiNightAltCloudy,
  WiNightAltCloudyHigh,
  WiNightClear,
  WiNightFog,
  WiNightPartlyCloudy,
  WiRain,
  WiRainMix,
  WiShowers,
  WiSprinkle,
} from "react-icons/wi";

function WeatherIcon({ code=1000 }) {
  let getWeatherIcon = (code) => {
    let weather;
    console.log(code);
    switch (code) {
      case 1000:
      case 10000:
      case 10001:
        weather = "Clear";
        break;
      case 1100:
      case 11000:
      case 11001:
        weather = "Mostly Clear";
        break;
      case 1101:
      case 11010:
      case 11011:
        weather = "Partly Cloudy";
        break;
      case 1102:
      case 11020:
      case 11021:
        weather = "Mostly Cloudy";
        break;
      case 1103:
      case 11030:
      case 11031:
        weather = "Mostly Clear";
        break;
      case 1001:
      case 10010:
      case 10011:
        weather = "Cloudy";
        break;

      case 2100:
      case 21000:
      case 21001:
        weather = <img src="/icons/21000_fog_light_large.png" />;
        break;
      case 2000:
      case 20000:
      case 20001:
        weather = <img src="/icons/20000_fog_large.png" />;
        break;
      case 2101:
      case 21010:
        weather = <img src="/icons/21010_fog_light_mostly_clear_large.png" />;
        break;
      case 21011:
        weather = <img src="/icons/21011_fog_light_mostly_clear_large.png" />;
        break;
      case 2102:
      case 21020:
        weather = <img src="icons/21020_fog_light_partly_cloudy_large.png" />;
        break;
      case 21021:
        weather = <img src="/icons/21021_fog_light_partly_cloudy_large.png" />;
        break;
      case 2103:
      case 21030:
        weather = <img src="/icons/21030_fog_light_mostly_cloudy_large.png" />;
        break;
      case 2106:
      case 21060:
        weather = <img src="/icons/21060_fog_mostly_clear_large.png" />;
        break;
      case 2107:
      case 21070:
        weather = <img src="/icons/21070_fog_partly_cloudy_large.png" />;
        break;
      case 2108:
      case 21080:
        weather = <img src="/icons/21080_fog_mostly_cloudy_large.png" />;
        break;
      case 21031:
        weather = <img src="/icons/21031_fog_light_mostly_cloudy_large.png" />;
        break;
      case 21061:
        weather = <img src="/icons/21061_fog_mostly_clear_large.png" />;
        break;
      case 21071:
        weather = <img src="/icons/21071_fog_partly_cloudy_large.png" />;
      case 21081:
        weather = <img src="/icons/21081_fog_mostly_cloudy_large.png" />;
        break;
      case 4000:
      case 40000:
      case 40001:
        weather = <img src="/icons/40000_drizzle_large.png" />;
        break;
      case 4200:
      case 42000:
      case 42001:
        weather = <img src="icons/42000_rain_light_large.png" />;
        break;
      case 4001:
      case 40010:
      case 40011:
        weather = <img src="/icons/40010_rain_large.png" />;
        break;
      case 4201:
      case 42010:
      case 42011:
        weather = <img src="/icons/42010_rain_heavy_large.png" />;
        break;
      case 4203:
      case 42030:
        weather = <img src="/icons/42030_drizzle_mostly_clear_large.png" />;
        break;
      case 42031:
        weather = <img src="/icons/42031_drizzle_mostly_clear_large.png" />;
        break;
      case 4201:
      case 42010:
      case 42011:
        weather = <img src="/icons/42010_rain_heavy_large.png" />;
        break;
      case 4201:
      case 42010:
      case 42011:
        weather = <img src="/icons/42010_rain_heavy_large.png" />;
        break;
      case 4201:
      case 42010:
      case 42011:
        weather = <img src="/icons/42010_rain_heavy_large.png" />;
        break;
      case 4201:
      case 42010:
      case 42011:
        weather = <img src="/icons/42010_rain_heavy_large.png" />;
        break;
      case 4201:
      case 42010:
      case 42011:
        weather = <img src="/icons/42010_rain_heavy_large.png" />;
        break;
      default:
        weather = <img src="11011_partly_cloudy_large.png" />;
    }
    return weather;
  };
  return <img src={"/icons/" + code + ".png"} />;
}

export default WeatherIcon;
