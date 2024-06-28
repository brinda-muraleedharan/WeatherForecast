const weatherMap=new Map();
    weatherMap.set(1000,'☀️');
    weatherMap.set(10000,'☀️');
    weatherMap.set(10001,'🌙');
    weatherMap.set(1100,'🌤️');
    weatherMap.set(11000,'🌤️');
    weatherMap.set(11001,'🌙');
    weatherMap.set(1101,'⛅');
    weatherMap.set(11010,'⛅');
    weatherMap.set(11011,'🌙');
    weatherMap.set(1102,'🌥️');
    weatherMap.set(11020,'🌥️');
    weatherMap.set(11021,'🌙');
    weatherMap.set(1001,'☁️');
    weatherMap.set(10010,'☁️');
    weatherMap.set(10011,'☁️');
    weatherMap.set(1103,'🌥️');
    weatherMap.set(11030,'🌥️');
    weatherMap.set(11031,'🌙');
    weatherMap.set(2100,'🌫️');
    weatherMap.set(21000,'🌫️');
    weatherMap.set(21001,'🌙');

let getWeatherDict=(code)=>{
    
    return weatherMap.get(code);
}
export default getWeatherDict;