import dictstring from "../weathercodes";

let fetchApiData=(options,dispatch,loadHourData,)=>{
    let hourTemp=[];
    fetch('https://api.tomorrow.io/v4/timelines?apikey=PShPpkTDzWirRosXaLMlCC3v7fa0hMOi', options).then(
        response => response.json()
    ).then(
        json=>{
            json.data.timelines[0].intervals.forEach((item) => {
                const date = new Date(item.startTime);
                const weekday = ["Sun ","Mon ","Tue ","Wed ","Thur ","Fri ","Sat "];
                let tempObj={
                    val:parseInt(item.values.temperature),
                    tempMax:parseInt(item.values.temperatureMax),
                    tempMin:parseInt(item.values.temperatureMin),
                    code:((item.startTime.split("T")[1].split(":")[0])>18||(item.startTime.split("T")[1].split(":")[0])<6)?item.values.weatherCode+"1":item.values.weatherCode+"0",
                    tempFeel:item.values.temperatureApparent,
                    day:weekday[date.getDay()],
                    time:(item.startTime.split("T")[1].split(":")[0])>12?parseInt(item.startTime.split("T")[1].split(":")[0])-12+"pm":parseInt(item.startTime.split("T")[1].split(":")[0])+"am"
                }
                tempObj.desc=dictstring[tempObj.code]
              hourTemp.push(tempObj);
            });
            dispatch(loadHourData([...hourTemp]));
            }
    ).catch(err => console.error(err));

}
export default fetchApiData;