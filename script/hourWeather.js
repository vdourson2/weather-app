export class HWeather {
    constructor(objectFromArray, timeZone){
        let time = new Date((objectFromArray.dt+timeZone)*1000);
        this.day = time.toUTCString().split(',')[0];
        this.date = time.getUTCDate();
        this.hour = time.getUTCHours();
        this.humidity = objectFromArray.main.humidity;
        this.icon = objectFromArray.weather[0].icon;
        this.temp = Math.round(objectFromArray.main.temp);
    }
    display() {
        return `<div class="wrapForecast__day__wrapHour">
                    <p class="wrapForecast__day__wrapHour__hour">${this.hour}h</p>
                    <p class="wrapForecast__day__wrapHour__humidity">${this.humidity}%</p>
                    <img class="wrapForecast__day__wrapHour__icon" src=" http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="icon of the forecast for the hour">
                    <p class="wrapForecast__day__wrapHour__temp">${this.temp}°</p>
                </div>`
    }
}