<script src='../js/App.js'></script>

<template>
  <div>
    <label>
      AutoComplete
      <GmapAutocomplete @place_changed="setPlace">
      </GmapAutocomplete>
      <button @click="usePlace">Add</button>
    </label>
    <br/>
    <GmapMap id="map" style="width: 100vh; height: 100vh;" v-bind:zoom="1" v-bind:center="{lat: 0, lng: 0}">
     <GmapMarker v-for="(marker, index) in markers"
       v-bind:key="index"
       v-bind:position="marker.position"
       />
     <GmapMarker
       v-if="this.place"
       label="★"
       v-bind:position="{
         lat: this.place.geometry.location.lat(),
         lng: this.place.geometry.location.lng(),
       }"/>
   </GmapMap>

  </div>
</template>
