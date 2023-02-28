<template>
  <h1>Météo</h1>

  <label for="citylist">Liste des villes: </label>
  <input
  v-model="this.cities_input"
  @keypress="updateCities()" type="text" id="citylist" name="citylist" placeholder="Ville1; Ville2; Ville3" />  <button @click="saveInLs(cities)">Enregistrer</button>

  <MeteoComponent
  v-for="city of this.cities"
  :city="city"
  :key="city"
  />
</template>
 
<script>
import MeteoComponent from "../components/MeteoComponent.vue";
import storage from "@/utils/storage.js"; 
export default {
  name: "HomeView",

  components: {
    MeteoComponent,
  },
  created() {
    const cities = storage.get("cities");
    if(this.cities) {
      this.cities = cities;
    }

  },

  methods: {
    updateCities() {
      this.cities = this.cities_input.split(";");
    },
    saveInLs(cities) {
      storage.set("cities", cities);
    },
  },
  data() {
    return {
      cities_input: "",
      cities: [],
    };
    
  },
};
</script>
