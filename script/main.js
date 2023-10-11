import '../style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { getWeather } from '/script/getData.js'
import { HWeather } from './hourWeather.js';

getWeather()
    .then((d) => {
        let wrapForecast = document.querySelector('.wrapForecast');
        let listNb = 0;
        for (let i=1; i<6; i++){

            let day = document.createElement('div');
            day.classList.add('wrapForecast__day');
            wrapForecast.appendChild(day);
            
            let limit = 3;
            for (let j=1; j<9;j++){
                let HourForecast = new HWeather(d.list[listNb],d.city.timezone);
                if (HourForecast.hour >= limit) { //remplacer par un while
                    day.innerHTML += '<div class="wrapForecast__day__wrapHour"></div>';
                }
                else {
                    day.innerHTML += HourForecast.display();
                    listNb++;
                }
                limit +=3;
            }
        }
        // console.log(new HWeather(d.list[0],d.city.timezone))
        
    });


