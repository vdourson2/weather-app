export async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&lang=fr&appid=${import.meta.env.VITE_KEY_WEATHERAPP}&units=metric`);
        const json = await response.json();
        console.log(json);
    }
    catch(error) {
        console.log('Erreur : impossible de récupérer les données')
    }
}