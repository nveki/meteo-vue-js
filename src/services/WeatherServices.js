import axios from 'axios';

const WeatherServices = {

    api_token: "&APPID=9aa66ec203900861f1753bf628f457c8",
    base_url: "http://api.openweathermap.org/data/2.5/weather",
    metric: '&units=metric',
    lang: '&lang=fr',

    async getWeather(cityname) {
        const url = this.base_url + '?q=' + cityname + this.api_token + this.metric + this.lang;

        const response =  await axios.get(url);
        return response.data;
    } 

}
export default WeatherServices