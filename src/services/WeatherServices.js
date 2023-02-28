import axios from 'axios';

const WeatherServices = {

    api_token: "&APPID=82e9fecb68bc9e8d07fe2d4d411140b7",
    base_url: "http://api.openweathermap.org/data/2.5/weather",
    metric: '&units=metric',
    lang: '&lang=fr',

    async getWeather(cityname) {

        const url = this.base_url + '?q=' + cityname + this.api_token + this.metric + this.lang;

        // const response =  await axios.get(url); 

        //  faire l'appel à l'API et récupérer la réponse si elle est ok
        const response = await axios.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                // on envoie l'erreur au composant
                console.log(error);
            });
            
        //  retourner la réponse
        return response;

        // return response.data;

}
}
export default WeatherServices