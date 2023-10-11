export async function getWeather() {
    try {
        console.log(import.meta.env);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&lang=fr&appid=${import.meta.env.VITE_KEY_WEATHERAPP}&units=metric`);
        const json = await response.json();
        //localStorage.setItem("data",JSON.stringify(json));
        console.log(json);
        return json;

    }
    catch(error) {
        console.log('Erreur : impossible de récupérer les données')
    }
}