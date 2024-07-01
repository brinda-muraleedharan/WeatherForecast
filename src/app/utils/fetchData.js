import dictstring from "../weathercodes";

let fetchApiData=(options,dispatch,loadHourData,params,loadDailyData,setLocationName,setErrorData)=>{
    let hourTemp=[];
    let dailyTemp=[];
    let errorValue;
    fetch('https://api.tomorrow.io/v4/weather/forecast?apikey=PShPpkTDzWirRosXaLMlCC3v7fa0hMOi&'+params).then(
        response => {
            errorValue=response.status;
            console.log(response.status+"status");
            setErrorData(response.status);
            return response.json()
        }
    ).then(
        json=>{
            if(errorValue==200){
                console.log(json)
            json.timelines.daily.forEach((item) => {
                const date = new Date(item.time);
                const weekday = ["Sun ","Mon ","Tue ","Wed ","Thur ","Fri ","Sat "];
                let tempObj={
                    //val:parseInt(item.values.temperature),
                    tempMax:parseInt(item.values.temperatureMax),
                    tempMin:parseInt(item.values.temperatureMin),
                    code:item.values.weatherCodeMax,
                    //tempFeel:item.values.temperatureApparent,
                    day:weekday[date.getDay()],
                    //time:(date.getHours()>12?(date.getHours()-12)+"pm":date.getHours()+"am")
                }
                tempObj.desc=dictstring[tempObj.code]
                dailyTemp.push(tempObj);
            });
            dispatch(loadDailyData([...dailyTemp]));
            let hourData=json.timelines.hourly
            for(let i=0;i<6;i++){
                let item=hourData[i]
                const date = new Date(item.time);
                let tempObj={
                    val:parseInt(item.values.temperature),
                    code:(date.getHours()>18)?item.values.weatherCode+"1":item.values.weatherCode+"0",
                    tempFeel:item.values.temperatureApparent,
                    time:(date.getHours()>12?(date.getHours()-12)+"pm":date.getHours()+"am")
                }
                tempObj.desc=dictstring[tempObj.code]
              hourTemp.push(tempObj);
            }
            dispatch(loadHourData([...hourTemp]));
            dispatch(setLocationName(json.location))
            }
            }
    ).catch(err => console.error(err));

}
export default fetchApiData;