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
        Temp Min:
        {{ this.temp_min }}°C
      </span>
      ||
      <span class="meteo__temp--max">
        Temp Max:
        {{ this.temp_max }}°C
      </span>
    </p>
  </div>
</template>

<script>
import WeatherServices from "../services/WeatherServices.js";
import storage from "@/utils/storage.js";
// import HomeView from "../views/HomeView.vue";
export default {
  name: "MeteoComponent",

  props: {
    city: String,
  },
  data() {
    return {
      cityname: "",
      weather: "",
      temp_min: "",
      temp_max: "",
      imgSrc: "",
      description: "",
      cities: [],
    };
  },
  methods: {
    deleteCity() {
      const cities = storage.get("cities");
      //    supprimer la dernière entrée du tableau du tableau cities
      cities.pop();
      console.log(cities);
    },
  },

  async created() {
    // afficher un message d'erreur si la ville n'existe pas

    const data = await WeatherServices.getWeather(this.city);
    // si la ville n'existe pas on affiche un message d'erreur
    console.log(data);

    // si la ville existe on affiche les données
    if (data) {
      this.cityname = data.name;
      this.temp_max = data.main.temp_max;
      this.temp_min = data.main.temp_min;
      this.description = data.weather[0].description;
      this.imgSrc =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    } else {
        this.cityname = "Ville inconnue";
       if (this.cityname === "Ville inconnue") {
        this.deleteCity();
        }
            }
  },
};
</script>

<style scoped lang='scss' >
</style>