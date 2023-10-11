import '../style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { getWeather } from '/script/getData.js'
import { HWeather } from './hourWeather.js';

getWeather()
    .then((d) => {
        let wrapForecast = document.querySelector('.wrapForecast');
        let listNb = 0;
        let limit = 3;
        for (let j=1; j<6; j++){

            let day = document.createElement('div');
            day.classList.add('wrapForecast__day');
            wrapForecast.appendChild(day);
            
            for (let h=1; h<9;h++){
                let HourForecast = new HWeather(d.list[listNb++],d.city.timezone);
                while (HourForecast.hour >= limit){
                    day.innerHTML += '<div class="wrapForecast__day__wrapHour"></div>';
                    limit +=3;
                    h++;
                }
                day.innerHTML += HourForecast.display();
                limit +=3;
            }
        }
        
    });


