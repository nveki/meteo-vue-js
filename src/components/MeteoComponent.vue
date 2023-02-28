<template>
  <div class="meteo">
    
    <h3 class="meteo__city">
    
    {{ this.cityname }}
    </h3>
    <img :src="this.imgSrc" alt="" class="meteo__icon" />
    <p class="meteo__description">
    {{ this.description }}
    </p>
    <p class="meteo__temp">
      <span class="meteo__temp--min">
    {{ this.temp_min }}°C
      </span>||
      <span class="meteo__temp--max">
    {{ this.temp_max }}°C
      </span>
    </p>
  </div>
</template>

<script>
import WeatherServices from '../services/WeatherServices.js'
export default {
    name: 'MeteoComponent',
    

    props: {
        city: String
    }, 
    data() {
        return {
            cityname: "",
            weather: "", 
            temp_min: "",
            temp_max: "",
            imgSrc: "",
            description: "",
        };
    },

    async created() {
        const data = await WeatherServices.getWeather(this.city);
        console.log(data);

        this.cityname = data.name;
        this.temp_max = data.main.temp_max;
        this.temp_min = data.main.temp_min;
        this.description = data.weather[0].description;
        this.imgSrc =  "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";


    },

};
</script>

<style scoped lang='scss' >
</style>