export async function getWeather(place) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&lang=fr&appid=${import.meta.env.VITE_KEY_WEATHERAPP}&units=metric`);
        const json = await response.json();
        //localStorage.setItem("data",JSON.stringify(json));
        console.log(import.meta.env);
        console.log(json);
        return json;

    }
    catch(error) {
        console.log('Erreur : impossible de récupérer les données')
    }
}


//Function to get data from the local storage instead of the Openweather site
// export async function getWeather(place) {
//     try {
//         let json = JSON.parse(localStorage.getItem("data"));
//         console.log(json);
//         return json;
//     }
//     catch(error) {
//         console.log('Erreur : impossible de récupérer les données')
//     }
// }