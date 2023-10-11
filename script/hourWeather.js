export class HWeather {
    constructor(objectFromArray, timeZone){
        let time = new Date((objectFromArray.dt+timeZone)*1000);
        this.date = time.toLocaleDateString('fr-FR',{day:"2-digit"});
        this.hour = time.toLocaleTimeString('fr-FR',{hour:'numeric'});
        this.humidity = objectFromArray.main.humidity;
        this.icon = objectFromArray.weather[0].icon;
        this.temp = objectFromArray.main.temp;
    }
    // displayHWeather(){
    //     return this.;

    // }
}