import dictstring from "../weathercodes";
let fetchApiData=async(options,dispatch,loadHourData,params,loadDailyData,setLocationName,setErrorData)=>{
    let hourTemp=[];
    let dailyTemp=[];
    let errorValue;
    let timeZone;
    fetch('https://api.tomorrow.io/v4/weather/forecast?apikey=PShPpkTDzWirRosXaLMlCC3v7fa0hMOi&'+params).then(
        response => {
            errorValue=response.status;
            console.log(response.status+"statusCode1");
            dispatch(setErrorData(response.status));
            
            return response.json()
        }
    ).then(
        async json=>{
            if(errorValue==200){
                console.log(json);
                let res=await fetch(`http://api.geonames.org/timezoneJSON?lng=${json.location.lon}&lat=${json.location.lat}&username=bmuralee`)
                if (!res.ok) {
                    console.log(res.statusText);
                  }
                  const t = await res.json();
                  timeZone= await t.timezoneId;
                json.timelines.daily.forEach((item) => {
                const date = new Date(item.time);
                const day=date.toLocaleDateString("en-US", {timeZone:timeZone,weekday: "short"});
                let tempObj={
                    tempMax:parseInt(item.values.temperatureMax),
                    tempMin:parseInt(item.values.temperatureMin),
                    code:item.values.weatherCodeMax,
                    day:day
                }
                tempObj.desc=dictstring[tempObj.code]
                dailyTemp.push(tempObj);
            });
            dispatch(loadDailyData([...dailyTemp]));
            let hourData=json.timelines.hourly
            for(let i=0;i<6;i++){
                let item=hourData[i]
                const date = new Date(item.time);
                console.log(date.toLocaleString("en-US", {timeZone:timeZone,hour: "2-digit"}))
                const time=date.toLocaleString("en-US", {timeZone:timeZone,hour: "2-digit",hourCycle: "h24"});
                let tempObj={
                    val:parseInt(item.values.temperature),
                    code:(time>18||time<6)?item.values.weatherCode+"1":item.values.weatherCode+"0",
                    tempFeel:item.values.temperatureApparent,
                    time:time
                }
                tempObj.desc=dictstring[tempObj.code]
              hourTemp.push(tempObj);
            }
            dispatch(loadHourData([...hourTemp]));
            dispatch(setLocationName(json.location))
            }
            }
    ).catch(err => console.error(err+"this"));

}
export default fetchApiData;