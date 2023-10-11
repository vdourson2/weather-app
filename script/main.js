import '../style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { getWeather } from '/script/getData.js'
import { HWeather } from './hourWeather.js';

getWeather()
    .then((d) => {
        console.log(d);
        console.log('dt',d.list[0].dt);
        console.log('timezone', d.city.timezone);
        let t = new Date((d.list[0].dt+d.city.timezone)*1000);
        console.log('toUTCString',t.toUTCString());
        console.log('day',t.getUTCDate());
        console.log('hour',t.getUTCHours());
        let test = new HWeather(d.list[0],d.city.timezone)
        console.log(test)
    });


