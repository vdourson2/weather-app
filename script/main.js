import '../style.scss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { getWeather } from './getData.js'
import { HWeather } from './hourWeather.js';

let input = document.querySelector('.header__input');
input.addEventListener('keyup', (e) => {
    if (e.code == "Enter") {
        document.querySelector('.header__place').textContent = `Meteo in ${e.target.value}`;
        let wrapForecast = document.querySelector('.wrapForecast');
        let wrapChildren = wrapForecast.children;//Faire une fonction séparée pour supprimer les éléments
        while (wrapChildren.length>0) {
            wrapForecast.removeChild(wrapChildren[0]);
        }
        getWeather(e.target.value).then((d) => {
            e.target.value = '';
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
    }
})


