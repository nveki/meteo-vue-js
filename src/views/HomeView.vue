<template>
  <h1>Météo</h1>

  <label for="citylist">Liste des villes: </label>
  <input
  @keyup.enter="saveInLs(cities)"
    v-model="this.cities_input"
   type="text" id="citylist" name="citylist" placeholder="Ville1; Ville2; Ville3" />
  <button @click="saveInLs(cities)">Ajouter aux favoris</button>
  <button @click="resetFav()">Reset</button>

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
      // si la ville n'est pas déjà dans le tableau on l'ajoute et si le champ contient au moins une lettre

      if (!this.cities.includes(this.cities_input)){
              this.cities.push(this.cities_input);
      }
      //on vide le champs input

      this.cities_input = "";


    },
    saveInLs(cities) {
      
      this.updateCities();
      storage.set("cities", cities);
    },
    resetFav() {
      storage.unset("cities");
      this.cities = [];
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
